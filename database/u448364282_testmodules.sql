-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 19 avr. 2024 à 10:44
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `u448364282_testmodules`
--

-- --------------------------------------------------------

--
-- Structure de la table `datas`
--

DROP TABLE IF EXISTS `datas`;
CREATE TABLE IF NOT EXISTS `datas` (
  `id` int DEFAULT NULL,
  `uv` int DEFAULT NULL,
  `name` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `datas`
--

INSERT INTO `datas` (`id`, `uv`, `name`) VALUES
(1, 20, '2024-04-19'),
(1, 50, '2024-04-19'),
(1, 100, '2024-04-19'),
(3, 90, '2024-04-19');

-- --------------------------------------------------------

--
-- Structure de la table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `new_update` date DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `name` text COLLATE utf8mb4_unicode_ci,
  `dataTypeName` text COLLATE utf8mb4_unicode_ci,
  `dataType` text COLLATE utf8mb4_unicode_ci,
  `working` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `modules`
--

INSERT INTO `modules` (`id`, `new_update`, `description`, `name`, `dataTypeName`, `dataType`, `working`) VALUES
(1, '2024-04-19', 'Know the speed, using speed type Km by hours', 'sensor1', 'Speed', 'Km by hours', 0),
(2, '2024-04-16', 'know the temperature using celcius', 'sensor2', 'temperature', 'celcius', 1),
(3, '2024-04-04', 'know the sound using decibels', 'sensor3', 'sound', 'decibels', 1),
(18, '2024-04-19', 'description', 'sensor test', 'Data type name', 'Data type', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
