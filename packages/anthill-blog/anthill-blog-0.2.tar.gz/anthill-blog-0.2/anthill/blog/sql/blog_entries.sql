CREATE TABLE `blog_entries` (
	`entry_id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`gamespace_id` INT(11) UNSIGNED NOT NULL,
	`blog_id` INT(11) UNSIGNED NOT NULL,
	`entry_enabled` TINYINT(1) NOT NULL DEFAULT '1',
	`entry_data` JSON NOT NULL,
	`entry_create_dt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`entry_update_dt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`entry_id`),
	INDEX `FK_blog_entries_blogs` (`blog_id`),
	CONSTRAINT `FK_blog_entries_blogs` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`blog_id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=4;
