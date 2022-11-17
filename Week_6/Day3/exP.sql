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
CREATE TABLE customer_review7(
	review_id SERIAL PRIMARY KEY,
	film_id INTEGER UNIQUE REFERENCES new_film5(id),
	language_id INTEGER REFERENCES language(language_id),
	title VARCHAR(40),
	score INTEGER,
	review_text TEXT,
	last_update DATE
	
);

SELECT * FROM customer_review7
SELECT * FROM new_film5


INSERT INTO customer_review7
VALUES
(1,(select id FROM new_film5 WHERE id =6), (SELECT language_id FROM language WHERE language_id =1),'Review Title', 10, 'Favorite movie wooooowwww', '2014-01-04'),
(2,(select id FROM new_film5 WHERE id =7), (SELECT language_id FROM language WHERE language_id =1), 'Review Title 2',1, 'Horrible movie yuck hate', '2018-02-05');

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?\

DELETE FROM new_film5
WHERE id = 10;

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM film;


UPDATE film SET language_id = 2 WHERE film_id < 500;


-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT * FROM customer;
-- STORE is foreignid

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review7;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental where return_date is NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT rental.return_date, rental.inventory_id, payment.amount, inventory.inventory_id, inventory.film_id, film.film_id, film.title
FROM rental
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id 
JOIN film ON inventory.film_id = film.film_id
WHERE return_date IS NULL
ORDER BY amount DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description,film_id FROM film WHERE description ILIKE '%sumo%';

SELECT * FROM actor WHERE last_name = 'Monroe';
--Actor id = 120

SELECT * FROM film_actor WHERE actor_id =120
--27 films

---compare the 27 films_IDS already filtered by Actor_ID(120) above to the film_id in films



-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film

SELECT title, length
from film 
WHERE 
length < 60 AND rating = 'R'


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
select * from customer where first_name = 'Matthew' and last_name = 'Mahan'

SELECT * FROM rental 
WHERE return_date < '2005-08-01' AND return_date >'2005-07-28' and customer_id =323;  ---found 3 movies rented by matan

select * from payment where customer_id = 323 AND rental_id = 7937 --- movie over$4.00


-- need to find where rental.id and film.id are connected
SELECT * FROM actor


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

