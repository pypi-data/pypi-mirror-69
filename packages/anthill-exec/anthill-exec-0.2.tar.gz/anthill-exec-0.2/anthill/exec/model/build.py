import os

from tornado.gen import TimeoutError, with_timeout, IOLoop
from tornado.ioloop import PeriodicCallback
# noinspection PyUnresolvedReferences
from v8py import JSException, JSPromise, Context, new, JavaScriptTerminated, Script

from . api import expose
from . session import JavascriptSession, JavascriptSessionError
from . util import APIError, PromiseContext, JavascriptCallHandler, JavascriptExecutionError, JSFuture
from . import stdlib

from anthill.common.model import Model
from anthill.common.access import InternalError
from anthill.common.source import SourceCodeRoot, SourceCommitAdapter, SourceProjectAdapter
from anthill.common.source import SourceCodeError, ServerCodeAdapter
from anthill.common.validate import validate


from expiringdict import ExpiringDict

from anthill.common.options import options
import datetime
import logging
from .. import options as _opts


class JavascriptBuildError(Exception):
    def __init__(self, code, message):
        self.code = code
        self.message = message

    def __str__(self):
        return str(self.code) + ": " + self.message


class NoSuchMethod(Exception):
    pass


class NoSuchClass(Exception):
    pass


class JavascriptBuild(object):
    def __init__(self, build_id=None, model=None, source_path=None, autorelease_time=30000, is_server=False):
        self.build_id = build_id
        self.model = model
        self.context = Context()
        self.promise_type = self.context.glob.Promise
        self.build_cache = ExpiringDict(2048, 60)

        # this variable holds amount of users of this build. once this variable hits back to zero,
        # eventually the build will be released
        self.refs = 0
        self._check_refs = PeriodicCallback(self.__check_build_refs__, autorelease_time)
        self.released = False

        try:
            script = Script(source=stdlib.source, filename=stdlib.name)
            self.context.eval(script)
        except Exception as e:
            logging.exception("Error while compiling stdlib.js")
            raise JavascriptBuildError(500, str(e))

        if source_path:
            for file_name in os.listdir(source_path):
                if not file_name.endswith(".js"):
                    continue

                logging.info("Compiling file {0}".format(os.path.join(source_path, file_name)))

                try:
                    with open(os.path.join(source_path, file_name), 'r') as f:
                        script = Script(source=f.read(), filename=str(file_name))
                        self.context.eval(script)
                except Exception as e:
                    logging.exception("Error while compiling")
                    raise JavascriptBuildError(500, str(e))

        expose(self.context, is_server=is_server)
        if self.build_id:
            logging.info("Created new build {0}".format(self.build_id))

        self._check_refs.start()

    def __check_build_refs__(self):
        if self.refs > 0:
            return

        if self.build_id:
            logging.info("Build {0} is being released because no usages left.".format(self.build_id))

        self._remove_timeout = None
        IOLoop.current().add_callback(self.release)

    @validate(source_code="str", filename="str")
    def add_source(self, source_code, filename=None):
        script = Script(source=str(source_code), filename=str(filename))
        try:
            self.context.eval(script)
        except JSException as e:
            raise JavascriptBuildError(500, e.message)

    @validate(class_name="str_name", args="json_dict")
    def session(self, class_name, args, log=None, debug=None, **env):
        if class_name not in self.context.glob:
            raise NoSuchClass()
        clazz = getattr(self.context.glob, class_name)

        # each 'session' class should have 'SessionClass.allow_session = true' defined
        if not getattr(clazz, "allow_session", False):
            raise NoSuchClass()

        handler = JavascriptCallHandler(self.build_cache, env, self.context,
                                        debug=debug, promise_type=self.promise_type)
        if log:
            handler.log = log
        PromiseContext.current = handler

        try:
            instance = new(clazz, args, env)
        except TypeError:
            raise JavascriptSessionError(500, "Failed to open session: TypeError while construction")
        except JSException as e:
            raise JavascriptSessionError(500, "Failed to open session: " + str(e))

        # declare some usage, session will release it using 'session_released' call
        self.add_ref()
        return JavascriptSession(self, instance, env, log=log, debug=debug,
                                 cache=self.build_cache, promise_type=self.promise_type)

    @validate(method_name="str_name", args="json_dict")
    async def call(self, method_name, args, call_timeout=10, **env):

        if method_name.startswith("_"):
            raise NoSuchMethod()

        if method_name in JavascriptSession.CALL_BLACKLIST:
            raise NoSuchMethod()

        instance = self.context.glob

        if not hasattr(instance, method_name):
            raise NoSuchMethod()

        method = getattr(instance, method_name)

        # each plain function should have 'function.allow_call = true' defined
        if not getattr(method, "allow_call", False):
            raise NoSuchMethod()

        handler = JavascriptCallHandler(None, env, self.context, promise_type=self.promise_type)
        PromiseContext.current = handler

        # declare some usage until this call is finished
        self.add_ref()

        try:
            try:
                future = self.context.async_call(method, (args,), JSFuture)
            except JSException as e:
                value = e.value
                if hasattr(value, "code"):
                    if hasattr(value, "stack"):
                        raise JavascriptExecutionError(value.code, value.message, stack=str(value.stack))
                    else:
                        raise JavascriptExecutionError(value.code, value.message)
                if hasattr(e, "stack"):
                    raise JavascriptExecutionError(500, str(e), stack=str(e.stack))
                raise JavascriptExecutionError(500, str(e))
            except APIError as e:
                raise JavascriptExecutionError(e.code, e.message)
            except InternalError as e:
                raise JavascriptExecutionError(
                    e.code, "Internal error: " + e.body)
            except JavaScriptTerminated:
                raise JavascriptExecutionError(
                    408, "Evaluation process timeout: function shouldn't be "
                         "blocking and should rely on async methods instead.")
            except Exception as e:
                raise JavascriptExecutionError(500, str(e))

            if future.done():
                return future.result()

            try:
                result = await with_timeout(datetime.timedelta(seconds=call_timeout), future)
            except TimeoutError:
                raise APIError(408, "Total function '{0}' call timeout ({1})".format(
                    method_name, call_timeout))
            else:
                return result

        finally:
            del handler.context
            del handler
            self.remove_ref()

    def add_ref(self):
        self.refs += 1

    def remove_ref(self):
        self.refs -= 1

    async def session_released(self, session):
        self.remove_ref()

    async def release(self):
        if self.released:
            return

        self._check_refs.stop()
        self._check_refs = None

        if hasattr(self, "context"):
            del self.context

        if self.build_id:
            logging.info("Build released {0}".format(self.build_id))

        if self.model:
            await self.model.build_released(self)

        self.released = True


class JavascriptBuildsModel(Model):

    SERVER_PROJECT_NAME = "server"

    def __init__(self, root_dir, sources):
        self.sources = sources
        self.root = SourceCodeRoot(root_dir)
        self.builds = {}

    @staticmethod
    def __get_build_id__(source):
        return str(source.name) + "_" + str(source.repository_commit)

    @staticmethod
    def __get_server_build_id__(source):
        return str(JavascriptBuildsModel.SERVER_PROJECT_NAME) + "_" + str(source.repository_commit)

    def validate_repository_url(self, url, ssh_private_key=None):
        return self.root.validate_repository_url(url, ssh_private_key)

    @validate(source=ServerCodeAdapter)
    async def get_server_build(self, source):

        build_id = JavascriptBuildsModel.__get_server_build_id__(source)
        build = self.builds.get(build_id, None)
        if build:
            return build

        try:
            project = self.root.project(source.gamespace_id, JavascriptBuildsModel.SERVER_PROJECT_NAME,
                                        source.repository_url, source.repository_branch,
                                        source.ssh_private_key)
            await project.init()
            source_build = project.build(source.repository_commit)
            await source_build.init()
        except SourceCodeError as e:
            raise JavascriptBuildError(e.code, e.message)

        build = JavascriptBuild(build_id, self, source_build.build_dir, is_server=True)
        self.builds[build_id] = build
        return build

    @validate(source=SourceCommitAdapter)
    async def get_build(self, source):

        build_id = JavascriptBuildsModel.__get_build_id__(source)
        build = self.builds.get(build_id, None)
        if build:
            return build

        try:
            project = self.root.project(source.gamespace_id, source.name,
                                        source.repository_url, source.repository_branch,
                                        source.ssh_private_key)
            await project.init()
            source_build = project.build(source.repository_commit)
            await source_build.init()
        except SourceCodeError as e:
            raise JavascriptBuildError(e.code, e.message)

        build = JavascriptBuild(build_id, self, source_build.build_dir)
        self.builds[build_id] = build
        return build

    @validate(project_settings=SourceProjectAdapter, commit="str_name")
    async def new_build_by_commit(self, project_settings, commit):

        try:
            project = self.root.project(
                project_settings.gamespace_id, project_settings.name,
                project_settings.repository_url, project_settings.repository_branch,
                project_settings.ssh_private_key)
            await project.init()
            source_build = project.build(commit)
            await source_build.init()
        except SourceCodeError as e:
            raise JavascriptBuildError(e.code, e.message)

        build = JavascriptBuild(None, self, source_build.build_dir)
        return build

    @validate(project_settings=ServerCodeAdapter)
    def get_server_project(self, project_settings):
        try:
            project_instance = self.root.project(
                project_settings.gamespace_id, JavascriptBuildsModel.SERVER_PROJECT_NAME,
                project_settings.repository_url, project_settings.repository_branch,
                project_settings.ssh_private_key)
        except SourceCodeError as e:
            raise JavascriptBuildError(e.code, e.message)
        else:
            return project_instance

    @validate(project_settings=SourceProjectAdapter)
    def get_project(self, project_settings):
        try:
            project_instance = self.root.project(
                project_settings.gamespace_id, project_settings.name,
                project_settings.repository_url, project_settings.repository_branch,
                project_settings.ssh_private_key)
        except SourceCodeError as e:
            raise JavascriptBuildError(e.code, e.message)
        else:
            return project_instance

    def __add_build__(self, build):
        self.builds[build.build_id] = build

    def __remove_build__(self, build):
        self.builds.pop(build.build_id, None)

    async def build_released(self, build):
        if build.build_id:
            self.__remove_build__(build)
