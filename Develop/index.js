// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "Project title?",
  "Project description?",
  "Table of Contents? (Enter to skip)",
  "Installation Instructions? (Enter to skip)",
  "Usage Instructions?",
  "Credits?",
  "Badges?",
  "Features?",
  "How to contribute?",
  "Tests?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README-Test.md", "also test");
}

// Function call to initialize app
init();
