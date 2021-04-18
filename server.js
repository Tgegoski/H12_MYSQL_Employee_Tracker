const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./data/connection');

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View Departments',
        'View Roles',
        'View Employees',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View Departments':
          viewAllDepartments();
          break;

        case 'View Roles':
          viewAllRoles();
          break;

        case 'View Employees':
          viewAllEmployees();
          break;
      }
    });
};

const viewAllDepartments = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) console.log(err);

    const departmentResults = res.map((department) => ({ id: department.id, name: department.dept_name }));

    console.log(cTable.getTable(departmentResults));

    runSearch();
  })


  const viewAllRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
      if (err) console.log(err);

      const roleResults = res.map((role) => ({ name: title.name, name: department.dept_name, number: salary.number }));

      console.log(cTable.getTable(roleResults));

      runSearch();
    })


    const viewAllEmployees = () => {
      connection.query('SELECT * FROM employees', (err, res) => {
        if (err) console.log(err);

        const employeeResults = res.map((role) => ({ name: first_name, name: last_name, id: role.id, id: manager_id }));

        console.log(cTable.getTable(employeeResults));

        runSearch();
      })
    };
  }
};

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});


