// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
return `[![License]
(https://img.shields.io/badge/License-${license.link}-${license.color}.svg)](${license.url})]`
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  const arr [ {
    name: 'MIT',
    link:
    url:
    color:
    },
    {
      name: 'APACHE 2.0',
      link:
      url:
      color:
      },
      {
        name: 'GPL 3.0'
        link:
        url:
        color:
        },
        {
          name: 'BSD 3'
          link:
          url:
          color:
          },
          {
            name: 'None'
            link: ''
            url: ''
            color: ''
            },
}; ]

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

`;
}

module.exports = generateMarkdown;
