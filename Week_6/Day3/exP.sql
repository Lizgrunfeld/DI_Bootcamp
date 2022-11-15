-- Get a list of all film languages.
SELECT * FROM language;
SELECT name FROM language;


SELECT * FROM film;

SELECT language_id FROM film;

-- Get a list of all films joined with their languages – select the following details 
-- : film title, description, and language name. Try your query with different

Select title, description, name
FROM film
INNER JOIN language
on film.language_id = language.language_id;

-- Get all films, even if they don’t have languages.
Select title, description, name
FROM film
LEFT JOIN language
on film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.
SELECT name FROM language;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.



CREATE TABLE new_film5(
	id SERIAL PRIMARY KEY,
	name VARCHAR (40)
);

ALTER TABLE new_film5 DROP COLUMN name;
ALTER TABLE new_film5 ADD COLUMN name VARCHAR(40) UNIQUE;



SELECT * FROM new_film5;

INSERT INTO new_film5(name)
VALUES
('Titanic'),
('Wayne World'),
('The Crown'),
('Dahmer')
RETURNING *

DELETE FROM new_film5 
WHERE id=1 OR 
id=2 OR
id=3 OR
id=4 OR
id=5;

INSERT INTO new_film5(name)
VALUES
('Ants'),
('Toy Story'),
('Air Bud')
RETURNING *



-- Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review6(
	review_id SERIAL PRIMARY KEY,
	film_id INTEGER UNIQUE REFERENCES new_film(id),
	language_id INTEGER REFERENCES language(language_id),
	title VARCHAR(40),
	score INTEGER,
	review_text TEXT,
	last_update DATE
	
);

SELECT * FROM customer_review6


INSERT INTO customer_review6
VALUES
(1,(select id FROM new_film5 WHERE id =6), (SELECT language_id FROM language WHERE language_id =1),'Review Title', 10, 'Favorite movie wooooowwww', '2014-01-04'),
(2,(select id FROM new_film5 WHERE id =7), (SELECT language_id FROM language WHERE language_id =1), 'Review Title 2',1, 'Horrible movie yuck hate', '2018-02-05');

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?\

DELETE FROM new_filim5
WHERE id = 10;