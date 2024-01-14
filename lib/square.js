const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        this.logoShape = logoShape;
    }

    render() {
        return `<rect x="150" y="150" width="150" height="150" fill="${this.logoShapeColor}"/>`
    }
}

module.exports = Square;