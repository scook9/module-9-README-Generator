// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "Project title?", name: "title" },
  { type: "input", message: "Project description?", name: "description" },
  {
    type: "input",
    message: "Table of Contents?",
    name: "contents",
  },
  {
    type: "input",
    message: "Installation Instructions?",
    name: "installation",
  },
  { type: "input", message: "Usage Instructions?", name: "usage" },
  { type: "input", message: "Credits?", name: "credits" },
  { type: "input", message: "How to contribute?", name: "contribute" },
  { type: "input", message: "Tests?", name: "tests" },
  {
    type: "list",
    message: "License?",
    choices: ["MIT", "IBM", "None"],
    name: "license",
  },
  { type: "input", message: "GitHub username?", name: "gitHubURL" },
  { type: "input", message: "Email address?", name: "email" },
];

//function to prompt the user and store responses
function userPrompt(questions) {
  //response is an object with keys equal to the names in the questions array
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", markdown(response)));
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  userPrompt(questions);
}

// Function call to initialize app
init();
