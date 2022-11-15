SELECT * FROM items;
SELECT * FROM customers;
--1--
--All items, ordered by price (lowest to highest).
SELECT price FROM items ORDER BY price ASC;
--2--
--Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT price FROM items
WHERE price >= 80
ORDER BY price ASC;
--3--
--The first 3 customers in alphabetical order of the first name (A-Z) 
--exclude the primary key column from the results.
SELECT DISTINCT first_name, last_name FROM customers 
ORDER BY first_name ASC
LIMIT 3;
--4--
--All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT DISTINCT last_name FROM customers 
ORDER BY last_name DESC;