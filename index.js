// Packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'proj-name',
        message: "What is your project's name?",
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'WTFPL', 'None']
    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },

    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
    },

    {
        type: 'input',
        name: 'Contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeToFile('index2.html', generateMarkdown(answers));
        console.log('Saved: Your file is in the dist folder')

    });
}

// Function call to initialize app
init();
