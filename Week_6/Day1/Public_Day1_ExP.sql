CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	name_item VARCHAR (50) NOT NULL,
	price_item SMALLINT NOT NULL
)

CREATE TABLE customers(
	customer_id SERIAL PRIMARY KEY,
 	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL
)

INSERT INTO items (name_item, price_item)
VALUES
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80);

INSERT INTO customers (first_name, last_name)
VALUES
	('Greg','Jones'),
	('Sandra','Jones'),
	('Scott','Scott'),
	('Trevor','Green'),
	('Melanie','Johnson');

Select * from items
Select * from customers

SELECT * FROM items WHERE price_item > 80;
SELECT * FROM items WHERE price_item < 301;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Scott';




