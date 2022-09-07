// Packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
  },

  {
    type: "checkbox",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "WTFPL", "None"],
  },

  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
  },

  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },

  {
    type: "input",
    name: "credits",
    message:
      "Were there any collaborators to third-party assets used that require attribution?",
  },

  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?",
  },

  {
    type: "input",
    name: "Contribute",
    message: "What does the user need to know about contributing to the repo?",
  },
];
// .then((answers) => {
//     console.log(answers);
// })

//     .catch((error) => {
//         if (error.isTtyError) {
//             //Prompt couldn't be rended in current environment
//         } else {
//             // something else went wrong
//         }
//     });

// // // Function to write README file
function writeToFile(README, data) {
  return fs.writeFileSync(path.join(process.cwd(), "/utils", README), data);
}

// // Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeToFile("README.md", generateMarkdown(answers));
    console.log("Saved: Your file is in the dist folder");
  });
}

// Function call to initialize app
init();
