const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'Jasper#02',
  database: 'employee_trackerdb',
});

module.exports = connection;
