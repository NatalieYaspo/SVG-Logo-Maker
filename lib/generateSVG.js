const { Shapes, Circle, Square, Triangle } = require('./shapes');

//This function writes markdown for the SVG
function generateSVG(data) {
    let setLogoShape = ""
    if (data.logoShape === "Triangle") {
        setLogoShape = new Triangle;
    } else if (data.logoShape === "Square") {
        setLogoShape = new Square;
    } else if (data.logoShape === "Circle") {
        setLogoShape = new Circle;
    }
    return setLogoShape.render();
}

module.exports = generateSVG;