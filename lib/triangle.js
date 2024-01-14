const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(logoChars, logoTextColor, logoShapeColor) {
        super(logoChars, logoTextColor, logoShapeColor);
        this.logoShape = logoShape;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>`
    }
}

module.exports = Triangle;