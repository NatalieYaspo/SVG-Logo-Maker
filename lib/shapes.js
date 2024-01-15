class Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        this.logoChars = logoChars;
        this.logoTextColor = logoTextColor;
        this.logoShapeColor = logoShapeColor;
    }
    setLogoChars(logoChars) {
        this.logoChars = logoChars
    }
    setTextColor(logoTextColor) {
        this.logoTextColor = logoTextColor
    }
    setShapeColor(logoShapeColor) {
        this.logoShapeColor = logoShapeColor
    }
}

//Circle class
class Circle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        // this.logoShape = logoShape;
    }
    //function to render the circle criteria for the svg file
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300 height="200">
        <circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}"></circle>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

//Square class
class Square extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        // this.logoShape = logoShape;
    }
    //function to render the square criteria for the svg file
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300 height="200">
        <rect x="150" y="150" width="150" height="150" fill="${this.logoShapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

//Triangle class
class Triangle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        // this.logoShape = logoShape;
    }
    //function to render the triangle criteria for the svg file
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300 height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

module.exports = { Shapes, Circle, Square, Triangle }