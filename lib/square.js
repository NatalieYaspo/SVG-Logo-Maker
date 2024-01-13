const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(letters, color, backgroundColor) {
        super(letters, color, backgroundColor);
        this.something = something;
    }

    writeToFile() {
        `<rect x="150" y="150" width="150" height="150" fill="${color}"/>`
    }
}

module.exports = Square;