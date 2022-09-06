// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}
  
  
//   return `[![License]
// (https://img.shields.io/badge/License-${license.link}-${license.color}.svg)](${license.url})]`




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'MIT':
      [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);
      break;
    case 'APACHE 2.0':
      [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);
      break;
    case 'BSD 3':
      [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause);
      break;
    case 'WTFPL':
      <a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>
       https://img.shields.io/badge/WTFPL-YUP-red;
      break;
    case 'None':
      '';
      break;
    default:
      console.log("");
      break;
  }
}


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

${renderLicense.Badge(date.license)}

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
