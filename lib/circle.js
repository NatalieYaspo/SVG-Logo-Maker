const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(logoShape) {
        super(logoShape);
        this.logoShapeColor = logoShapeColor;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}"></circle>`
    }
}

module.exports = Circle;