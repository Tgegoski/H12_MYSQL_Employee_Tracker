USE employee_trackerdb;

INSERT INTO departments (dept_name)
VALUES 
("Marketing"),
("Human Resources"),
("Legal"),
("Accounting");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Manager",100000,""),
("Sales Lead", 40000,""),
("Project Manager",80000,""),
("Lawyer", 100000,""),
("Finance Manager",100000,""),
("Administrator",40000,"");


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Idris","Elba","",""),
("Bill","Murray","",""),
("Jack","Johnson","",""),
("Maynard","James","","");