-- *************************************************************************************************
-- This script creates all of the database objects (tables, sequences, etc) for the database
-- *************************************************************************************************
BEGIN TRANSACTION;

DROP TABLE IF EXISTS app_user;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS student_user;
DROP TABLE IF EXISTS employer;
DROP TABLE IF EXISTS employer_user;
DROP TABLE IF EXISTS representative;
DROP TABLE IF EXISTS employer_representative;
DROP TABLE IF EXISTS schedule;
DROP TABLE IF EXISTS ranking;

CREATE TABLE app_user (
  user_id SERIAL PRIMARY KEY,
  username varchar(32) NOT NULL UNIQUE,
  password varchar(32) NOT NULL,
  email varchar(32) NOT NULL,
  role varchar(32),
  salt varchar(255) NOT NULL
);

CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  student_first_name varchar(32) NOT NULL,
  student_last_name varchar(32) NOT NULL
);

CREATE TABLE student_user (
  user_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  CONSTRAINT fk_student_user_user_id FOREIGN KEY (user_id) REFERENCES app_user (user_id),
  CONSTRAINT fk_student_user_student_id FOREIGN KEY (student_id) REFERENCES student (student_id),
  CONSTRAINT pk_student_user PRIMARY KEY (user_id, student_id)
);

CREATE TABLE employer (
  employer_id SERIAL PRIMARY KEY,
  employer_name text NOT NULL,
  table_count int NOT NULL,
  employer_img_url text NOT NULL,
  employer_jobdescription_url text NOT NULL,
  employer_description text NOT NULL,
  employer_note text NOT NULL
);

CREATE TABLE representative (
  representative_id SERIAL PRIMARY KEY,
  representative_first_name text NOT NULL,
  representative_last_name text NOT NULL
);

CREATE TABLE employer_user (
  employer_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  CONSTRAINT fk_employer_user_employer_id FOREIGN KEY (employer_id) REFERENCES employer (employer_id),
  CONSTRAINT fk_app_user_employer_id FOREIGN KEY (user_id) REFERENCES app_user (user_id),
  CONSTRAINT pk_employer_user PRIMARY KEY (employer_id, user_id)
);

CREATE TABLE employer_representative (
  employer_id INTEGER NOT NULL,
  representative_id INTEGER NOT NULL,
  CONSTRAINT fk_employer_representative_employer_id FOREIGN KEY (employer_id) REFERENCES employer (employer_id),
  CONSTRAINT fk_employer_representative_representative_id FOREIGN KEY (representative_id) REFERENCES representative (representative_id),
  CONSTRAINT pk_employer_representative PRIMARY KEY (employer_id, representative_id)
);

CREATE TABLE schedule (
  student_id INTEGER NOT NULL,
  employer_id INTEGER NOT NULL,
  appointment_datetime timestamp NOT NULL,
  CONSTRAINT fk_schedule_student_id FOREIGN KEY (student_id) REFERENCES student (student_id),
  CONSTRAINT fk_schedule_employer_id FOREIGN KEY (employer_id) REFERENCES employer (employer_id),
  CONSTRAINT pk_schedule PRIMARY KEY (student_id, employer_id, appointment_datetime)
);

CREATE TABLE ranking (
  ranking INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  employer_id INTEGER NOT NULL,
  CONSTRAINT fk_ranking_student_id FOREIGN KEY (student_id) REFERENCES student (student_id),
  CONSTRAINT fk_ranking_employer_id FOREIGN KEY (employer_id) REFERENCES employer (employer_id),
  CONSTRAINT pk_ranking PRIMARY KEY (student_id, employer_id)
);

COMMIT TRANSACTION;