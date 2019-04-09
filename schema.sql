DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE students (
	id int NOT NULL AUTO_INCREMENT,
	quantity integer NOT NULL,
	description varchar (50) NOT NULL,
	PRIMARY KEY (ID)
);