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

// function to create markdown formatted string to write to md file
function generateMarkdown(data) {
  console.log("we got to generateMarkdown");
  const license = renderLicenseLink(data.license);
  const badge = renderLicenseBadge(data.license);

  //this return contains all text and formatting for the README
  return `# ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [How to Contribute](#how-to-contribute)  
  [Tests](#tests)  
  [Credits](#credits)  
  [License](#license)  
  [Questions](#questions)  
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
