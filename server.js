const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'Jasper#02',
  database: 'employee_tracker',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});