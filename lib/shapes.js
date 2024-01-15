class Shapes {
    constructor(logoShape) {
        this.logoShape = logoShape;
    }
}

//Circle class
class Circle extends Shapes {
    constructor(logoShape) {
        super(logoShape);
        this.logoShapeColor = logoShapeColor;
    }
    //function to render the circle criteria for the svg file
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}"></circle>`
    }
}

//Square class
class Square extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        this.logoShape = logoShape;
    }
    //function to render the square criteria for the svg file
    render() {
        return `<rect x="150" y="150" width="150" height="150" fill="${this.logoShapeColor}"/>`
    }
}

//Triangle class
class Triangle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        this.logoShape = logoShape;
    }
    //function to render the triangle criteria for the svg file
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>`
    }
}

module.exports = { Shapes, Circle, Square, Triangle }