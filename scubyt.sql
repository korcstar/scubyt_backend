-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2021 at 04:59 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `cid` bigint(20) NOT NULL,
  `movie_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `lead_studio` varchar(255) DEFAULT NULL,
  `audience_score` int(3) DEFAULT NULL,
  `profitability` double DEFAULT NULL,
  `rotten_tomatoes` int(3) DEFAULT NULL,
  `worldwide_gross` varchar(20) DEFAULT NULL,
  `year` int(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `genre`, `lead_studio`, `audience_score`, `profitability`, `rotten_tomatoes`, `worldwide_gross`, `year`) VALUES
(1, 'Zack and Miri Make a Porno', 'Romance', 'The Weinstein Company', 70, 1.747541667, 64, '$41.94 ', 2008),
(2, 'Youth in Revolt', 'Comedy', 'The Weinstein Company', 52, 1.09, 68, '$19.62 ', 2010),
(3, 'You Will Meet a Tall Dark Stranger', 'Comedy', 'Independent', 35, 1.211818182, 43, '$26.66 ', 2010),
(4, 'When in Rome', 'Comedy', 'Disney', 44, 0, 15, '$43.04 ', 2010),
(5, 'What Happens in Vegas', 'Comedy', 'Fox', 72, 6.267647029, 28, '$219.37 ', 2008),
(6, 'Water For Elephants', 'Drama', '20th Century Fox', 72, 3.081421053, 60, '$117.09 ', 2011),
(7, 'WALL-E', 'Animation', 'Disney', 89, 2.896019067, 96, '$521.28 ', 2008),
(8, 'Waitress', 'Romance', 'Independent', 67, 9.999999999, 89, '$22.18 ', 2007),
(9, 'Waiting For Forever', 'Romance', 'Independent', 53, 0.005, 6, '$0.03 ', 2011),
(10, 'Valentine\'s Day', 'Comedy', 'Warner Bros.', 54, 4.184038462, 17, '$217.57 ', 2010),
(11, 'Tyler Perry\'s Why Did I get Married', 'Romance', 'Independent', 47, 3.7241924, 46, '$55.86 ', 2007),
(12, 'Twilight: Breaking Dawn', 'Romance', 'Independent', 68, 6.383363636, 26, '$702.17 ', 2011),
(13, 'Twilight', 'Romance', 'Summit', 82, 9.999999999, 49, '$376.66 ', 2008),
(14, 'The Ugly Truth', 'Comedy', 'Independent', 68, 5.402631579, 14, '$205.30 ', 2009),
(15, 'The Twilight Saga: New Moon', 'Drama', 'Summit', 78, 9.999999999, 27, '$709.82 ', 2009),
(16, 'The Time Traveler\'s Wife', 'Drama', 'Paramount', 65, 2.598205128, 38, '$101.33 ', 2009),
(17, 'The Proposal', 'Comedy', 'Disney', 74, 7.8675, 43, '$314.70 ', 2009),
(18, 'The Invention of Lying', 'Comedy', 'Warner Bros.', 47, 1.751351351, 56, '$32.40 ', 2009),
(19, 'The Heartbreak Kid', 'Comedy', 'Paramount', 41, 2.129444167, 30, '$127.77 ', 2007),
(20, 'The Duchess', 'Drama', 'Paramount', 68, 3.207850222, 60, '$43.31 ', 2008),
(21, 'The Curious Case of Benjamin Button', 'Fantasy', 'Warner Bros.', 81, 1.78394375, 73, '$285.43 ', 2008),
(22, 'The Back-up Plan', 'Comedy', 'CBS', 47, 2.202571429, 20, '$77.09 ', 2010),
(23, 'Tangled', 'Animation', 'Disney', 88, 1.365692308, 89, '$355.01 ', 2010),
(24, 'Something Borrowed', 'Romance', 'Independent', 48, 1.719514286, 15, '$60.18 ', 2011),
(25, 'She\'s Out of My League', 'Comedy', 'Paramount', 60, 2.4405, 57, '$48.81 ', 2010),
(26, 'Sex and the City Two', 'Comedy', 'Warner Bros.', 49, 2.8835, 15, '$288.35 ', 2010),
(27, 'Sex and the City 2', 'Comedy', 'Warner Bros.', 49, 2.8835, 15, '$288.35 ', 2010),
(28, 'Sex and the City', 'Comedy', 'Warner Bros.', 81, 7.221795791, 49, '$415.25 ', 2008),
(29, 'Remember Me', 'Drama', 'Summit', 70, 3.49125, 28, '$55.86 ', 2010),
(30, 'Rachel Getting Married', 'Drama', 'Independent', 61, 1.384166667, 85, '$16.61 ', 2008),
(31, 'Penelope', 'Comedy', 'Summit', 74, 1.382799733, 52, '$20.74 ', 2008),
(32, 'P.S. I Love You', 'Romance', 'Independent', 82, 5.103116833, 21, '$153.09 ', 2007),
(33, 'Over Her Dead Body', 'Comedy', 'New Line', 47, 2.071, 15, '$20.71 ', 2008),
(34, 'Our Family Wedding', 'Comedy', 'Independent', 49, 0, 14, '$21.37 ', 2010),
(35, 'One Day', 'Romance', 'Independent', 54, 3.682733333, 37, '$55.24 ', 2011),
(36, 'Not Easily Broken', 'Drama', 'Independent', 66, 2.14, 34, '$10.70 ', 2009),
(37, 'No Reservations', 'Comedy', 'Warner Bros.', 64, 3.307180357, 39, '$92.60 ', 2007),
(38, 'Nick and Norah\'s Infinite Playlist', 'Comedy', 'Sony', 67, 3.3527293, 73, '$33.53 ', 2008),
(39, 'New Year\'s Eve', 'Romance', 'Warner Bros.', 48, 2.536428571, 8, '$142.04 ', 2011),
(40, 'My Week with Marilyn', 'Drama', 'The Weinstein Company', 84, 0.8258, 83, '$8.26 ', 2011),
(41, 'Music and Lyrics', 'Romance', 'Warner Bros.', 70, 3.64741055, 63, '$145.90 ', 2007),
(42, 'Monte Carlo', 'Romance', '20th Century Fox', 50, 1.9832, 38, '$39.66 ', 2011),
(43, 'Miss Pettigrew Lives for a Day', 'Comedy', 'Independent', 70, 0.2528949, 78, '$15.17 ', 2008),
(44, 'Midnight in Paris', 'Romence', 'Sony', 84, 8.744705882, 93, '$148.66 ', 2011),
(45, 'Marley and Me', 'Comedy', 'Fox', 77, 3.746781818, 63, '$206.07 ', 2008),
(46, 'Mamma Mia!', 'Comedy', 'Universal', 76, 9.234453864, 53, '$609.47 ', 2008),
(47, 'Mamma Mia!', 'Comedy', 'Universal', 76, 9.234453864, 53, '$609.47 ', 2008),
(48, 'Made of Honor', 'Comdy', 'Sony', 61, 2.64906835, 13, '$105.96 ', 2008),
(49, 'Love Happens', 'Drama', 'Universal', 40, 2.004444444, 18, '$36.08 ', 2009),
(50, 'Love & Other Drugs', 'Comedy', 'Fox', 55, 1.817666667, 48, '$54.53 ', 2010),
(51, 'Life as We Know It', 'Comedy', 'Independent', 62, 2.530526316, 28, '$96.16 ', 2010),
(52, 'License to Wed', 'Comedy', 'Warner Bros.', 55, 1.9802064, 8, '$69.31 ', 2007),
(53, 'Letters to Juliet', 'Comedy', 'Summit', 62, 2.639333333, 40, '$79.18 ', 2010),
(54, 'Leap Year', 'Comedy', 'Universal', 49, 1.715263158, 21, '$32.59 ', 2010),
(55, 'Knocked Up', 'Comedy', 'Universal', 83, 6.636401848, 91, '$219 ', 2007),
(56, 'Killers', 'Action', 'Lionsgate', 45, 1.245333333, 11, '$93.40 ', 2010),
(57, 'Just Wright', 'Comedy', 'Fox', 58, 1.797416667, 45, '$21.57 ', 2010),
(58, 'Jane Eyre', 'Romance', 'Universal', 77, 0, 85, '$30.15 ', 2011),
(59, 'It\'s Complicated', 'Comedy', 'Universal', 63, 2.642352941, 56, '$224.60 ', 2009),
(60, 'I Love You Phillip Morris', 'Comedy', 'Independent', 57, 1.34, 71, '$20.10 ', 2010),
(61, 'High School Musical 3: Senior Year', 'Comedy', 'Disney', 76, 9.999999999, 65, '$252.04 ', 2008),
(62, 'He\'s Just Not That Into You', 'Comedy', 'Warner Bros.', 60, 7.1536, 42, '$178.84 ', 2009),
(63, 'Good Luck Chuck', 'Comedy', 'Lionsgate', 61, 2.36768512, 3, '$59.19 ', 2007),
(64, 'Going the Distance', 'Comedy', 'Warner Bros.', 56, 1.3140625, 53, '$42.05 ', 2010),
(65, 'Gnomeo and Juliet', 'Animation', 'Disney', 52, 5.387972222, 56, '$193.97 ', 2011),
(66, 'Gnomeo and Juliet', 'Animation', 'Disney', 52, 5.387972222, 56, '$193.97 ', 2011),
(67, 'Ghosts of Girlfriends Past', 'Comedy', 'Warner Bros.', 47, 2.0444, 27, '$102.22 ', 2009),
(68, 'Four Christmases', 'Comedy', 'Warner Bros.', 52, 2.022925, 26, '$161.83 ', 2008),
(69, 'Fireproof', 'Drama', 'Independent', 51, 9.999999999, 40, '$33.47 ', 2008),
(70, 'Enchanted', 'Comedy', 'Disney', 80, 4.005737082, 93, '$340.49 ', 2007),
(71, 'Dear John', 'Drama', 'Sony', 66, 4.5988, 29, '$114.97 ', 2010),
(72, 'Beginners', 'Comedy', 'Independent', 80, 4.471875, 84, '$14.31 ', 2011),
(73, 'Across the Universe', 'romance', 'Independent', 84, 0.652603178, 54, '$29.37 ', 2007),
(74, 'A Serious Man', 'Drama', 'Universal', 64, 4.382857143, 89, '$30.68 ', 2009),
(75, 'A Dangerous Method', 'Drama', 'Independent', 89, 0.44864475, 79, '$8.97 ', 2011),
(76, '27 Dresses', 'Comedy', 'Fox', 71, 5.3436218, 40, '$160.31 ', 2008),
(77, '(500) Days of Summer', 'comedy', 'Fox', 81, 8.096, 87, '$60.72 ', 2009);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `cid` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
