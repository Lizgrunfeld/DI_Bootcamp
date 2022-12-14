--       CREATE TABLE department1
--       (
--          DEPTCODE   INTEGER,
--          DeptName   CHAR(30),
--          LOCATION   VARCHAR(33)
--       );

--       CREATE TABLE employee1
--       (
--          EmpCode      INTEGER,
--          EmpFName     VARCHAR(15),
--          EmpLName     VARCHAR(15),
--          Job          VARCHAR(45),
--          Manager      CHAR(4),
--          HireDate     DATE,
--          Salary       INTEGER,
--          Commission   INTEGER,
--          Department_code     INTEGER
--       );

-- INSERT INTO department1 (DeptName,LOCATION) VALUES 
-- ('FINANCE', 'EDINBURGH'),
-- ('SOFTWARE','PADDINGTON'),
-- ('SALES', 'MAIDSTONE'),
-- ('MARKETING', 'DARLINGTON'),
-- ('ADMIN', 'BIRMINGHAM');
      
ALTER TABLE department1
DROP LocationCode;

SELECT * FROM department1;

INSERT INTO department1(deptcode)
VALUES
(10,(SELECT deptcode from department1 WHERE deptname ='FINANCE'))
(20,(SELECT deptcode from department1 WHERE deptname ='SOFTWARE'))
(30,(SELECT deptcode from department1 WHERE deptname ='SALES'))
(40,(SELECT deptcode from department1 WHERE deptname ='MARKETING'))
(50,(SELECT deptcode from department1 WHERE deptname ='ADMIN'));

-- INSERT INTO department1 (LocationCode)
-- WHERE  department1.deptname = 'Finance'
-- VALUE = 10;

-- INSERT INTO employee1 (EmpCode,EmpFName,EmpLName,Job,Manager,HireDate,Salary,Commission,Department_code)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);

SELECT * FROM employee1 WHERE Department_code = 10;

SELECT * FROM employee1 WHERE Job = 'ANALYST' AND Department_code = 10;


-- Display the names of each employees, their job and dept location (10,20,30,40,50)
SELECT EmpFName,EmpLName,Job,DeptName,Department_code,LOCATION 
FROM employee1
LEFT JOIN department1
-- ON employee1.job = department1.DeptName;
-- employee1.Department_code = department1.DeptName = department1.location

-- Department_code '10' = DeptName 'FINANCE'
-- Department_code '20' = DeptName 'SOFTWARE'
-- Department_code '30' = DeptName 'SALES'
-- Department_code '40' = DeptName 'MARKETING'
-- Department_code '50' = DeptName  'ADMIN'



SELECT EmpFName,EmpLName,Job,DeptName FROM employee1
FULL JOIN department1 ON department1.DeptName = employee1.job;


SELECT ROUND(AVG(Salary)) AS averageSalary
FROM employee1;


SELECT * FROM employee1
WHERE EmpCode = 9777;



------------------------------ EXERCISE

-- If you did the exercise of yesterday, use Emp/Dept database

-- 1. Create a new database, and create the table department

   CREATE TABLE Department2
      (
         PRIMARY KEY (deptcode),
		 CONSTRAINT fk_dept_number FOREIGN KEY (deptcode) References boss(dept_number)
         DeptName   CHAR(30),
         LOCATION   VARCHAR(33)
      );


-- 2. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...), and dept_number:
-- The boss table, has a one to one relationship with the department table:
-- => a department can be managed by only 1 boss, and a boss can manage only 1 department
	CREATE TABLE boss
	(
		boss_id INTEGER UNIQUE,
		boss_name CHAR(50),
		boss_type ENUM(nice, angry, funny, sad, silly)
		PRIMARY KEY(dept_number)
	);

-- 1. Add a few bosses : one for the finance dept, one for sales and one for marketing
-- 2. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)
