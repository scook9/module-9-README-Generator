// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "IBM") {
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("we got to generateMarkdown");
  const license = renderLicenseLink(data.license);
  const badge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How to Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Credits
  ${data.credits}
  ## License
  ${license}
  ## Questions
  https://github.com/${data.gitHubURL}  
  Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
