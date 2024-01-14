const Shapes = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./square');
const Square = require('./square');

function renderShape(logoShape) {
    switch(logoShape) {
        case "Triangle":
            logoShape = new Triangle;
            break;
        case "Squareshape":
            logoShape = new Square;
            break;
        case "Circle":
            logoShape = new Circle;
            break;
    }

    return logoShape;
}


//This function writes markdown for the SVG
function generateSVG(data) {
    renderShape(data.logoShape);
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300 height="200">
        ${data.logoShape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.logoTextColor}">${data.logoChars}</text>
    </svg>`;
}

module.exports = generateSVG;