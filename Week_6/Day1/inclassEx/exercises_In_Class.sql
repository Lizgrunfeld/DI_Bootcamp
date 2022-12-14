CREATE TABLE city_info (
event_datetime timestamp NOT NULL, 
city VARCHAR(50) NOT NULL, 
temperature decimal NOT NULL,
light decimal NOT NULL, 
airquality_raw decimal NOT NULL, 
sound decimal NOT NULL, 
humidity decimal NOT NULL, 
dust decimal NOT NULL )

COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
FROM 'C:\Users\Public\city_info.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM city_info;

-- SELECT temperature FROM city_info WHERE city ='Boston' AND DATE(event_datetime) ='2015-03-01 11:00' ;

SELECT event_datetime FROM city_info WHERE city ='San Francisco' AND temperature >= 28 AND temperature <= 30 ;