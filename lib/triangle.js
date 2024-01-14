const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(letters, color, backgroundColor) {
        super(letters, color, backgroundColor);
        this.something = something;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}"/>`
    }
}

module.exports = Triangle;