SELECT * FROM actors4;


-- Update the first name of Matt Damon to "Maty"
UPDATE actors4 
SET first_name='Maty' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name;
	
-- 	Update the number of oscars of George Clooney to 4, and return the updated record
UPDATE actors4 
SET number_oscars= 4  
WHERE first_name='George' AND last_name='Clooney'
RETURNING 
    actor_id,
    first_name, 
    last_name,
	number_oscars;
	
--Rename the 'age' column by 'birthdate'

ALTER TABLE actors4 RENAME COLUMN date_birth TO birthdate;

-- Delete one actor and return it
DELETE FROM actors4
WHERE first_name = 'Joan'
RETURNING 
    actor_id,
    first_name, 
    last_name,
	number_oscars;

