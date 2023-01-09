-- "emp_address" -- "address"
--- `leave_type` -- `leave_type`
--  `maritalstatus` -- `marital_status`
-- `paygrade` --`pay_grade`
-- `emptype` `emp_type` 
-- `user` `user_detail`
-- `Relationship` `Relation_ship`
-- `emergencycontact` `emergency_contact`
-- `Joined_date`  `Joining_date`


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Table structure for table `leave_type`
--

CREATE TABLE `leave_type` (
  `ID` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`);

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Table structure for table `marital_status`
--

CREATE TABLE `marital_status` (
  `ID` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- Table structure for table `pay_grade`
--

CREATE TABLE `pay_grade` (
  `ID` int(11) NOT NULL,
  `pay_grade` varchar(10) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `num_leaves` int(11) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--




-- Stand-in structure for view `average_salary_by_department`

--
CREATE TABLE `average_salary_by_department` (
`department` varchar(255)
,`total_employees` bigint(21)
,`avg_salary` decimal(11,2)
);

--
-- Table structure for table `emp_address`
--

CREATE TABLE `emp_address` (
  `ID` int(11) NOT NULL,
  `Line1` varchar(255) NOT NULL,
  `Line2` varchar(255) DEFAULT NULL,
  `City` varchar(255) NOT NULL,
  `District` varchar(255) NOT NULL,
  `Postal_Code` varchar(6) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- department

CREATE TABLE `department` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Buillding` varchar(255) NOT NULL,
  `Floor` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`);

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Indexes for table `department`


--

CREATE TABLE `emergency_contact` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `phone_number` char(10) NOT NULL,
  `Relation_ship` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- empstatus

CREATE TABLE `empstatus` (
  `ID` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for table `emp_type`
--

CREATE TABLE `emp_type` (
  `ID` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Table structure for table `user_detail`
--

CREATE TABLE `user_detail` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `leavestatus`
--

CREATE TABLE `leavestatus` (
  `ID` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- (See below for the actual view)
--
CREATE TABLE `leaves_by_department` (
`id` int(11)
,`department` varchar(255)
,`Date` date
);



-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `Joining_date` date NOT NULL,
  `nic_number` varchar(12) NOT NULL,
  `photo` blob DEFAULT NULL,
  `leave_count` int(11) NOT NULL DEFAULT 0,
  `department` int(11) NOT NULL,
  `marital_status` int(11) NOT NULL,
  `emp_address` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `pay_grade` int(11) NOT NULL,
  `empStatus` int(11) NOT NULL,
  `user_Id` int(11) NOT NULL,
  `emergency_contact` int(11) NOT NULL,
   PRIMARY KEY (`ID`),
   FOREIGN KEY (`empStatus`) REFERENCES `empstatus` (`ID`),
   FOREIGN KEY (`department`) REFERENCES `department` (`ID`),
   FOREIGN KEY (`pay_grade`) REFERENCES `pay_grade` (`ID`),
   FOREIGN KEY (`type`) REFERENCES `emp_type` (`ID`),
   FOREIGN KEY (`marital_status`) REFERENCES `marital_status` (`ID`),
   FOREIGN KEY (`user_Id`) REFERENCES `user_detail` (`ID`),
   FOREIGN KEY (`user_Id`) REFERENCES `user_detail` (`ID`) ,
   FOREIGN KEY (`emp_address`) REFERENCES `emp_address` (`ID`),
   FOREIGN KEY (`emergency_contact`) REFERENCES `emergency_contact` (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Stand-in structure for view `employee_and_supervisor`

--
CREATE TABLE `employee_and_supervisor` (
`Employee ID` int(11)
,`Employee Name` varchar(511)
,`Employee Department` varchar(255)
,`Employee Type` varchar(50)
,`Supervisor ID` int(11)
,`Supervisor Name` varchar(511)
,`Supervisor Department` varchar(255)
,`Supervisor Type` varchar(50)
);

--
CREATE TABLE `employee_by_department` (
`ID` int(11)
,`Employee Name` varchar(511)
,`Department` varchar(255)
,`Email` varchar(255)
,`Joined Date` date
,`Employee Type` varchar(50)
,`Employee Status` varchar(20)
,`pay_grade` varchar(10)
);

-- --------------------------------------------------------

--
CREATE TABLE `employee_grouping` (
`user_Id` int(11)
,`Department` varchar(255)
,`Employee type` varchar(50)
,`Employee Status` varchar(20)
,`pay_grade` varchar(10)
,`Employee Matrial Status` varchar(10)
);
--
-- Table structure for table `leave`
--

CREATE TABLE `leave` (
  `emp_ID` int(11) NOT NULL,
  `type_ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `reason` text NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`);
  FOREIGN KEY (`emp_ID`) REFERENCES `employee` (`ID`),
  FOREIGN KEY (`type_ID`) REFERENCES `leave_type` (`ID`),
  FOREIGN KEY (`status`) REFERENCES `leavestatus` (`ID`) ;
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;







--
-- Table structure for table `phonenumber`
--

CREATE TABLE `phonenumber` (
  `ID` int(11) NOT NULL,
  `emp_ID` int(11) NOT NULL,
  `phone_number` char(10) NOT NULL,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`emp_ID`) REFERENCES `employee` (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `Emp_Id` int(11) NOT NULL,
  `Sup_Id` int(11) NOT NULL,
  PRIMARY KEY (`Emp_Id`,`Sup_Id`),
  FOREIGN KEY (`Emp_Id`) REFERENCES `employee` (`ID`),
  FOREIGN KEY (`Sup_Id`) REFERENCES `employee` (`ID`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--

-
--
-- Structure for view `average_salary_by_department`
--
DROP TABLE IF EXISTS `average_salary_by_department`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
SQL SECURITY DEFINER VIEW `average_salary_by_department`  
AS SELECT `department`.`Name` AS `department`, count(`employee`.`ID`) AS `total_employees`,
 round(avg(`employee`.`salary`),2) AS `avg_salary` FROM (`employee` join `department`) 
 WHERE `employee`.`department` = `department`.`ID` GROUP BY `department`.`Name` ;

-- --------------------------------------------------------

--
-- Structure for view `employee_and_supervisor`
--
DROP TABLE IF EXISTS `employee_and_supervisor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
SQL SECURITY DEFINER VIEW `employee_and_supervisor`  AS SELECT `emp`.`employee_id` 
AS `Employee ID`, concat(`emp`.`employee_firstname`,' ',`emp`.`employee_lastname`) 
AS `Employee Name`, `emp_department`.`Name` AS `Employee Department`, `emp_type`.`type` 
AS `Employee Type`, `emp`.`supervisor_id` AS `Supervisor ID`, concat(`employee`.`firstname`,'
 ',`employee`.`lastname`) AS `Supervisor Name`, `sup_department`.`Name`
  AS `Supervisor Department`, `sup_type`.`type` AS `Supervisor Type` 
  FROM ((((((select `employee`.`ID` AS `employee_id`,`employee`.`firstname` AS `employee_firstname`,
  `employee`.`lastname` AS `employee_lastname`,`employee`.`department` AS
   `emp_department`,`employee`.`type` AS `emp_type`,`supervisor`.`Sup_Id` AS 
   `supervisor_id` from (`employee` join `supervisor` on(`employee`.`ID` = `supervisor`.`Emp_Id`))) 
   `emp` join `employee` on(`emp`.`supervisor_id` = `employee`.`ID`))
    join `department` `emp_department` on(`emp`.`emp_department` = `emp_department`.`ID`)) 
    join `emp_type` `emp_type` on(`emp`.`emp_type` = `emp_type`.`ID`))
     join `department` `sup_department` on(`sup_department`.`ID` = `employee`.`department`)) 
     join `emp_type` `sup_type` on(`sup_type`.`ID` = `employee`.`type`)) ;

-- --------------------------------------------------------

--
-- Structure for view `employee_by_department`
--
DROP TABLE IF EXISTS `employee_by_department`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `employee_by_department` 
 AS SELECT `employee`.`user_Id` AS `ID`, concat(`employee`.`firstname`,' ',`employee`.`lastname`) 
 AS `Employee Name`, `department`.`Name` AS `Department`, `employee`.`email`
  AS `Email`, `employee`.`Joining_date` AS `Joined Date`, `emp_type`.`type` 
  AS `Employee Type`, `empstatus`.`status` AS `Employee Status`, `pay_grade`.`pay_grade` 
  AS `pay_grade` FROM ((((`employee` join `department`) join `emp_type`) join `empstatus`) 
  join `pay_grade`) WHERE `employee`.`department` = `department`.`ID`
   AND `employee`.`type` = `emp_type`.`ID` AND `employee`.`empStatus` = `empstatus`.`ID` 
   AND `employee`.`pay_grade` = `pay_grade`.`ID` ;

-- --------------------------------------------------------

--
-- Structure for view `employee_grouping`
--
DROP TABLE IF EXISTS `employee_grouping`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
SQL SECURITY DEFINER VIEW `employee_grouping`  AS SELECT `employee`.`user_Id` AS
 `user_Id`, `department`.`Name` AS `Department`, `emp_type`.`type` AS 
 `Employee type`, `empstatus`.`status` AS `Employee Status`, `pay_grade`.`pay_grade` AS `pay_grade`,
  `marital_status`.`status` AS `Employee Matrial Status` FROM (((((`employee` join `department`)
   join `emp_type`) join `empstatus`) join `pay_grade`) join `marital_status`)
    WHERE `employee`.`department` = `department`.`ID` AND `employee`.`type` = `emp_type`.`ID` 
    AND `employee`.`empStatus` = `empstatus`.`ID` AND `employee`.`pay_grade` = `pay_grade`.`ID` 
    AND `employee`.`marital_status` = `marital_status`.`ID` ;

-- --------------------------------------------------------

--
-- Structure for view `leaves_by_department`
--
DROP TABLE IF EXISTS `leaves_by_department`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
SQL SECURITY DEFINER VIEW `leaves_by_department`  AS SELECT `leave`.`id` AS `id`, 
`department`.`Name` AS `department`, `leave`.`Date` AS `Date` FROM ((`leave` join `employee`) 
join `department`) WHERE `employee`.`ID` = `leave`.`emp_ID` AND 
`employee`.`department` = `department`.`ID` AND `leave`.`status` = 2 ;



DELIMITER $$
--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `available_leaves` (`empId` INT) RETURNS INT(11) deterministic begin
    declare max_count INT;
    declare cur_count INT;
    select num_leaves into max_count from paygrade join employee on employee.paygrade = paygrade.ID where employee.ID = empId;
    select leave_count into cur_count from employee where employee.ID = empId;
    return max_count - cur_count;
END$$

DELIMITER ;

--
-- Triggers `leave`
--
DELIMITER $$
CREATE TRIGGER `after_leave_accept` AFTER UPDATE ON `leave` FOR EACH ROW BEGIN
	DECLARE leavecount INT;
	SELECT leave_count INTO leavecount FROM Employee WHERE id = OLD.emp_ID;
	IF NEW.status in (SELECT id FROM LeaveStatus WHERE status = "approved") THEN
        	UPDATE Employee SET leave_count = (leavecount +1) WHERE id = OLD.emp_ID;
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
