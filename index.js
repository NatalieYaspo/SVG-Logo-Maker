const fs = require('fs');
const inquirer = require('inquirer');
const { Shapes, Circle, Square, Triangle } = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');

//Question prompts to generate logo
const Questions = [
    {
        type: 'input',
        message: 'Please enter up to (3) characters for your logo:',
        name: 'logoChars',
    },
    {
      type: 'input',
      message: 'What color would you like the text for your logo (color keyword or hexadecimal number)?',
      name: 'logoTextColor',
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'logoShape',
    },
    {
        type: 'input',
        message: 'What color would you like the shape of your logo (color keyword or hexadecimal number)?',
        name: 'logoShapeColor',
    },
]

// Function to write SVG file
function writeToFile(data) {
    fs.writeFile(`./logo.svg`, data, (err) =>
    err ? console.log(err) : console.log('Your SVG has been generated!')
);
}

// Function to initialize app
function init() {
    inquirer.prompt(Questions).then((data) => {
        return writeToFile(generateSVG(data));
    });
}

// Function call to initialize app
init();