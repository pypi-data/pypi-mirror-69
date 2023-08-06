CREATE TABLE `exec_application_settings` (
  `gamespace_id` int(11) unsigned NOT NULL,
  `application_name` varchar(64) NOT NULL DEFAULT '',
  `repository_url` varchar(255) NOT NULL DEFAULT '',
  `repository_branch` varchar(255) NOT NULL DEFAULT 'master',
  `ssh_private_key` varchar(4096) NOT NULL DEFAULT '',
  PRIMARY KEY (`gamespace_id`,`application_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
