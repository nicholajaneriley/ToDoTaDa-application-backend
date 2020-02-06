-- MySQL dump 10.13  Distrib 8.0.18, for osx10.15 (x86_64)
--
-- Host: techreturners-database.caxnbvlzvaey.eu-west-1.rds.amazonaws.com    Database: toDoTaDa
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Task`
--

DROP TABLE IF EXISTS `Task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Task` (
  `TaskID` int(11) NOT NULL AUTO_INCREMENT,
  `completed` tinyint(1) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `task` varchar(255) NOT NULL,
  `emotion` varchar(255) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`TaskID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Task`
--

LOCK TABLES `Task` WRITE;
/*!40000 ALTER TABLE `Task` DISABLE KEYS */;
INSERT INTO `Task` VALUES (1,1,'2020-01-15','Make a cake','smile',1),(2,1,'2020-01-15','Make buns','smile',1),(3,0,'2020-02-14','Make app',NULL,1);
/*!40000 ALTER TABLE `Task` ENABLE KEYS */;
UNLOCK TABLES;
