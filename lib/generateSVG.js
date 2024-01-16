const { Shapes, Circle, Square, Triangle } = require('./shapes');

//This function writes markdown for the SVG
function generateSVG(data) {
    // console.log(data); // Works!
    let setLogoShape = ""
    //Looks as User input to determine which shape was selected.
    if (data.logoShape === "Triangle") {
        setLogoShape = new Triangle(data.logoChars, data.logoTextColor, data.logoShapeColor);
    } else if (data.logoShape === "Square") {
        setLogoShape = new Square(data.logoChars, data.logoTextColor, data.logoShapeColor);
    } else if (data.logoShape === "Circle") {
        setLogoShape = new Circle(data.logoChars, data.logoTextColor, data.logoShapeColor);
    }
    // console.log(setLogoShape); //Works!
    
    //Runs the Render method for the selected shape.
    return setLogoShape.render();
}

module.exports = generateSVG;