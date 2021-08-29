const inquirer = require ('inquirer');
const fs = require ('fs');

const generateHTML = require ('./src/generateHTML');
const Manager = require ('./lib/Manager.js');
const Engineer = require ('./lib/Engineer.js');
const Intern = require ('./lib/Intern.js');
const {default: generate} = require ('@babel/generator');

//const { template } = require('@babel/core');

const team = [ ]

const internData = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the interns ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns Email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school the intern attended?'
        },
    ]) .then (answer => {
        const intern = new Intern (answer.internName, answer.internID, answer.internEmail, answer.school);
        team.push (intern);
        card();
    })
}

const engineerData = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers Email?'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is the engineers Github Username?'
        },
    ]) .then (answer => {
        const engineer = new Engineer (answer.engineerName, answer.engineerID, answer.engineerEmail, answer.githubUsername);
        team.push(engineer)
        card();
    })
}

const managerData = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the managers ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers Email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?'
        },
    ])
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

const init = function () {
    managerData().then (answer => {
        const manager = new Manager (answer.managerName, answer.managerID, answer.managerEmail, answer.officeNumber);
        team.push(manager);
        card();
    })
}

const card = () => {
    inquirer.prompt ({
        type: 'list',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'No'],
        name: 'cardChoices'
    })
    .then(answer => {
        if (answer.cardChoices === 'Engineer') {
            engineerData()
        }
        else if (answer.cardChoices === 'Intern') {
            internData()
        }
        else {
            console.log(team)
            writeFile(generateHTML(team))
        }
    })
}

init(); 