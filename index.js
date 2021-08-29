const inquirer = require ('inquirer');
const fs = require ('fs');

let questions = [
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
    {
        type: 'list',
        name: 'role',
        message: 'What is the role of the employee?',
        choices: ['Intern', 'Manager', 'Engineer']
    }
]