CREATE TABLE actors4 (
    actor_id  SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name  VARCHAR(20) NOT NULL,
    date_birth DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

-- -- select all the colums and all the rows
SELECT * FROM actors4;

-- select the columns first_name, last_name and all the rows
-- SELECT first_name, last_name FROM actors;

INSERT INTO actors4 (first_name, last_name, date_birth, number_oscars) 
VALUES ('George', 'Clooney', '1999-01-08', 2);

INSERT INTO actors4 (first_name, last_name, date_birth, number_oscars) 
VALUES ('Matt', 'Damon', '1979-01-06', 2);

INSERT INTO actors4 (first_name, last_name, date_birth, number_oscars)
VALUES ('Joan', 'Smith', '1999-11-07', 6);

INSERT INTO actors4 (first_name, last_name, date_birth, number_oscars)
VALUES ('Kim', 'Jones', '1942-07-01', 1);

INSERT INTO actors4 (first_name, last_name, date_birth, number_oscars)
VALUES
('Jennifer', 'Lawrence', '1978-10-31', 3),
('Uma', 'Therman', '1964-01-16', 10),
('Amanda', 'Seyfried', '1988-11-09', 5);


SELECT * FROM actors4 WHERE number_oscars >= 2;