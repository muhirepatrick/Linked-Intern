-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2024 at 02:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linkedintern`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `reg_index` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `collage` varchar(255) NOT NULL,
  `department` varchar(200) NOT NULL,
  `year` varchar(189) NOT NULL,
  `options` varchar(255) NOT NULL,
  `phone` int(14) NOT NULL,
  `province` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `sector` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`reg_index`, `first_name`, `last_name`, `gender`, `email`, `collage`, `department`, `year`, `options`, `phone`, `province`, `district`, `sector`, `cell`, `password`) VALUES
('132', 'kk', 'mmjhv', 'mvmv', 'mvifv', 'iprc-musanze', '', '', 'e-commerce', 98765, 'kgvkvjgv', 'mvmvmm ', 'vjvvjmgv', 'nvvjmgvm v', '1234'),
('1343', 'kk', 'mmjhv', 'mvmv', 'mvifv', '', '', '', '', 98765, 'kgvkvjgv', 'mvmvmm ', 'vjvvjmgv', 'nvvjmgvm v', '1234'),
('34rp0987', 'kwizera', 'bora', 'Female', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', '3', 'it', 78999000, 'Kigali', 'Gasabo', 'Kimironko', 'Kibagabaga', '0987'),
('5432', 'bebe', 'nana', 'Female', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', '2', 'e-commerce', 48495432, 'North', 'Gicumbi', 'Mutete', 'Kabeza', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `institutions`
--

CREATE TABLE `institutions` (
  `company_name` varchar(255) NOT NULL,
  `company_type` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `abbreviation` varchar(255) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `company_phone` int(14) NOT NULL,
  `province` varchar(225) NOT NULL,
  `district` varchar(255) NOT NULL,
  `sector` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `person_first_name` varchar(255) NOT NULL,
  `person_last_name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `institutions`
--

INSERT INTO `institutions` (`company_name`, `company_type`, `department`, `abbreviation`, `company_email`, `company_phone`, `province`, `district`, `sector`, `cell`, `person_first_name`, `person_last_name`, `role`, `title`, `password`) VALUES
('jgckc', 'kjgfijm', 'ikbkidbc', 'kudgkhebe', 'kwgvdkgve', 98765, 'scmksdc', 'msxvjkvs', 'ngawcj', 'msxxjvs', 's xm s', 'shbcksv', 'mcv ms', 'khyhkchv', 'sc  s'),
('jgckc', 'kjgfijm', 'ikbkidbc', 'kudgkhebe', 'kwgvdkgve', 98765, 'scmksdc', 'msxvjkvs', 'ngawcj', 'msxxjvs', 's xm s', 'shbcksv', 'mcv ms', 'khyhkchv', 'sc  s'),
('linked', 'private', 'Manufacturing', 'L', 'gaga@gmail.com', 78337393, 'Kigali', 'Gasabo', 'Kacyiru', 'Kamutwa', 'gaga', 'cloudian', 'manager', 'dr', '123'),
('clickrwanda', 'public', 'ICT', 'cr', 'pmbeggar@gmail.com', 8788843, 'Kigali', 'Gasabo', 'Remera', 'Nyarutarama', 'bigwi', 'eric patrick', 'manager', 'dr', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `id` int(11) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `province` varchar(200) NOT NULL,
  `district` varchar(200) NOT NULL,
  `sector` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `position` int(13) NOT NULL,
  `DOP` date NOT NULL,
  `TOP` time NOT NULL,
  `requirements` text NOT NULL,
  `telephone` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `internships`
--

INSERT INTO `internships` (`id`, `company_email`, `company_name`, `province`, `district`, `sector`, `department`, `position`, `DOP`, `TOP`, `requirements`, `telephone`) VALUES
(1, 'gaga@gmail.com', 'linked', 'South', 'Muhanga', 'Nyarusange', 'Manufacturing', 12, '2024-05-29', '15:46:00', 'dsfghjkmhnvbc ', 987623),
(2, 'bigwi@gmail.com', 'isaro company ltd', 'kigali', 'nyarugenge', 'kimisagara', 'ict', 30, '2024-05-22', '16:42:05', 'we come to isaro company limited we are happy to  inform you that we have generated internships to the students in ict department where we need university students to come and get the internship tha it is free to every one means we are not asking for paying money to get that application will end on 23 may so please be aware of applying this internship to increase your level of study and also the exprience in ict and computer development ', 78392934),
(3, 'bigwi@gmail.com', 'isaro company ltd', 'kigali', 'nyarugenge', 'kimisagara', 'ict', 30, '2024-05-22', '16:42:05', 'we come to isaro company limited we are happy to  inform you that we have generated internships to the students in ict department where we need university students to come and get the internship tha it is free to every one means we are not asking for paying money to get that application will end on 23 may so please be aware of applying this internship to increase your level of study and also the exprience in ict and computer development ', 78392934),
(4, 'gaga@gmail.com', 'linked', 'North', 'Burera', 'Rusarabuye', 'Manufacturing', 15, '2024-05-31', '21:15:00', 'my requirement', 78965788),
(5, 'gaga@gmail.com', 'linked', 'North', 'Gakenke', 'Minazi', 'Manufacturing', 10, '2024-07-23', '17:17:00', 'hello students we are linkedintern we are providing the internship please apply be for the date of 20/08/2024. \nthe requirements for this internship are the internship document from your schools.\nwe are waiting for you to apply.', 780950948);

-- --------------------------------------------------------

--
-- Table structure for table `logbooks`
--

CREATE TABLE `logbooks` (
  `id_log` int(11) NOT NULL,
  `index_num` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `collage` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `options` varchar(200) NOT NULL,
  `year` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `tools` varchar(255) NOT NULL,
  `datedone` date NOT NULL,
  `hours` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logbooks`
--

INSERT INTO `logbooks` (`id_log`, `index_num`, `email`, `collage`, `department`, `options`, `year`, `activity`, `tools`, `datedone`, `hours`) VALUES
(1, '5432', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '', ' 5yu', 'tg', '2024-05-29', 2),
(2, '5432', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '', ' 5yu', 'tg', '2024-05-29', 2),
(3, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-01', 3),
(4, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-02', 3),
(5, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-03', 3),
(6, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-04', 2),
(7, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-10', 3),
(8, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-11', 3),
(9, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-12', 2),
(10, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-13', 2),
(11, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-14', 2),
(12, '5324', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'iiikcdsk', 'odikdbs', '2024-05-15', 2),
(13, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-21', 4),
(14, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-21', 4),
(15, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-31', 4),
(16, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-30', 4),
(17, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-30', 4),
(18, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-28', 4),
(19, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-28', 4),
(20, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-27', 4),
(21, '34rp0987', 'borakwikwi@gmail.com', 'iprc-giishari', 'ict', 'it', '3', 'web design', 'computer', '2024-05-30', 4),
(22, '5432', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'web design', 'computer', '2024-05-30', 4),
(23, '5432', 'pmbeggar@gmail.com', 'iprc-musanze', 'ict', 'e-commerce', '2', 'web design', 'computer', '2024-05-30', 4);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(11) NOT NULL,
  `requester` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `collage` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `options` varchar(200) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `personalcv` text NOT NULL,
  `filename` text NOT NULL,
  `dates` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `requester`, `names`, `collage`, `department`, `options`, `company_name`, `company_email`, `personalcv`, `filename`, `dates`) VALUES
(1, '5432', '', '', '', '', 'isaro company ltd', 'gaga@gmail.com', 'i want that internsship', '171706670971715-05-2021-132150Money-master-the-Game-Tony-Robbins.pdf', '2024-05-30'),
(2, '34rp0987', '', '', '', '', 'linked', '', 'http://192.168.11.136:3000/', '1717076275259Mydocument.pdf', '2024-05-30'),
(3, '34rp0987', '', '', '', '', 'linked', 'gaga@gmail.com', 'http://192.168.11.136:3000/', '1717076517653Mydocument.pdf', '2024-05-30'),
(4, '34rp0987', 'kwizera bora', 'iprc-giishari', 'ict', 'it', 'linked', 'gaga@gmail.com', 'http://192.168.11.136:3000/', '1717078127188Mydocument.pdf', '2024-05-30'),
(5, '5432', 'bebe nana', 'iprc-musanze', 'ict', 'e-commerce', 'linked', 'gaga@gmail.com', 'i want this internship will helpm me', '171718292493431-10-2020-083612How to Win Friends and Influence People - Dale Carnegie.pdf', '2024-05-31'),
(6, '5432', 'bebe nana', 'iprc-musanze', 'ict', 'e-commerce', 'isaro company ltd', 'bigwi@gmail.com', 'bkbkbkbc', '1720461791293Accredited_TVET_Schools_2020_2021_Final.pdf', '2024-07-08'),
(7, '5432', 'bebe nana', 'iprc-musanze', 'ict', 'e-commerce', 'isaro company ltd', 'bigwi@gmail.com', 'bkbkbkbc', '1720461792610Accredited_TVET_Schools_2020_2021_Final.pdf', '2024-07-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`reg_index`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logbooks`
--
ALTER TABLE `logbooks`
  ADD PRIMARY KEY (`id_log`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logbooks`
--
ALTER TABLE `logbooks`
  MODIFY `id_log` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
