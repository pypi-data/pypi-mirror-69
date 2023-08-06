CREATE TABLE `group_participants` (
  `participation_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(10) unsigned NOT NULL,
  `group_class` varchar(64) NOT NULL,
  `group_key` varchar(255) NOT NULL,
  `gamespace_id` int(11) unsigned NOT NULL,
  `cluster_id` int(10) unsigned NOT NULL,
  `participation_account` int(11) NOT NULL,
  `participation_role` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`participation_id`),
  UNIQUE KEY `gamespace_id` (`gamespace_id`,`group_id`,`participation_account`),
  KEY `participation_account` (`participation_account`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `group_participants_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;