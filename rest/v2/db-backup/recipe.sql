-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 12:48 AM
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
-- Database: `recipe_v1`
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

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(8, 'SADF', 'chicken', 'moderate', 11, '12', 'slider-5.webp', '[{\"ingredients\":\"LNK\",\"amount\":\"2\",\"unit\":\"2\"}]', 'ASDDAF', 'jhnjuho', 0, '2024-12-04 15:10:34', '2024-12-04 14:29:23'),
(9, 'Tonkatsu', 'chicken', 'moderate', 2, '10mins', 'chicken-dinners.jpeg', '[{\"ingredients\":\"white sause\",\"amount\":\"4\",\"unit\":\"cup\"}]', 'Special', 'njndsannsnn', 1, '2024-12-04 14:47:12', '2024-12-04 14:47:03'),
(10, 'Chicken Tonkatsu', 'chicken', 'moderate', 4, '1hr', 'chicken-dinners.jpeg', '[{\"ingredients\":\"white sause\",\"amount\":\"12\",\"unit\":\"cups\"},{\"ingredients\":\"Salt and freshly ground black pepper\",\"amount\":\"3\",\"unit\":\"tsb\"},{\"ingredients\":\"boneless skinless chicken breasts, butterflied and cut into 4 cutlets\",\"amount\":\" 6\",\"unit\":\"oz\"}]', 'Celebrate the holidays with friends, family and festive recipes. What could be merrier than that?!', '##### Step 1\njadhbjabdjbnwnaoehoiiwjdoiijwwoiidjjdij\n\n\n###### Step 2\nGather your family and friends and celebrate the Festival of Lights with recipes for latkes, brisket, rugelach and more.\n\n###### Step 3\nAnd these inventive recipes aren\\\\\\\'t just adorable — they\\\\\\\'re just as delicious as they are cheeky.', 1, '2024-12-04 15:10:15', '2024-12-04 14:59:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
