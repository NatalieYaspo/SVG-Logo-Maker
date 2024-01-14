const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(letters, color, backgroundColor) {
        super(letters, color, backgroundColor);
        this.shape = shape;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}"></circle>`
    }
}

module.exports = Circle;