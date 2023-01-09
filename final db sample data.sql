-- dumpy data to "emp_address" -- "address"

INSERT INTO `emp_address` (`ID`, `Line1`, `Line2`, `City`, `District`, `Postal_Code`) VALUES
(1, 'No. 102/151', 'St Ives Drive', 'Tecumseh', 'NH', '38946'),
(2, 'No. 103/152', 'Highland Cove', 'Fisherville', 'SC', '28339'),
(3, 'No. 104/153', 'Paragon Avenue', 'Hernshaw', 'PA', '29487'),
(4, 'No. 105/154', 'Harding Circle', 'Toomsboro', 'NY', '72903'),
(5, 'No. 106/155', 'Birchwood Circle', 'Migrate', 'UT', '32187'),
(6, 'No. 107/156', 'Stonegate Street', 'Plymouth', 'TX', '35907'),
(7, 'No. 108/157', 'Island Grove Way', 'Los Angeles', 'MN', '08230'),
(8, 'No. 109/158', 'Charstone Parkway', 'Oak View', 'NJ', '56089'),
(9, 'No. 110/159', 'Autumn Way', 'Collierville', 'HI', '10986'),
(10, 'No. 111/160', 'Greenpark Avenue', 'Oak Ridge', 'GA', '10542'),
(11, 'No. 112/161', 'Threadneedle Lane', 'Churchs Ferry', 'VA', '77218'),
(12, 'No. 113/162', 'Summer Fields Lane', 'Saint Louis', 'CO', '88429'),
(13, 'No. 114/163', 'Willowbend Lane', 'Jonesville', 'NY', '67336'),
(14, 'No. 115/164', 'Port Charlotte Parkway', 'Norman', 'VA', '62890'),
(15, 'No. 116/165', 'Parade Avenue', 'Walkersville', 'MN', '55726'),
(16, 'No. 117/166', 'Woodthorpe Drive', 'Granville', 'CA', '21158'),
(17, 'No. 118/167', 'Hazelton Cove', 'Fort Shaw', 'KY', '10013'),
(18, 'No. 119/168', 'Darby Dan Lane', 'Pocola', 'NY', '28305'),
(19, 'No. 120/169', 'Heritage Cove', 'Culloden', 'OR', '06410'),
(20, 'No. 121/170', 'Norwood Way', 'Hima', 'AL', '78275'),
(21, 'No. 122/171', 'Lost Meadow Avenue', 'Brewster', 'NY', '65663'),
(22, 'No. 123/172', 'Quail Way', 'North Kingstown', 'NY', '43438'),
(23, 'No. 124/173', 'Olney Oak Lane', 'Schaumburg', 'KY', '79063'),
(24, 'No. 125/174', 'Knoll Trail', 'Island Pond', 'IN', '28604'),
(25, 'No. 126/175', 'Barkers Cove', 'Bessemer', 'NE', '02185'),
(26, 'No. 127/176', 'Cotton Boll Avenue', 'Anchorage', 'AR', '75105'),
(27, 'No. 128/177', 'Commercial Way', 'Wilcox', 'VA', '77009'),
(28, 'No. 129/178', 'Arden Walk Lane', 'Gettysburg', 'MI', '48233'),
(29, 'No. 130/179', 'Jeffrey Way', 'Gaines', 'MA', '29122'),
(30, 'No. 131/180', 'Kimbrough Park Lane', 'Talihina', 'AR', '61025'),
(31, 'No. 132/181', 'Bubbling Brook Trail', 'Winston Salem', 'TX', '16751'),
(32, 'No. 133/182', 'Carlingford Street', 'Scotland', 'NY', '10804'),
(33, 'No. 134/183', 'Periwinkle Cove', 'Oak Grove', 'MN', '24002'),
(34, 'No. 135/184', 'Skyview Trail', 'Maurepas', 'OH', '17580'),
(35, 'No. 136/185', 'Turkey Trail Drive', 'Ethel', 'NV', '80904'),
(36, 'No. 137/186', 'Schulenberg Drive', 'Pleasant Prairie', 'SC', '84512'),
(37, 'No. 138/187', 'Fairlawn Avenue', 'Saint Clair Shores', 'CA', '30547'),
(38, 'No. 139/188', 'Whitemarsh Street', 'Onawa', 'NY', '50078'),
(39, 'No. 140/189', 'Woffington Lane', 'Orleans', 'NY', '43322'),
(40, 'No. 141/190', 'Old Village Lane', 'Columbus', 'MD', '06365'),
(41, 'No. 142/191', 'Mckusick Parkway', 'Kansas City', 'PA', '68634'),
(42, 'No. 143/192', 'Patchester Parkway', 'Rhinelander', 'WI', '77045'),
(43, 'No. 144/193', 'Southchester Parkway', 'East Springfield', 'SD', '35952'),
(44, 'No. 145/194', 'Ainsworth Lane', 'Cobalt', 'MA', '63047'),
(45, 'No. 146/195', 'Enterprise Cove', 'Wallace', 'IL', '55795'),
(46, 'No. 147/196', 'Shadowmoss Avenue', 'Felton', 'IL', '25816'),
(47, 'No. 148/197', 'Dovie Lane', 'Antwerp', 'IN', '80749'),
(48, 'No. 149/198', 'Blackberry Trail', 'Wilkes Barre', 'NJ', '74008'),
(49, 'No. 150/199', 'Moss Tree Way', 'Tatitlek', 'NJ', '26886'),
(50, 'No. 151/200', 'Park Parkway', 'Assonet', 'SC', '25520');

-- -
-- Dumping data for table `department`
--

INSERT INTO `department` (`ID`, `Name`, `Buillding`, `Floor`) VALUES
(1, 'HR', 'building_1', 'floor_3'),
(2, 'Maintenance', 'building_1', 'floor_1'),
(3, 'IT', 'building_3', 'floor_1'),
(4, 'PR', 'building_2', 'floor_2'),
(5, 'Marketing', 'building_4', 'floor_3');

--
-- Dumping data for table `emerg_contact`
--
INSERT INTO `emergency_contact` (`ID`, `Name`, `phone_number`, `Relation_ship`) VALUES
(1,'Joseph Bunch','0700900734','Sibling'),
(2,'Judy Cooper','0700900012','Sister'),
(3,'Jose Thompson','0700900128','Brother'),
(4,'Beatrice Turner','0700900905','Wife'),
(5,'Roseline Edwards','0700900853','Uncle'),
(6,'Linda Dismukes','0700900800','Wife'),
(7,'William Sokoloski','0700900599','Father'),
(8,'Andres Jarrell','0700900786','Uncle'),
(9,'Robert Scott','0700900586','Brother'),
(10,'Joyce Torris','0700900035','Sibling'),
(11,'Jason Water','0700900641','Father'),
(12,'Greg Byers','0700900402','Wife'),
(13,'James Chavez','0700900775','Wife'),
(14,'Eric Hemmen','0700900705','Wife'),
(15,'Jada Pollard','0700900225','Sister'),
(16,'Julia Chandler','0700900122','Spouse'),
(17,'William Flowe','0700900931','Father'),
(18,'Jason Prior','0700900594','Brother'),
(19,'Joseph Srinivasan','0700900526','Brother'),
(20,'Annabell Williams','0700900603','Wife'),
(21,'Flora Wilson','0700900511','Husband'),
(22,'Earl Villalobos','0700900248','Father'),
(23,'Ted Lay','0700900172','Brother'),
(24,'John Odebralski','0700900587','Father'),
(25,'David Heredia','0700900251','Spouse'),
(26,'Jacob Rowton','0700900399','Brother'),
(27,'Gerald Williams','0700900255','Mother'),
(28,'Ann Deakins','0700900045','Father'),
(29,'Michelle Robinson','0700900148','Spouse'),
(30,'Barbara Diaz','0700900728','Uncle'),
(31,'Delores Nelson','0700900959','Sister'),
(32,'Elizabeth Sledge','0700900760','Spouse'),
(33,'Stacey Blahnik','0700900311','Father'),
(34,'Ella Oddi','0700900470','Sibling'),
(35,'Alica Acree','0700900093','Sibling'),
(36,'Carolyn Stickney','0700900646','Sibling'),
(37,'Joyce Conkling','0700900743','Father'),
(38,'Melissa Cook','0700900973','Spouse'),
(39,'Gregory Marshall','0700900190','Brother'),
(40,'Andrew Keithly','0700900934','Father'),
(41,'Wayne Kreutzer','0700900813','Brother'),
(42,'Veronica Voigt','0700900800','Wife'),
(43,'Thomas Roberts','0700900688','Sister'),
(44,'Nellie Losee','0700900116','Mother'),
(45,'Christopher Mitchell','0700900128','Wife'),
(46,'Roy Leachman','0700900306','Mother'),
(47,'James Edwards','0700900692','Wife'),
(48,'Robert Na','0700900643','Wife'),
(49,'Ha Giles','0700900311','Father'),
(50,'Juanita Loring','0700900150','Sister');

--
-- Dumping data for table `empstatus`
--

INSERT INTO `empstatus` (`ID`, `status`) VALUES
(1, 'intern-full-time'),
(2, 'intern-part-time'),
(3, 'contract-full-time'),
(4, 'contract-part-time'),
(5, 'permanent'),
(6, 'freelance');

--
-- Dumping data for table `emp_type`
--

INSERT INTO `emp_type` (`ID`, `type`) VALUES
(1, 'Admin'),
(2, 'HR Manager'),
(3, 'Accountant'),
(4, 'Software_Engineer'),
(5, 'QA_Engineer'),
(6, 'Manager'),
(7, 'Mechanic'),
(8, 'Programmer'),
(9, 'Driver'),
(10, 'Receptionist');

-- --------------------------------------------------------
-- Dumping data for table `leavestatus`
--

INSERT INTO `leavestatus` (`ID`, `status`) VALUES
(1, 'pending'),
(2, 'approved'),
(3, 'rejected');


-- Dumping data for table `leave_type`
--

INSERT INTO `leave_type` (`ID`, `type`) VALUES
(1, 'Annual'),
(2, 'Casual'),
(3, 'Maternity'),
(4, 'No-pay'),
(5, 'TBD');

-- Dumping data for table `marital_status`
--

INSERT INTO `marital_status` (`ID`, `status`) VALUES
(1, 'married'),
(2, 'unmarried');

-- Dumping data for table `pay_grade`
--

INSERT INTO `pay_grade` (`ID`, `pay_grade`, `salary`, `num_leaves`) VALUES
(1, 'level_1', '1800.00', 65),
(2, 'level_2', '3000.00', 50),
(3, 'level_3', '4000.00', 50),
(4, 'level-4', '5500.00', 50);


INSERT INTO `user_detail` (`ID`, `username`, `password`) VALUES
(1,'emp1','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(2,'emp2','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(3,'emp3','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(4,'emp4','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(5,'emp5','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(6,'emp6','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(7,'emp7','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(8,'emp8','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(9,'emp9','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(10,'emp10','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(11,'emp11','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(12,'emp12','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(13,'emp13','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(14,'emp14','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(15,'emp15','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(16,'emp16','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(17,'emp17','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(18,'emp18','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(19,'emp19','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(20,'emp20','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(21,'emp21','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(22,'emp22','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(23,'emp23','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(24,'emp24','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(25,'emp25','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(26,'emp26','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(27,'emp27','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(28,'emp28','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(29,'emp29','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(30,'emp30','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(31,'emp31','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(32,'emp32','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(33,'emp33','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(34,'emp34','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(35,'emp35','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(36,'emp36','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(37,'emp37','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(38,'emp38','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(39,'emp39','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(40,'emp40','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(41,'emp41','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(42,'emp42','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(43,'emp43','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(44,'emp44','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(45,'emp45','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(46,'emp46','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(47,'emp47','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(48,'emp48','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(49,'emp49','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq'),
(50,'emp50','$2b$10$3Sr3diZb7t7UkW9/cytYL.r9cskpNXqmDiqg.UerwXmoiLJdCRSCq');









-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `firstname`, `lastname`, `birthday`, `email`, `salary`, `Joining_date`, `nic_number`, `photo`, `leave_count`, `department`, `marital_status`, `emp_address`, `type`, `pay_grade`, `empStatus`, `user_Id`, `emergency_contact`) VALUES
(1,'Willie','Robinson', '1992-07-20', 'leola.jupyter@hrms.com', '266907.00', '2017-03-14', '942146937V', 0x30, 0, 5, 2, 1, 3, 1, 2, 1, 1),
(2,'Ophelia','Fuller', '1989-02-04', 'greg.jupyter@hrms.com', '489399.00', '2013-04-14', '726942699V', 0x30, 0, 2, 1, 2, 3, 1, 6, 2, 2),
(3,'Orlando','Sheridan', '2000-12-25', 'michael.jupyter@hrms.com', '659054.00', '2021-08-04', '781011134V', 0x30, 0, 5, 1, 2, 5, 1, 1, 3, 3),
(4,'Howard','Echols', '1980-07-23', 'james.jupyter@hrms.com', '245604.00', '2012-06-06', '968520992V', 0x30, 0, 1, 2, 1, 5, 1, 1, 4, 4),
(5, 'Paul', 'Boulch', '1987-01-03', 'paul.jupyter@hrms.com', '750774.00', '2014-08-24', '838727278V', 0x30, 0, 1, 1, 1, 6, 3, 4, 5, 5),
(6, 'Daniel', 'Ramos', '1990-11-16', 'daniel.jupyter@hrms.com', '512746.00', '2012-03-21', '833374520V', 0x30, 0, 4, 1, 2, 6, 3, 3, 6, 6),
(7,'Dennis','Johnson','1999-09-12', 'chanelle.jupyter@hrms.com', '157493.00', '2017-02-18', '858043424V', 0x30, 0, 4, 1, 1, 8, 1, 1, 7, 7),
(8, 'Frankie', 'Hyatt', '1991-09-29', 'frankie.jupyter@hrms.com', '660422.00', '2008-01-16', '892776385V', 0x30, 0, 4, 2, 1, 9, 1, 4, 8, 8),
(9, 'Paul', 'Morrow', '2002-03-31', 'paul.jupyter@hrms.com', '211448.00', '2013-04-09', '973346949V', 0x30, 0, 1, 2, 2, 5, 1, 3, 9, 9),
(10, 'Eusebia', 'Gustovich', '1982-05-31', 'eusebia.jupyter@hrms.com', '107868.00', '2014-07-14', '906318358V', 0x30, 0, 2, 2, 2, 6, 3, 3, 10, 10),
(11, 'Christina', 'Miller', '2002-05-04', 'christina.jupyter@hrms.com', '279243.00', '2006-09-25', '778618975V', 0x30, 0, 2, 1, 1, 7, 1, 3, 11, 11),
(12,'Phyllis','Odom', '2001-12-04', 'debra.jupyter@hrms.com', '719498.00', '2022-01-07', '822917263V', 0x30, 0, 3, 1, 1, 4, 1, 5, 12, 12),
(13, 'Stephen', 'Woods', '1999-11-25', 'stephen.jupyter@hrms.com', '731136.00', '2007-05-03', '995434467V', 0x30, 0, 3, 1, 2, 2, 4, 4, 13, 13),
(14,'Paul','Everett', '1982-01-21', 'jose.jupyter@hrms.com', '535270.00', '2016-12-06', '798681480V', 0x30, 0, 5, 2, 1, 1, 1, 3, 14, 14),
(15, 'Aurelia', 'Whitworth', '1992-09-30', 'aurelia.jupyter@hrms.com', '158062.00', '2016-01-01', '965238535V', 0x30, 0, 4, 2, 2, 9, 1, 3, 15, 15),
(16,'Donald','Culbertson', '2001-10-29', 'ernestine.jupyter@hrms.com', '520148.00', '2018-05-14', '963739838V', 0x30, 0, 1, 2, 2, 2, 4, 1, 16, 16),
(17, 'Katherine', 'Easterday', '1997-05-25', 'katherine.jupyter@hrms.com', '620460.00', '2015-12-18', '784048752V', 0x30, 0, 5, 1, 2, 9, 1, 3, 17, 17),
(18,'Larry','Eisner', '1990-10-23', 'sol.jupyter@hrms.com', '92993.00', '2009-05-26', '797711714V', 0x30, 0, 5, 1, 2, 2, 4, 5, 18, 18),
(19, 'Gail', 'Nollman', '1995-04-20', 'gail.jupyter@hrms.com', '725992.00', '2015-11-01', '776711724V', 0x30, 0, 1, 1, 2, 7, 1, 3, 19, 19),
(20, 'Donald', 'Taylor', '2000-11-07', 'donald.jupyter@hrms.com', '361764.00', '2022-04-13', '781611609V', 0x30, 0, 1, 2, 2, 6, 3, 3, 20, 20),
(21,'Ryan','Dirksen', '2000-01-17', 'ruth.jupyter@hrms.com', '517365.00', '2018-08-24', '794706162V', 0x30, 0, 4, 2, 2, 1, 1, 2, 21, 21),
(22, 'Mayra', 'Arnold', '1986-06-16', 'mayra.jupyter@hrms.com', '505262.00', '2007-09-11', '806944838V', 0x30, 0, 2, 1, 2, 3, 1, 5, 22, 22),
(23, 'Carolyn', 'Larick', '1996-10-14', 'carolyn.jupyter@hrms.com', '665370.00', '2013-01-23', '788702196V', 0x30, 0, 4, 2, 1, 1, 1, 6, 23, 23),
(24, 'Andrew', 'Rivera', '2002-12-05', 'andrew.jupyter@hrms.com', '249206.00', '2018-09-08', '773186568V', 0x30, 0, 3, 1, 1, 3, 1, 4, 24, 24),
(25, 'Francisco', 'Burdette', '2001-06-08', 'francisco.jupyter@hrms.com', '288513.00', '2016-06-07', '801003330V', 0x30, 0, 3, 1, 1, 5, 1, 2, 25, 25),
(26, 'James', 'Terranova', '1999-07-02', 'james.jupyter@hrms.com', '281331.00', '2018-04-17', '708128324V', 0x30, 0, 2, 2, 1, 4, 1, 3, 26, 26),
(27, 'John', 'Mcmahan', '1995-02-18', 'john.jupyter@hrms.com', '565045.00', '2015-01-28', '819149905V', 0x30, 0, 4, 1, 1, 2, 4, 4, 27, 27),
(28, 'Vito', 'Peterson', '1999-10-16', 'vito.jupyter@hrms.com', '660638.00', '2012-12-02', '845048260V', 0x30, 0, 4, 1, 1, 8, 1, 2, 28, 28),
(29, 'Sheena', 'Phillips', '1988-11-15', 'sheena.jupyter@hrms.com', '164573.00', '2018-05-29', '881270734V', 0x30, 0, 1, 1, 1, 1, 1, 6, 29, 29),
(30,'Christopher','Swain', '1997-02-12', 'harry.jupyter@hrms.com', '670620.00', '2021-12-10', '915979861V', 0x30, 0, 4, 2, 1, 7, 1, 4, 30, 30),
(31,'Brian','Houston', '1997-09-12', 'crystal.jupyter@hrms.com', '102153.00', '2005-02-15', '875484567V', 0x30, 0, 4, 2, 2, 1, 1, 5, 31, 31),
(32, 'William', 'Crawford', '1991-03-28', 'william.jupyter@hrms.com', '265005.00', '2012-10-14', '756372938V', 0x30, 0, 1, 2, 1, 1, 1, 2, 32, 32),
(33, 'Raymond', 'Shumate', '1989-05-21', 'raymond.jupyter@hrms.com', '306630.00', '2011-05-03', '850867074V', 0x30, 0, 4, 1, 2, 7, 1, 1, 33, 33),
(34, 'Willie', 'White', '1994-10-06', 'willie.jupyter@hrms.com', '306979.00', '2005-11-08', '967204882V', 0x30, 0, 4, 1, 2, 1, 1, 3, 34, 34),
(35, 'Dale', 'Leon', '1983-06-04', 'dale.jupyter@hrms.com', '498594.00', '2010-09-24', '803072824V', 0x30, 0, 5, 2, 2, 7, 1, 5, 35, 35),
(36, 'Martha', 'Miller', '1988-05-24', 'martha.jupyter@hrms.com', '693098.00', '2009-02-24', '866096714V', 0x30, 0, 3, 1, 1, 7, 1, 1, 36, 36),
(37,'Mary','Romo', '1999-05-22', 'connie.jupyter@hrms.com', '458184.00', '2005-01-10', '858547135V', 0x30, 0, 2, 1, 2, 5, 1, 3, 37, 37),
(38, 'James', 'Peters', '1987-05-27', 'james.jupyter@hrms.com', '740795.00', '2010-03-03', '909183996V', 0x30, 0, 1, 1, 1, 6, 3, 6, 38, 38),
(39, 'David', 'Lajara', '1990-09-26', 'david.jupyter@hrms.com', '149116.00', '2011-04-23', '975745662V', 0x30, 0, 1, 1, 2, 2, 4, 4, 39, 39),
(40,'Danny','Parker', '2001-12-24', 'anne.jupyter@hrms.com', '558975.00', '2016-08-09', '819774080V', 0x30, 0, 2, 2, 2, 4, 1, 3, 40, 40),
(41, 'Candice', 'Mcintyre', '1984-05-11', 'candice.jupyter@hrms.com', '615391.00', '2015-11-27', '765538046V', 0x30, 0, 5, 2, 1, 7, 1, 2, 41, 41),
(42, 'Vito', 'Baxter', '1990-01-10', 'vito.jupyter@hrms.com', '441653.00', '2021-03-08', '743615476V', 0x30, 0, 1, 2, 1, 2, 4, 3, 42, 42),
(43, 'Edward', 'Robson', '1981-10-22', 'edward.jupyter@hrms.com', '453691.00', '2009-07-02', '858969031V', 0x30, 0, 5, 2, 2, 8, 1, 5, 43, 43),
(44,'Jonathan','Medrano', '1998-08-16', 'brad.jupyter@hrms.com', '98076.00', '2020-11-15', '972086791V', 0x30, 0, 4, 2, 1, 5, 1, 4, 44, 44),
(45, 'Malcolm', 'Graf', '1998-06-26', 'malcolm.jupyter@hrms.com', '353031.00', '2009-04-02', '823344103V', 0x30, 0, 3, 1, 2, 2, 4, 5, 45, 45),
(46, 'Gayle', 'Moffat', '1984-07-19', 'gayle.jupyter@hrms.com', '152881.00', '2017-06-25', '735201833V', 0x30, 0, 5, 2, 2, 8, 1, 3, 46, 46),
(47,'Deborah','Loveland', '1986-08-11', 'carla.jupyter@hrms.com', '609229.00', '2018-01-17', '719918999V', 0x30, 0, 3, 2, 1, 6, 3, 6, 47, 47),
(48,'Thomas','Flanagan', '1981-08-13', 'john.jupyter@hrms.com', '498941.00', '2013-05-13', '978994077V', 0x30, 0, 4, 2, 1, 4, 1, 4, 48, 48),
(49,'Michael','Tate', '2001-09-19', 'johnna.jupyter@hrms.com', '403324.00', '2020-05-04', '978359794V', 0x30, 0, 2, 2, 2, 6, 3, 4, 49, 49),
(50,'Ellen','Sanders', '2002-11-29', 'kenneth.jupyter@hrms.com', '459550.00', '2006-02-05', '764559778V', 0x30, 0, 2, 2, 1, 9, 1, 3, 50, 50);



INSERT INTO `phonenumber` (`ID`, `emp_ID`, `phone_number`) VALUES
(1,'1','0700900318'),
(2,'2','0700900315'),
(3,'3','0700900094'),
(4,'4','0700900212'),
(5,'5','0700900285'),
(6,'6','0700900801'),
(7,'7','0700900816'),
(8,'8','0700900447'),
(9,'9','0700900640'),
(10,'10','0700900654'),
(11,'11','0700900986'),
(12,'12','0700900598'),
(13,'13','0700900832'),
(14,'14','0700900769'),
(15,'15','0700900025'),
(16,'16','0700900487'),
(17,'17','0700900946'),
(18,'18','0700900863'),
(19,'19','0700900360'),
(20,'20','0700900473'),
(21,'21','0700900104'),
(22,'22','0700900848'),
(23,'23','0700900743'),
(24,'24','0700900835'),
(25,'25','0700900044'),
(26,'26','0700900744'),
(27,'27','0700900113'),
(28,'28','0700900123'),
(29,'29','0700900258'),
(30,'30','0700900906'),
(31,'31','0700900039'),
(32,'32','0700900674'),
(33,'33','0700900305'),
(34,'34','0700900414'),
(35,'35','0700900689'),
(36,'36','0700900474'),
(37,'37','0700900916'),
(38,'38','0700900772'),
(39,'39','0700900742'),
(40,'40','0700900642'),
(41,'41','0700900814'),
(42,'42','0700900875'),
(43,'43','0700900947'),
(44,'44','0700900234'),
(45,'45','0700900584'),
(46,'46','0700900801'),
(47,'47','0700900064'),
(48,'48','0700900585'),
(49,'49','0700900899'),
(50,'50','0700900008'),
(51,'1','0700900557'),
(52,'2','0700900260'),
(53,'3','0700900544'),
(54,'4','0700900030'),
(55,'5','0700900276'),
(56,'6','0700900770'),
(57,'7','0700900012'),
(58,'8','0700900512'),
(59,'9','0700900634'),
(60,'10','0700900445'),
(61,'11','0700900791'),
(62,'12','0700900558'),
(63,'13','0700900812'),
(64,'14','0700900776'),
(65,'15','0700900527'),
(66,'16','0700900617'),
(67,'17','0700900835'),
(68,'18','0700900934'),
(69,'19','0700900164'),
(70,'20','0700900044'),
(71,'21','0700900441'),
(72,'22','0700900785'),
(73,'23','0700900929'),
(74,'24','0700900236'),
(75,'25','0700900715'),
(76,'26','0700900909'),
(77,'27','0700900660'),
(78,'28','0700900710'),
(79,'29','0700900364'),
(80,'30','0700900590'),
(81,'31','0700900839'),
(82,'32','0700900979'),
(83,'33','0700900991'),
(84,'34','0700900626'),
(85,'35','0700900336'),
(86,'36','0700900305'),
(87,'37','0700900423'),
(88,'38','0700900880'),
(89,'39','0700900527'),
(90,'40','0700900199'),
(91,'41','0700900760'),
(92,'42','0700900712'),
(93,'43','0700900193'),
(94,'44','0700900954'),
(95,'45','0700900315'),
(96,'46','0700900806'),
(97,'47','0700900081'),
(98,'48','0700900629'),
(99,'49','0700900022'),
(100,'50','0700900161');

