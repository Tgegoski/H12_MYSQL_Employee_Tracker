const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
const cTable = require('console.table');


const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'employee_tracker',
      message: 'What would you like to do?',
      choices: [
        'View Departments',
        'View Roles',
        'View Employees',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Find departments by name':
          departmentSearch();
          break;

        case 'Find roles by title':
          rolesSearch();
          break;

        case 'Find employees by name':
          employeeSearch();
          break;
      }
    });
};

const departmentSearch = () => {
  inquirer
    .prompt({
      name: 'department',
      type: 'input',
      message: 'What department would you like to search for?',
    })
    .then((answer) => {
      const query = 'SELECT department FROM choices';
      connection.query(query, { department: answer.department }, (err, res) => {
        res.forEach(({ choices, department }) => {
          console.log(
            `Choices: ${choices} || Department: ${department} ||`
          );
        });
        runSearch();
      });
    });
};

const rolesSearch = () => {
  inquirer
    .prompt({
      name: 'roles',
      type: 'input',
      message: 'What role would you like to search for?',
    })
    .then((answer) => {
      const query = 'SELECT role FROM choices';
      connection.query(query, { role: answer.role }, (err, res) => {
        res.forEach(({ choices, role }) => {
          console.log(
            `Choices: ${choices} || Role: ${role} ||`
          );
        });
        runSearch();
      });
    });
};

const employeeSearch = () => {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'input',
        message: 'Enter employee name: ',
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: 'end',
        type: 'input',
        message: 'Enter ending position: ',
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {
      const query =
        'SELECT first_name, last_name'
      connection.query(query, [answer.start, answer.end], (err, res) => {
        res.forEach(({ first_name, last_name }) => {
          console.log(
            `First Name: ${first_name} || Last Name: ${last_name} ||`
          );
        });
        runSearch();
      });
    });
};




