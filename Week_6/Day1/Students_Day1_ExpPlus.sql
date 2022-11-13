CREATE TABLE students(
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	birth_date DATE NOT NULL
)

INSERT INTO students (first_name, last_name, birth_date)
	VALUES
		('Marc','Benichou','11/02/1998'),
		('Yoan','Cohen','12/03/2010'),
		('Lea','Benichou','07/27/1987'),
		('Amelia','Dux','04/07/1996'),
		('David','Grez','06/14/2003'),
		('Omer','Simpson','10/03/1980');
		
Select * FROM students;

SELECT 
	first_name,
	last_name 
FROM
	students;


SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	student_id = 2;
	
SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	last_name = 'Benichou' AND
	first_name = 'Marc';
	
	
SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	last_name = 'Benichou' OR
	first_name = 'Marc';
	
	
SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	first_name
LIKE
'%a%';


SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	first_name
ILIKE
'a%';

SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	first_name
LIKE
'%a';

SELECT 
	first_name,
	last_name 
FROM
	students
WHERE
	first_name
LIKE
'a%%';

SELECT
	first_name,
	last_name 

FROM
	students
WHERE
	student_id = 1 AND 3;


