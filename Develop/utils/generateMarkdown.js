// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("we got to generateMarkdown");
  return `# ${data.title}
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
  ## Badges
  ${data.badges}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
