CREATE TABLE schools(
	school_id Serial Primary Key Not NULL,
	gan_name VARCHAR(100),
	location_city VARCHAR(100),
	location_address VARCHAR(150),
	age_low_month INTEGER,
	age_high_month INTEGER,
	ratio VARCHAR(10),
	website VARCHAR(1000),
	pictures VARCHAR(1000),
	owner VARCHAR(100),
	contact_phone VARCHAr(20),
	specialties VARCHAR (300),
	friday_class BOOLEAN
)

select * from schools_languages

CREATE TABLE languages(
	lang_id SERIAL PRIMARY KEY NOT NULL,
	languages VARCHAR(50) 
)

CREATE TABLE schools_languages(
		id SERIAL PRIMARY KEY NOT NULL,
		school_id integer NOT NULL REFERENCES schools(school_id),
		language_id integer NOT NULL REFERENCES languages(lang_id)
)


select * FROM schools_languages