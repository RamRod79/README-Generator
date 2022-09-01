// Packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./generateHTML');

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
        name: 'proj-desc',
        message: 'Please write a short description of your project',
    },

    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
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
        name: 'fundMe',
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
