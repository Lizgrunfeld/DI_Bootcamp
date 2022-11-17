CREATE TABLE customer(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
	
);

INSERT INTO customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'River');

CREATE TABLE customerProfile(
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT FALSE,
	cusomer_id INTEGER UNIQUE REFERENCES customer (id) ON DELETE CASCADE ON UPDATE CASCADE
)


ALTER TABLE customerProfile
RENAME cusomer_id TO customer_id

SELECT * FROM customerProfile

INSERT INTO customerProfile (customer_id, isLoggedin)
VALUES
((SELECT id FROM customer WHERE first_name='John' AND last_name ='Doe'),TRUE),
((SELECT id FROM customer WHERE first_name='Lea' AND last_name ='River'), FALSE) 


-- first name of logged in customer

SELECT first_name
FROM customer
INNER JOIN customerProfile
ON customer.id = customerProfile.cusomer_id
WHERE customerProfile.isLoggedIn


--people not logged in (false or NULL)

SELECT first_name AS not_logged_in, isLoggedIn
FROM customer
FULL JOIN customerProfile
ON customer.id = customerProfile.cusomer_id
WHERE isLoggedIn IS NOT TRUE;







CREATE TABLE Book(
	book_is SERIAL PRIMARY KEY,
	title VARCHAR (50) NOT NULL,
	author VARCHAR (50) NOT NULL
					
)

ALTER TABLE Book
RENAME book_is TO book_id


SELECT * FROM book

INSERT INTO book (title,author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

CREATE TABLE Student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL UNIQUE,
	age INTEGER
	-- age with limit it better as:
	-- age SMALLINT NOT NULL CHECK(age <= 15)
					
)

INSERT INTO Student (name,age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

SELECT * FROM Student
SELECT * FROM book

CREATE TABLE library(
	book_fk_id INTEGER REFERENCES book(book_id) ON DELETE SET NULL ON UPDATE CASCADE,
	student_fk_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id,student_fk_id)
					
)

INSERT INTO library (book_fk_id,student_fk_id,borrowed_date)
VALUES
((SELECT book_id FROM book WHERE title ='Alice In Wonderland'), 
 (SELECT student_id FROM student WHERE name='John'),
  '2022-11-11'
 )
 
INSERT INTO library (book_fk_id,student_fk_id,borrowed_date)
VALUES
((SELECT book_id FROM book WHERE title ='Harry Potter'), 
 (SELECT student_id FROM student WHERE name='Lea'),
'2017-01-05'
)

SELECT * FROM library

SELECT name
FROM library
INNER JOIN student ON student_fk_id = student_id
INNER JOIN book ON book_fk_id = book_id
WHERE title ILIKE '%ALICE IN WONDERLAND%'


SELECT ROUND(AVG(age))
FROM library
INNER JOIN student ON student_fk_id = student_id
INNER JOIN book ON book_fk_id = book_id
WHERE title ILIKE '%Alice In Wonderland%'