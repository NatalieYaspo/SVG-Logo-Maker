const fs = require('fs');
const inquirer = require('inquirer');
const { Shapes, Circle, Square, Triangle } = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');


// checks to see if there are more than 3 characters entered
// const logoCharsLength = async (input) => {
//     if (input > 3) {
//         throw Error('Only 3 characters allowed for logo.');
//     }
// }

//Question prompts to generate logo
const Questions = [
    {
        type: 'input',
        message: 'Please enter up to (3) characters for your logo:',
        name: 'logoChars',
        // validate: logoCharsLength
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
function writeToFile(data) { //May need to change DATA to something else?
    fs.writeFile(`./newlogo.svg`, data, (err) =>
    err ? console.log(err) : console.log('Your SVG has been created!')
);
}

// Function to initialize app
function init() {
    inquirer.prompt(Questions).then((responses) => {
        return writeToFile(generateSVG({...responses}));
    });
}

// Function call to initialize app
init();