const inquirer = require ('inquirer');
const fs = require ('fs');
const { inherits } = require('util');

let employeeInfo = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: ['Intern', 'Engineer', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the ID of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
    ])
}

const writeFile = data => {
    fs.writeFile ('./dis/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

init(); 