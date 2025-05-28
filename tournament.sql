--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `draw_id` bigint DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gender` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,4,11,'-75 KG',0,'2022-10-08 23:18:41','2022-12-06 07:52:53','Male'),(2,4,1,'-55 KG',0,'2022-09-19 10:46:54','2022-10-08 17:51:30','Female'),(3,4,NULL,'-90 KG',1,'2022-09-19 10:54:07','2022-10-06 20:05:58','Male'),(4,4,7,'-65 KG',0,'2022-10-08 17:37:35','2022-10-27 20:47:14','Male'),(5,4,10,'-60 KG',0,'2022-10-07 10:26:59','2022-10-31 14:34:56','Male'),(6,4,NULL,'-80 KG',0,'2022-10-07 10:51:26','2022-10-07 10:51:26','Male'),(7,4,NULL,'-50 KG',0,'2022-10-07 19:07:27','2022-10-07 19:07:51','Female'),(8,4,4,'-50 KG',0,'2022-10-11 11:10:09','2022-10-27 17:13:49','Male'),(9,2,16,'S -70 KG',0,'2022-12-13 09:35:23','2022-12-13 09:57:38','Male'),(10,2,17,'S -55 KG',0,'2022-12-13 09:35:32','2022-12-13 10:04:55','Female'),(11,2,13,'S -60 KG',0,'2022-12-13 09:35:42','2022-12-13 09:43:18','Male'),(12,6,18,'-50 kg',0,'2023-02-01 04:29:02','2023-02-01 04:39:18','Male'),(13,6,NULL,'-55 kg',0,'2023-02-01 04:29:12','2023-02-01 04:29:12','Male'),(14,6,19,'-45 kg',0,'2023-02-01 04:29:21','2023-02-01 04:48:03','Female'),(15,6,NULL,'-48 kg',0,'2023-02-01 04:29:36','2023-02-01 04:29:36','Female');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clubs`
--

DROP TABLE IF EXISTS `clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clubs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tournament_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs`
--

LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;
INSERT INTO `clubs` VALUES (1,'Sukabumi Club',0,'2023-01-20 11:22:26','2023-01-20 11:22:26',4),(2,'Bandung Club',0,'2023-01-20 11:22:33','2023-01-20 11:22:33',4),(3,'PJTK',0,'2023-02-01 04:31:33','2023-02-01 04:31:33',6),(4,'JIB',0,'2023-02-01 04:31:40','2023-02-01 04:31:40',6),(5,'PJKB',0,'2023-02-01 04:31:50','2023-02-01 04:31:50',6),(6,'NJC',0,'2023-02-01 04:31:57','2023-02-01 04:31:57',6);
/*!40000 ALTER TABLE `clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competitors`
--

DROP TABLE IF EXISTS `competitors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competitors` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `club_id` bigint DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `seeding` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitors`
--

LOCK TABLES `competitors` WRITE;
/*!40000 ALTER TABLE `competitors` DISABLE KEYS */;
INSERT INTO `competitors` VALUES (1,4,2,'Moch',1,'2022-09-19 14:50:58','2022-09-19 14:51:11',NULL,NULL,NULL,NULL),(2,4,4,'Latif',0,'2023-02-27 10:07:16','2023-02-27 10:07:16',1,'2020-01-13','Male',1),(3,4,4,'Moch',0,'2022-09-19 16:51:36','2022-09-19 16:51:36',NULL,NULL,NULL,NULL),(4,4,2,'Bella',0,'2022-09-22 17:48:32','2022-09-22 17:48:32',NULL,NULL,NULL,NULL),(5,4,2,'Ilman',0,'2022-10-06 11:11:03','2022-10-06 11:11:03',NULL,NULL,NULL,NULL),(6,4,2,'Pratika',1,'2022-10-06 11:12:36','2022-10-06 11:16:01',NULL,NULL,NULL,NULL),(7,4,2,'Elka',1,'2022-10-06 11:21:51','2022-10-06 11:21:58',NULL,NULL,NULL,NULL),(8,4,2,'Prat',0,'2022-10-06 11:22:16','2022-10-06 11:22:57',NULL,NULL,NULL,NULL),(9,4,2,'',1,'2022-10-07 18:27:44','2022-10-07 18:27:50',NULL,NULL,NULL,NULL),(10,4,4,'Fikri',0,'2022-10-26 15:23:43','2022-10-26 15:23:43',NULL,NULL,NULL,NULL),(11,4,4,'Pandu',0,'2022-10-26 15:23:52','2022-10-26 15:23:52',NULL,NULL,NULL,NULL),(12,4,4,'Anggit',0,'2022-10-26 15:24:14','2022-10-26 15:24:14',NULL,NULL,NULL,NULL),(13,4,8,'Aryo',0,'2022-10-27 17:03:07','2022-10-27 17:03:07',NULL,NULL,NULL,NULL),(14,4,8,'Ridwan',0,'2022-10-27 17:03:20','2022-10-27 17:03:20',NULL,NULL,NULL,NULL),(15,4,5,'Ardhi',0,'2022-10-29 10:09:31','2022-10-29 10:09:31',NULL,NULL,NULL,NULL),(16,4,5,'Tongon',0,'2022-10-29 10:09:39','2022-10-29 10:09:39',NULL,NULL,NULL,NULL),(17,4,5,'Ocky',0,'2022-10-29 10:09:46','2022-10-29 10:09:46',NULL,NULL,NULL,NULL),(18,4,1,'Reza',0,'2022-12-06 07:52:19','2022-12-06 07:52:19',NULL,NULL,NULL,NULL),(19,4,1,'Jodi',0,'2022-12-06 07:52:25','2022-12-06 07:52:25',NULL,NULL,NULL,NULL),(20,2,9,'Elka',0,'2022-12-13 09:35:52','2022-12-13 09:35:52',NULL,NULL,NULL,NULL),(21,2,9,'Latif',0,'2022-12-13 09:35:58','2022-12-13 09:35:58',NULL,NULL,NULL,NULL),(22,2,9,'Pandu',0,'2022-12-13 09:36:04','2022-12-13 09:36:04',NULL,NULL,NULL,NULL),(23,2,9,'Fikri',0,'2022-12-13 09:36:13','2022-12-13 09:36:13',NULL,NULL,NULL,NULL),(24,2,9,'Anggit',0,'2022-12-13 09:36:20','2022-12-13 09:36:20',NULL,NULL,NULL,NULL),(25,2,9,'Aryo',0,'2022-12-13 09:36:25','2022-12-13 09:36:25',NULL,NULL,NULL,NULL),(26,2,11,'Abduh',0,'2022-12-13 09:37:53','2022-12-13 09:37:53',NULL,NULL,NULL,NULL),(27,2,11,'Abdi',0,'2022-12-13 09:37:59','2022-12-13 09:37:59',NULL,NULL,NULL,NULL),(28,2,11,'Ajin',0,'2022-12-13 09:38:06','2022-12-13 09:38:06',NULL,NULL,NULL,NULL),(29,2,10,'Reza',0,'2022-12-13 10:04:13','2022-12-13 10:04:13',NULL,NULL,NULL,NULL),(30,2,10,'Jodi',0,'2022-12-13 10:04:18','2022-12-13 10:04:18',NULL,NULL,NULL,NULL),(31,2,10,'Siska',0,'2022-12-13 10:04:23','2022-12-13 10:04:23',NULL,NULL,NULL,NULL),(32,2,10,'Nurul',0,'2022-12-13 10:04:29','2022-12-13 10:04:29',NULL,NULL,NULL,NULL),(33,6,12,'Adi',0,'2023-02-01 04:34:02','2023-02-01 04:34:02',3,'2023-02-01','Male',NULL),(34,6,12,'Agus',0,'2023-02-01 04:34:27','2023-02-01 04:34:27',4,'2023-02-01','Male',NULL),(35,6,12,'Acep',0,'2023-02-01 04:34:42','2023-02-01 04:34:42',5,'2023-02-01','Male',NULL),(36,6,12,'Obanai',0,'2023-02-01 04:34:57','2023-02-01 04:34:57',6,'2023-02-01','Male',NULL),(37,6,14,'Ani',0,'2023-02-01 04:46:39','2023-02-01 04:46:39',3,'2023-02-01','Female',NULL),(38,6,14,'Eka',0,'2023-02-01 04:46:52','2023-02-01 04:46:52',5,'2023-02-01','Female',NULL),(39,6,14,'Lina',0,'2023-02-01 04:47:11','2023-02-01 04:47:11',6,'2023-02-01','Female',NULL);
/*!40000 ALTER TABLE `competitors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `draw`
--

DROP TABLE IF EXISTS `draw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `draw` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `system` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `draw`
--

LOCK TABLES `draw` WRITE;
/*!40000 ALTER TABLE `draw` DISABLE KEYS */;
INSERT INTO `draw` VALUES (1,4,2,0,'2022-09-18 16:50:17','2022-09-18 16:50:17','Round Robin'),(4,4,8,0,'2022-10-27 17:13:49','2022-10-27 17:13:49','IJF Quarter'),(5,4,4,0,'2022-10-27 17:28:32','2022-10-27 17:28:32','IJF Quarter'),(6,4,4,0,'2022-10-27 20:27:02','2022-10-27 20:27:02','IJF Quarter'),(7,4,4,0,'2022-10-27 20:47:14','2022-10-27 20:47:14','IJF Quarter'),(8,4,5,0,'2022-10-29 10:10:08','2022-10-29 10:10:08','IJF Quarter'),(9,4,5,0,'2022-10-29 10:22:46','2022-10-29 10:22:46','IJF Quarter'),(10,4,5,0,'2022-10-31 14:34:57','2022-10-31 14:34:57','IJF Quarter'),(11,4,1,0,'2022-12-06 07:52:53','2022-12-06 07:52:53','IJF Quarter'),(12,2,9,0,'2022-12-13 09:39:00','2022-12-13 09:39:00','IJF Quarter'),(13,2,11,0,'2022-12-13 09:43:18','2022-12-13 09:43:18','Round Robin'),(14,2,9,0,'2022-12-13 09:49:29','2022-12-13 09:49:29','IJF Quarter'),(15,2,9,0,'2022-12-13 09:56:41','2022-12-13 09:56:41','IJF Quarter'),(16,2,9,0,'2022-12-13 09:57:39','2022-12-13 09:57:39','IJF Quarter'),(17,2,10,0,'2022-12-13 10:04:55','2022-12-13 10:04:55','IJF Quarter'),(18,6,12,0,'2023-02-01 04:39:18','2023-02-01 04:39:18','IJF Quarter'),(19,6,14,0,'2023-02-01 04:48:03','2023-02-01 04:48:03','Round Robin');
/*!40000 ALTER TABLE `draw` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `draw_id` bigint NOT NULL,
  `competitor1_id` bigint NOT NULL,
  `competitor2_id` bigint NOT NULL,
  `competitor1_point` tinyint unsigned DEFAULT '0',
  `competitor2_point` tinyint unsigned DEFAULT '0',
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `competitor1_foul` tinyint DEFAULT '0',
  `competitor2_foul` tinyint DEFAULT '0',
  `is_start` tinyint unsigned DEFAULT '0',
  `is_reset` tinyint unsigned DEFAULT '0',
  `is_start_lock` tinyint unsigned DEFAULT '0',
  `time` bigint NOT NULL DEFAULT '0',
  `is_reset_lock` tinyint unsigned DEFAULT '0',
  `tatami_id` bigint NOT NULL,
  `player_lock` bigint DEFAULT NULL,
  `default_time` bigint NOT NULL DEFAULT '0',
  `player_win` tinyint unsigned DEFAULT '0',
  `time_lock` bigint NOT NULL DEFAULT '0',
  `is_match` tinyint unsigned DEFAULT '1',
  `next_match_id` bigint DEFAULT NULL,
  `next_match_player` tinyint unsigned DEFAULT '0',
  `round` tinyint unsigned DEFAULT '0',
  `state` varchar(255) DEFAULT NULL,
  `order_id` varchar(255) NOT NULL DEFAULT '',
  `match_id` bigint DEFAULT NULL,
  `round_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `lost_next_match_id` bigint DEFAULT NULL,
  `lost_next_match_player` tinyint unsigned DEFAULT '0',
  `is_lost_bracket` tinyint unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,4,0,2,3,0,1,0,'2022-09-18 16:50:17','2022-10-27 20:49:05',1,0,0,0,0,281,1,1,NULL,300,0,0,1,NULL,0,0,NULL,'0',NULL,'',NULL,0,0),(2,4,0,2,3,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:49:05',NULL,NULL,0,0,0,0,0,1,NULL,180,0,0,1,NULL,0,0,NULL,'0',NULL,'',NULL,0,0),(10,4,1,4,5,1,1,0,'2022-10-08 21:55:23','2022-12-12 08:57:26',2,3,0,0,0,131,0,10,1,180,0,0,1,NULL,0,0,NULL,'7.4',NULL,'',NULL,0,0),(11,4,1,4,8,2,0,0,'2022-10-08 21:55:23','2023-01-24 10:40:49',1,2,0,0,0,179,0,10,0,180,1,0,1,NULL,0,0,NULL,'0',NULL,'',NULL,0,0),(12,4,1,5,8,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:49:05',2,1,0,1,0,180,0,10,NULL,180,0,0,1,NULL,0,0,NULL,'0',NULL,'',NULL,0,0),(13,4,4,14,13,0,0,0,'2022-10-08 21:55:23','2022-12-09 08:58:53',1,0,0,0,0,300,0,2,NULL,300,0,0,1,NULL,NULL,1,'DONE','7.3',1,'',NULL,0,0),(14,4,5,0,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,1,NULL,NULL,1,'DONE','5.1',1,'',NULL,0,0),(15,4,5,0,12,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,1,1,1,2,'DONE','5.2',2,'',NULL,0,0),(16,4,5,11,10,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,1,2,1,3,'DONE','5.3',3,'',NULL,0,0),(17,4,5,12,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,0,2,2,3,'DONE','5.4',4,'',NULL,0,0),(18,4,5,3,2,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,1,1,2,2,'DONE','5.5',5,'',NULL,0,0),(19,4,5,3,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,0,5,1,3,'DONE','5.6',6,'',NULL,0,0),(20,4,5,2,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 19:05:24',0,0,0,0,0,300,0,10,NULL,300,0,0,0,5,2,3,'DONE','5.7',7,'',NULL,0,0),(21,4,6,0,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,1,NULL,NULL,1,'DONE','6.1',1,'',NULL,0,0),(22,4,6,0,12,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,1,1,1,2,'DONE','6.2',2,'',NULL,0,0),(23,4,6,11,10,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,1,2,1,3,'DONE','6.3',3,'',NULL,0,0),(24,4,6,12,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,0,2,2,3,'DONE','6.4',4,'',NULL,0,0),(25,4,6,3,2,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,1,1,2,2,'DONE','6.5',5,'',NULL,0,0),(26,4,6,3,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,0,5,1,3,'DONE','6.6',6,'',NULL,0,0),(27,4,6,2,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:27:02',0,0,0,0,0,300,0,2,NULL,300,0,0,0,5,2,3,'DONE','6.7',7,'',NULL,0,0),(28,4,7,11,10,0,0,0,'2022-10-08 21:55:23','2022-12-12 08:57:22',0,0,0,0,0,297,0,2,NULL,300,0,0,1,2,1,3,'DONE','0',3,'',NULL,0,0),(29,4,7,3,2,0,0,0,'2022-10-08 21:55:23','2022-12-14 12:22:02',1,3,0,0,0,272,0,2,0,300,0,0,1,1,2,2,'DONE','11.1',5,'',NULL,0,0),(30,4,7,0,12,0,0,0,'2022-10-08 21:55:23','2022-12-06 10:52:15',0,0,0,0,0,300,0,2,NULL,300,0,0,1,1,1,2,'DONE','4.1',2,'',NULL,0,0),(31,4,7,0,0,0,0,0,'2022-10-08 21:55:23','2022-12-06 10:49:53',0,0,0,0,0,300,0,2,NULL,300,0,0,1,NULL,NULL,1,'DONE','7.2',1,'',NULL,0,0),(32,4,7,12,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:47:14',0,0,0,0,0,300,0,2,NULL,300,0,0,0,2,2,3,'DONE','7.5',4,'',NULL,0,0),(33,4,7,3,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:47:14',0,0,0,0,0,300,0,2,NULL,300,0,0,0,5,1,3,'DONE','7.6',6,'',NULL,0,0),(34,4,7,2,0,0,0,0,'2022-10-08 21:55:23','2022-10-27 20:47:14',0,0,0,0,0,300,0,2,NULL,300,0,0,0,5,2,3,'DONE','7.7',7,'',NULL,0,0),(35,4,11,19,18,0,0,0,'2022-12-06 07:52:53','2022-12-06 10:55:57',0,0,0,0,0,240,0,2,0,240,0,0,1,NULL,NULL,1,'DONE','7.1',1,'',NULL,0,0),(43,2,13,26,27,0,0,0,'2022-12-13 09:43:18','2022-12-13 09:43:18',0,0,0,0,0,180,0,11,0,180,0,0,1,NULL,NULL,NULL,NULL,'13.1',NULL,'',NULL,0,0),(44,2,13,26,28,0,0,0,'2022-12-13 09:43:18','2022-12-13 09:43:18',0,0,0,0,0,180,0,11,0,180,0,0,1,NULL,NULL,NULL,NULL,'13.2',NULL,'',NULL,0,0),(45,2,13,27,28,0,0,0,'2022-12-13 09:43:18','2022-12-13 09:43:18',0,0,0,0,0,180,0,11,0,180,0,0,1,NULL,NULL,NULL,NULL,'13.3',NULL,'',NULL,0,0),(60,2,16,24,23,1,0,0,'2022-12-13 09:57:39','2022-12-13 10:06:44',3,0,0,0,0,177,0,12,0,180,2,0,1,2,1,3,'DONE','16.5',3,'',NULL,0,0),(61,2,16,21,20,2,0,0,'2022-12-13 09:57:39','2022-12-13 10:07:14',0,0,0,0,0,180,0,12,0,180,1,0,1,5,1,3,'DONE','16.4',6,'',NULL,0,0),(62,2,16,23,25,2,0,0,'2022-12-13 09:57:39','2022-12-13 10:07:27',0,0,0,0,0,180,0,12,0,180,1,0,1,1,1,2,'DONE','16.3',2,'',NULL,0,0),(63,2,16,21,22,2,0,0,'2022-12-13 09:57:39','2022-12-13 10:07:59',0,2,0,0,0,178,0,12,0,180,1,0,1,1,2,2,'DONE','16.2',5,'',NULL,0,0),(64,2,16,23,21,0,2,0,'2022-12-13 09:57:39','2022-12-13 10:08:35',0,0,0,0,0,179,0,12,0,180,2,0,1,NULL,NULL,1,'DONE','16.1',1,'',NULL,0,0),(65,2,16,25,0,0,0,0,'2022-12-13 09:57:39','2022-12-13 09:57:39',0,0,0,0,0,180,0,12,0,180,0,0,0,2,2,3,'DONE','16.6',4,'',NULL,0,0),(66,2,16,22,0,0,0,0,'2022-12-13 09:57:39','2022-12-13 09:57:39',0,0,0,0,0,180,0,12,0,180,0,0,0,5,2,3,'DONE','16.7',7,'',NULL,0,0),(67,2,17,32,30,0,0,0,'2022-12-13 10:04:55','2022-12-13 10:05:08',0,0,0,0,0,300,0,11,0,300,0,0,1,1,1,2,'DONE','17.3',2,'',NULL,0,0),(68,2,17,31,29,0,0,0,'2022-12-13 10:04:55','2022-12-13 10:04:55',0,0,0,0,0,300,0,11,0,300,0,0,1,1,2,2,'DONE','17.2',3,'',NULL,0,0),(69,2,17,0,0,0,0,0,'2022-12-13 10:04:55','2022-12-13 10:05:08',0,0,0,0,0,300,0,11,0,300,0,0,1,NULL,NULL,1,'DONE','17.1',1,'',NULL,0,0),(70,6,18,33,35,2,1,0,'2023-02-01 04:39:18','2023-02-01 04:42:55',3,3,0,0,0,205,0,13,1,240,1,0,1,1,1,2,'DONE','18.2',2,'',NULL,0,0),(71,6,18,34,36,0,2,0,'2023-02-01 04:39:18','2023-02-01 04:43:49',1,0,0,0,0,102,0,13,1,240,2,0,1,1,2,2,'DONE','18.3',3,'',NULL,0,0),(72,6,18,33,36,2,0,0,'2023-02-01 04:39:18','2023-02-01 04:55:52',0,0,0,0,0,233,0,13,0,240,1,0,1,NULL,NULL,1,'DONE','18.1',1,'',NULL,0,0),(73,6,19,37,38,0,2,0,'2023-02-01 04:48:03','2023-02-01 04:52:16',0,0,0,0,0,224,0,14,0,240,2,0,1,NULL,NULL,NULL,NULL,'19.1',NULL,'',NULL,0,0),(74,6,19,37,39,2,0,0,'2023-02-01 04:48:03','2023-02-01 04:51:53',1,0,0,0,0,232,0,14,0,240,1,0,1,NULL,NULL,NULL,NULL,'19.2',NULL,'',NULL,0,0),(75,6,19,38,39,2,0,0,'2023-02-01 04:48:03','2023-02-01 04:51:30',0,0,0,0,0,235,0,14,0,240,1,0,1,NULL,NULL,NULL,NULL,'19.3',NULL,'',NULL,0,0);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referees`
--

DROP TABLE IF EXISTS `referees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referees` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referees`
--

LOCK TABLES `referees` WRITE;
/*!40000 ALTER TABLE `referees` DISABLE KEYS */;
INSERT INTO `referees` VALUES (1,4,'Ilman',0,'2023-01-25 04:23:29','2023-01-25 04:23:29');
/*!40000 ALTER TABLE `referees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tatamis`
--

DROP TABLE IF EXISTS `tatamis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tatamis` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tatamis`
--

LOCK TABLES `tatamis` WRITE;
/*!40000 ALTER TABLE `tatamis` DISABLE KEYS */;
INSERT INTO `tatamis` VALUES (1,0,'Tatami 1',0,'2022-09-09 16:08:33','2022-09-09 16:08:33'),(2,4,'Tatami 1',0,'2022-09-09 16:28:35','2022-09-18 16:07:45'),(3,4,'Tatami 2',1,'2022-09-09 16:54:52','2022-09-09 16:57:13'),(4,4,'Tatami 2',1,'2022-09-09 16:57:20','2022-09-18 16:31:58'),(5,4,'Tatami 3a',1,'2022-09-18 16:07:55','2022-09-18 16:08:00'),(6,4,'Tatami 3',1,'2022-09-18 16:14:06','2022-09-18 16:18:14'),(7,4,'Tatami 2',1,'2022-09-18 16:32:12','2022-09-18 16:32:20'),(8,4,'Tatami 2',1,'2022-09-18 16:34:39','2022-09-18 16:35:59'),(9,4,'Tatami 2',1,'2022-09-18 16:49:22','2022-09-19 11:50:53'),(10,4,'Tatami 2',0,'2022-09-22 16:28:17','2022-09-22 16:28:17'),(11,2,'STatami 1',0,'2022-12-13 09:31:59','2022-12-13 10:03:18'),(12,2,'STatami 2',0,'2022-12-13 09:32:11','2022-12-13 09:32:11'),(13,6,'1',0,'2023-02-01 04:27:52','2023-02-01 04:27:52'),(14,6,'2',0,'2023-02-01 04:46:21','2023-02-01 04:46:21');
/*!40000 ALTER TABLE `tatamis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournaments`
--

DROP TABLE IF EXISTS `tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournaments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,'Sukabumi Open',1,'2022-09-02 14:48:20','2022-09-02 15:04:43'),(2,'Sukabumi Open 2',0,'2022-09-02 15:04:49','2022-09-02 15:05:33'),(3,'Cimahi Open 2',0,'2022-09-06 17:28:32','2022-09-09 16:55:04'),(4,'Bandung Open',0,'2022-09-07 08:24:53','2022-09-22 15:35:06'),(5,'Server',0,'2022-12-06 05:17:15','2022-12-06 05:17:15'),(6,'TEST',0,'2023-02-01 04:27:27','2023-02-01 04:27:27');
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;