const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(letters, color, backgroundColor) {
        super(letters, color, backgroundColor);
        this.shape = shape;
    }

    render() {
        return `<rect x="150" y="150" width="150" height="150" fill="${this.backgroundColor}"/>`
    }
}

module.exports = Square;