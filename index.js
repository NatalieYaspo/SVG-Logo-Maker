const fs = require('fs');
const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
const Circle = require('./lib/circle');


//Question prompts to generate logo
const Questions = [
    {
        type: 'input',
        message: 'Please enter up to 3 characters for your logo:',
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
        choices: ['circle', 'triangle', 'square'],
        name: 'logoShape',
    },
    {
        type: 'input',
        message: 'What color would you like the shape of your logo (color keyword or hexadecimal number)?',
        name: 'logoShapeColor',
    },
]


inquire.prompt(Questionsuestions)

// Function to write SVG file
function writeToFile(data) { //May need to change DATA to something else?
    fs.writeFile(`./output/${logoChars}.svg`, data, (err) =>
    err ? console.log(err) : console.log('Your SVG has been created!')
);
}

// Function to initialize app
function init() {
    inquirer.prompt(Questions).then((responses) => {
        return writeToFile(generateMarkdown({...responses})); //NEED TO CHANGE GENERATE MARKDOWN
    });
}

// Function call to initialize app
init();