// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  let userLicense = ''
  if(license === 'MIT') {
    userLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-success)`
  } else if (license === 'APACHE 2.0') {
    userLicense = `![APACHE 2.0 license](https://img.shields.io/badge/License-APACHE%202.0-important)`
  } else if (license === 'GPL 3.0') {
    userLicense = `![GPL 3.0 license](https://img.shields.io/badge/License-GPL%203.0-blue)`
  } else if (license === 'BSD 3') {
    userLicense = `![BSD 3 license](https://img.shields.io/badge/License-BSD-red)`
  } else if (license === 'WTFPL') {
    userLicense = `![WTFPL license](https://img.shields.io/badge/License-WTFPL-critical)`
  } else {
    userLicense = 'No licence';
  }
  return userLicense;
};

  
  
// // Returns the license link - tried case swith this time
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let userLicense;

  switch (license) {
    case 'MIT':
      userLicense = `[![License](https://img.shields.io/badge/License-MIT-success)](https://opensource.org/licenses/MIT)`;
      break;
    case 'APACHE 2.0':
      userLicense = `[![License](https://img.shields.io/badge/License-APACHE%202.0-important)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPL 3.0':
      userLicense = `[![License](https://img.shields.io/badge/License-GPL%203.0-blue)](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'BSD 3':
      userLicense = `[![License](https://img.shields.io/badge/License-BSD-red)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'WTFPL':
      userLicense = `[![License](https://img.shields.io/badge/License-WTFPL-critical)](http://www.wtfpl.net/about/)`;
      break;
    default:
      userLicense = 'None';
      break;
  }

  return userLicense;
}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

A short description explaining the what, why, and how of project "${data.title}":

 ${data.description}

## Table of Contents (Optional)

A table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Pull the GitHub repository from the username: ${data.username}. To ensure the program can runs properly the following commmand shoul be ran to install dependencies:

${data.dependencies}

## Usage

Screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ""md
    ![alt text](assets/images/screenshot.png)
    ""

## Credits

List of collaborators:

${data.credits}

## License

The following licenses have been used in the development of this project:

${renderLicenseLink(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## Repo Features

Using this repo can be initiated by running 'npm run Start' in the command terminal after opening the integrated terminal to initiate the program. ${data.repo}

## How to Contribute

If other developers would like to contribute, you can contact me at ${data.email}. ${data.contribute}

## Tests

The following example(s) are test that can be ran for this application:

${data.tests}

## Contact Info

For any other issues or comments please contact me at:

GitHub username: ${data.username}
Email: ${data.email}`;
}

module.exports = generateMarkdown;
