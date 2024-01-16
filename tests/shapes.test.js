const { Shapes, Circle, Square, Triangle } = require('../lib/shapes')

describe('renderShape', () => {
    describe('testShape', () => {
        it('should render a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 274, 162 26, 162" fill="${this.logoShapeColor}"/><text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoChars}</text></svg>');
        });
    });
});