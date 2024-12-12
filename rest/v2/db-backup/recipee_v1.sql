-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 08:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipe_category`
--

CREATE TABLE `recipe_category` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_image` varchar(30) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_category`
--

INSERT INTO `recipe_category` (`recipe_aid`, `recipe_is_active`, `recipe_image`, `recipe_title`, `recipe_datetime`, `recipe_created`) VALUES
(1, 1, '', 'Freshly Baked Carbonara', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_level`
--

CREATE TABLE `recipe_level` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- Indexes for table `recipe_category`
--
ALTER TABLE `recipe_category`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recipe_category`
--
ALTER TABLE `recipe_category`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
