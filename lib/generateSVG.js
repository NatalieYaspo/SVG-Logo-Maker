const { Shapes, Circle, Square, Triangle } = require('./shapes');
// const Circle = require('./cirlce');

//This function writes markdown for the SVG
function generateSVG(data) {
    // console.log(data); // Works!
    let setLogoShape = ""
    if (data.logoShape === "Triangle") {
        setLogoShape = new Triangle(data.logoChars, data.logoTextColor, data.logoShapeColor);
    } else if (data.logoShape === "Square") {
        setLogoShape = new Square(data.logoChars, data.logoTextColor, data.logoShapeColor);
    } else if (data.logoShape === "Circle") {
        setLogoShape = new Circle(data.logoChars, data.logoTextColor, data.logoShapeColor);
    }
    // console.log(setLogoShape); //Works!
    return setLogoShape.render();
}

// checks to see if there are more than 3 characters entered

module.exports = generateSVG;