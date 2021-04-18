DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE departments(
    id INT AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL, 
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);