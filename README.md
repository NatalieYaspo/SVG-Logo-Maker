# SVG-Logo-Maker

## Description

This is a command line application that will generate a .svg logo based on user inputs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

User should clone the repo: https://github.com/NatalieYaspo/SVG-Logo-Maker

Then the user should open the terminal in VS Code and run "npm install" in the terminal to receive all of the dependencies for this application.

## Usage

The user will run "node index.js" in their terminal and answer the questions.
When prompted for text, the user can enter up to three characters.

When prompted for a color, the user can enter a color keyword or a hexadecimal number.

User is presented with a list of shapes to choose from, and then asked for a color for that shape.

Once all input is received, a logo.svg file is created and it is noted in the command line that a logo was generated.

The logo can be opened in a browser meeting the criteria entered and is displayed as a 300x200 pixel image.

Link to demonstration video:

## Credits

Developer: Natalie Yaspo

Collaborations: Le, Roger via Zoom on 16 Jan 2024
Peters, Sasha via Zoom on 16 Jan 2024

Tutorials: B., Zachary. "SVG Logo Maker - M10 RUT Bootcamp" YourTube uploaded by Zachary B., 3 Apr 2023, https://www.youtube.com/watch?v=zh9CsKqEhOM

## License

N/A

## Tests

Jest tests:
generateSVG.text.js
shapes.test.js