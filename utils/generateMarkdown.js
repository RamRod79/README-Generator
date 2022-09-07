// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let userLicense = ''
  if(licenseType === 'MIT') {
    userLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-success)`
  } else if (licenseType === 'APACHE 2.0') {
    userLicense = `![APACHE 2.0 license](https://img.shields.io/badge/License-APACHE%202.0-important)`
  } else if (licenseType === 'GPL 3.0') {
    userLicense = `![GPL 3.0 license](https://img.shields.io/badge/License-GPL%203.0-blue)`
  } else if (licenseType === 'BSD 3') {
    userLicense = `![BSD 3 license](https://img.shields.io/badge/License-BSD-red)`
  } else if (licenseType === 'WTFPL') {
    userLicense = `![WTFPL license](https://img.shields.io/badge/License-WTFPL-critical)`
  } else {
    license.license = "None"
  }
  return userLicense;
};

  
  
//   return `[![License]
// (https://img.shields.io/badge/License-${license.link}-${license.color}.svg)](${license.url})]`



// // Returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {

//   switch (license().getlicense()) {
//     case 'MIT':
//       userLicense = [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);
//       break;
//     case 'APACHE 2.0':
//       userLicense = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);
//       break;
//     case 'GPL 3.0':
//       userLicense = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/GPL-3.0);
//       break;
//     case 'BSD 3':
//       userLicense = [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause);
//       break;
//     case 'WTFPL':
//       userLicense = [![License](https://img.shields.io/badge/License-WTFPL-critical)](http://www.wtfpl.net/about/);
//       break;
//     case 'None':
//       userLicense = '';
//       break;
//   }
// }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The following licenses have been used in the development of this project:

${data.license}

## Badges

${renderLicenseBadge(data.license)}

## Repo Features

Using this repo can be intitiated by running 'npm run Start' to initiate the program. ${data.repo}

## How to Contribute

If other developers would like to contribute, you can contact me at ${data.email} and/or ${data.contribute}

## Tests

The following example(s) are test that can be ran for this application:

${data.tests}

## Contact Info

For any other issues or comments please contact me at:

GitHub username: ${data.username}
Email: ${data.email}`;
}

module.exports = generateMarkdown;
