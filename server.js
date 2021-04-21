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
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Roles',
        'Add Employee',
        'Update Employees Role',
        'Exit',
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

        case 'Add Department':
          addDepartment();
          break;

        case 'Add Roles':
          addRoles();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Update Employee Role':
          updateEmployeeRole();
          break;

      }
    });


  const viewAllDepartments = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
      if (err) console.log(err);

      const departmentResults = res.map((department) => ({ id: department.id, name: department.dept_name }));
      console.log(cTable.getTable(departmentResults));

      runSearch();
    });


    const viewAllRoles = () => {
      connection.query('SELECT * FROM roles', (err, res) => {
        if (err) console.log(err);

        const roleResults = res.map((role) => ({ name: title.name, name: department.dept_name, number: salary.number }));
        console.log(cTable.getTable(roleResults));

        runSearch();
      });

      const viewAllEmployees = () => {
        connection.query('SELECT * FROM employees', (err, res) => {
          if (err) console.log(err);

          const employeeResults = res.map((role) => ({ name: first_name, name: last_name, id: role.id, id: manager_id }));
          console.log(cTable.getTable(employeeResults));

          runSearch();
        });

        const addDepartment = () => {
          inquirer
            .prompt({
              name: 'department',
              type: 'input',
              message: 'What would you like to name the new department?',
            })
            .then(function (answer) { }); {
            let query = "INSERT INTO departments (name) VALUES ( ? )";
            connection.query(query, answer.department, function (err, res) { }); {
              console.log(`You have added this department: ${(answer.department).toUppercase()},`);

              const addDepartment = res.map((department) => ({ id: department.id, name: department.dept_name }));
              console.log(cTable.getTable(departmentResults));

              runSearch();
            };


            const addRoles = () => {
              inquirer
                .prompt({
                  name: 'role',
                  type: 'input',
                  message: 'What role would you like to add?',
                })
                .then(function (answer) { }); {
                let query = "INSERT INTO role (name) VALUES ( ? )";
                connection.query('INSERT INTO roles', (err, res) => {

                  if (err) console.log(err);
                  const addRoles = res.map((role) => ({ name: title.name, id: department.dept.id, number: salary.number }));
                  console.log(cTable.getTable(roleResults));

                  runSearch();
                });

                const addEmployee = () => {
                  inquirer
                    .prompt({
                      name: 'employee',
                      type: 'input',
                      message: 'What type of employee would you like to add?',
                    })
                    .then(function (answer) { }); {
                    let query = "INSERT INTO employees (name) VALUES ( ? )";
                    connection.query('INSERT INTO employees', (err, res) => {
                      if (err) console.log(err);
                      const addEmployee = res.map((employee) => ({ name: first_name, name: last_name, id: role.id, id: manager_id }));

                      console.log(cTable.getTable(employeeResults));

                      runSearch();
                    });

                    const updateEmployeeRole = () => {
                      connection.query('INSERT INTO employee', (err, res) => {
                        if (err) console.log(err);

                        const updateEmployeeRole = res.map((role) => ({ name: first_name, name: last_name, id: role.id, id: manager_id }));
                        console.log(cTable.getTable(employeeRole));

                        runSearch();
                      });

                    };
                  }
                };

                connection.connect((err) => {
                  if (err) throw err;
                  runSearch();
                });
              };
            }
          };
        }
      }
    }
  }
}
module.exports = connection;