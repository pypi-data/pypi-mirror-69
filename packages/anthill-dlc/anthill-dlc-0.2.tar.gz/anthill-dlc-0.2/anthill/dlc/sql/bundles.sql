CREATE TABLE `bundles` (
  `bundle_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `gamespace_id` int(11) unsigned NOT NULL,
  `bundle_name` varchar(128) NOT NULL,
  `bundle_key` varchar(64) NOT NULL,
  `bundle_url` varchar(512) DEFAULT NULL,
  `bundle_size` int(11) unsigned NOT NULL DEFAULT '0',
  `bundle_hash` varchar(64) DEFAULT NULL,
  `bundle_status` enum('CREATED','UPLOADED','DELIVERING','DELIVERED','ERROR') NOT NULL DEFAULT 'CREATED',
  `bundle_filters` json NOT NULL,
  `bundle_payload` json NOT NULL,
  PRIMARY KEY (`bundle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;