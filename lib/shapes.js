class Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        // checks to see if there are more than 3 characters entered
        if (logoChars.length > 3) {
            throw new Error('Only 3 characters allowed for logo.');
        }

        this.logoChars = logoChars;
        this.logoTextColor = logoTextColor;
        this.logoShapeColor = logoShapeColor;
    }

}

//Circle class
class Circle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
    }
    //function to render the circle criteria for the svg file
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="${this.logoShapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

//Square class
class Square extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
    }
    //function to render the square criteria for the svg file
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="200" height="200" fill="${this.logoShapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

//Triangle class
class Triangle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
    }
    //function to render the triangle criteria for the svg file
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 274, 162 26, 162" fill="${this.logoShapeColor}"/>
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text>
        </svg>`
    }
}

module.exports = { Shapes, Circle, Square, Triangle }