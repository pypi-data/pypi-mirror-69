CREATE TABLE `blogs` (
  `blog_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gamespace_id` int(10) unsigned NOT NULL,
  `blog_name` varchar(128) NOT NULL,
  `blog_schema` json NOT NULL,
  `blog_enabled` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`blog_id`),
  UNIQUE KEY `blog_name_gamespace_id` (`blog_name`,`gamespace_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;