-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2016 at 06:20 PM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(6) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `verified` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `verified`) VALUES
(1, 'suyash', 's@gmail.com', 'a85ce36495072b8c9f50170cb7eb0ab7ab49a949436b92222d9af1967c14', 0),
(2, 'shreyansh', 'sh@gmail.com', '8b04e39628a5ff5acfe917ee58554c34a71dde2fd47ad0a14fd71bf4f9ed', 0);

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE IF NOT EXISTS `answers` (
  `id` int(10) NOT NULL,
  `q_id` int(8) NOT NULL,
  `u_id` int(8) NOT NULL,
  `content` longtext NOT NULL,
  `upvote` int(6) NOT NULL DEFAULT '0',
  `downvote` int(6) NOT NULL DEFAULT '0',
  `username` varchar(100) NOT NULL,
  `comment_count` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `q_id`, `u_id`, `content`, `upvote`, `downvote`, `username`, `comment_count`) VALUES
(9, 15, 25, 'the project can be submitted by monday .  We have to show the implementation also.', 0, 0, 'sn', 0),
(10, 16, 25, 'It is going to be global healthcare system. Prepare well.', 1, 0, 'sn', 0),
(11, 20, 26, 'Around 200 are placed in CSE.', 2, 0, 'Shreyansh Nahata', 0),
(12, 21, 26, 'I’ve worked with Angular on quite a few apps at this point, and have seen many different ways to structure them. I’m writing a book on architecting Angular apps right now with the MEAN stack and as such have researched heavily into this specific topic. I think I’ve set on a pretty specific structure I’m very happy with. It’s a simpler approach than what Burke Holland has proposed. I must note that if I was on a project with his structure, I would be content. It’s good. Before we start though, the concept of modules in the world of Angular can be a bit confusing, so let me lay out the current state of affairs. What modules are in JavaScript JavaScript comes with no ability to load modules. A “module” means different things to different people. For this article, let’s use this definition: Modules allow code to be compartmentalized to provide logical separation for the developers. In JavaScript, it also prevents the problem of conflicting globals. People new to JavaScript get a little confused about why we make such a big deal about modules. I want to make one thing clear: Modules are NOT for lazy-loading JavaScript components when needed. Require.js does have this functionality, but that is not the reason it is important. Modules are important due to the language not having support for it, and JavaScript desperately needing it. A module can be different things.', 5, 1, 'Shreyansh Nahata', 0);

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE IF NOT EXISTS `college` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `name`, `location`) VALUES
(1, 'rvce', 'mysoreroad');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(10) NOT NULL,
  `ans_id` int(10) NOT NULL,
  `u_id` int(8) NOT NULL,
  `content` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dept`
--

CREATE TABLE IF NOT EXISTS `dept` (
  `id` int(6) NOT NULL,
  `col_id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dept`
--

INSERT INTO `dept` (`id`, `col_id`, `name`) VALUES
(1, 1, 'cse');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(8) NOT NULL,
  `u_id` int(8) NOT NULL,
  `tag_id` int(4) NOT NULL,
  `content` varchar(150) NOT NULL,
  `upvote` int(6) NOT NULL DEFAULT '0',
  `downvote` int(6) NOT NULL DEFAULT '0',
  `col_id` int(6) NOT NULL,
  `username` varchar(100) NOT NULL,
  `is_answrd` int(1) NOT NULL DEFAULT '0',
  `tag` varchar(50) NOT NULL,
  `pdate` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `u_id`, `tag_id`, `content`, `upvote`, `downvote`, `col_id`, `username`, `is_answrd`, `tag`, `pdate`) VALUES
(15, 26, 3, 'when do we need to submit mini project?', 5, 1, 1, 'Shreyansh Nahata', 1, 'CSE', '12-11-2016'),
(16, 26, 4, 'What is the hackathon theme?', 3, 0, 1, 'Shreyansh Nahata', 1, 'ISE', '12-11-2016'),
(17, 25, 1, 'When will night football start?', 2, 0, 1, 'sn', 0, 'hostel', '12-11-2016'),
(18, 25, 2, 'How many teams are there in Festhos ?', 2, 1, 1, 'sn', 0, 'sports', '12-11-2016'),
(19, 25, 9, 'Is there any seminar on friday in bio tech dept. ?', 0, 0, 1, 'sn', 0, 'Bio-Tech', '12-11-2016'),
(20, 25, 3, 'How many students are placed in cse?', 4, 0, 1, 'sn', 1, 'CSE', '12-11-2016'),
(21, 25, 10, 'Any guidelines for angularJs implementation ?', 3, 0, 1, 'sn', 1, 'General', '12-11-2016'),
(22, 25, 10, 'Is tomorrow a holiday?', 0, 0, 1, 'sn', 0, 'General', '15-11-2016');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(4) NOT NULL,
  `name` varchar(20) NOT NULL,
  `assoc` int(6) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `assoc`) VALUES
(1, 'hostel', 1),
(2, 'sports', 1),
(3, 'CSE', 2),
(4, 'ISE', 1),
(5, 'Mechanical', 0),
(6, 'ECE', 0),
(7, 'EEE', 0),
(8, 'Telecom', 0),
(9, 'Bio-Tech', 1),
(10, 'General', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(8) NOT NULL,
  `dept_id` int(6) NOT NULL,
  `col_id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `usn` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `phone` int(10) NOT NULL,
  `type` int(1) NOT NULL,
  `verified` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `dept_id`, `col_id`, `name`, `usn`, `email`, `password`, `phone`, `type`, `verified`) VALUES
(1, 1, 1, 'ss', '171', 's@gmail.com', 'e063979b24e8d2baaa65dff41e333f101ae8652942d1f9ca6357f5cf606e\r\n', 1234, 1, 0),
(7, 1, 1, 'suyash', 'lol', 's1@gmail.com', '8b04e39628a5ff5acfe917ee58554c34a71dde2fd47ad0a14fd71bf4f9ed', 1234, 0, 0),
(9, 1, 1, 'suyash', 'lol111', 's1@gmail.com', '8b04e39628a5ff5acfe917ee58554c34a71dde2fd47ad0a14fd71bf4f9ed', 1234, 0, 0),
(13, 1, 1, 'suyash', '114', 'raan@gmail.com', 'a85ce36495072b8c9f50170cb7eb0ab7ab49a949436b92222d9af1967c14', 1234, 0, 0),
(15, 1, 1, 'suyash', '100', 'raan@gmail.com', 'a85ce36495072b8c9f50170cb7eb0ab7ab49a949436b92222d9af1967c14', 1234, 0, 0),
(16, 1, 1, 'suyash', '144', 'raan@gmail.com', 'a85ce36495072b8c9f50170cb7eb0ab7ab49a949436b92222d9af1967c14', 1234, 0, 0),
(24, 1, 1, 'a', 'a', 'a', '49efe23ca1be72cbfc8f7f87a4ef642b7abe87631f8fdac90e138962080c', 1, 0, 0),
(25, 1, 1, 'sn', 'sn', 'sn@sn.sn', '8b04e39628a5ff5acfe917ee58554c34a71dde2fd47ad0a14fd71bf4f9ed', 99, 1, 1),
(26, 1, 1, 'Shreyansh Nahata', '1RV13CS148', 'shreyans4nahata@gmail.com', '019fd28766dcd375ad8694a51f191e905005a53792979dab4e985fd4b3d2', 2147483647, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_answered`
--

CREATE TABLE IF NOT EXISTS `user_answered` (
  `q_id` int(6) NOT NULL,
  `u_id` int(6) NOT NULL,
  `answered` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_answered`
--

INSERT INTO `user_answered` (`q_id`, `u_id`, `answered`) VALUES
(15, 25, 1),
(16, 25, 1),
(20, 26, 1),
(21, 26, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions.id` (`q_id`),
  ADD KEY `user.id` (`u_id`);

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers.id` (`ans_id`),
  ADD KEY `user.id` (`u_id`);

--
-- Indexes for table `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`id`),
  ADD KEY `college.id` (`col_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user.id` (`u_id`),
  ADD KEY `tags.id` (`tag_id`),
  ADD KEY `college.id` (`col_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usn` (`usn`),
  ADD KEY `dept.id` (`dept_id`),
  ADD KEY `college.id` (`col_id`);

--
-- Indexes for table `user_answered`
--
ALTER TABLE `user_answered`
  ADD KEY `q_id` (`q_id`),
  ADD KEY `u_id` (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dept`
--
ALTER TABLE `dept`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`q_id`) REFERENCES `questions` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`u_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`ans_id`) REFERENCES `answers` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`u_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `dept`
--
ALTER TABLE `dept`
  ADD CONSTRAINT `dept_ibfk_1` FOREIGN KEY (`col_id`) REFERENCES `college` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_3` FOREIGN KEY (`col_id`) REFERENCES `college` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`col_id`) REFERENCES `college` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user_answered`
--
ALTER TABLE `user_answered`
  ADD CONSTRAINT `user_answered_ibfk_1` FOREIGN KEY (`q_id`) REFERENCES `questions` (`id`),
  ADD CONSTRAINT `user_answered_ibfk_2` FOREIGN KEY (`u_id`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
