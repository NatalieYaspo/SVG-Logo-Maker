const { Shapes, Circle, Square, Triangle } = require('../lib/shapes');

describe('Shapes', () => {

    //Test for a Blue Triangle
    describe('Triangle', () => {
        it('should render a blue triangle', () => {
            const newTriangle = new Triangle('TRI', 'black', 'blue');
            const renderedTri = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 274, 162 26, 162" fill="blue"/>
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="black">TRI</text>
        </svg>`
            expect(newTriangle.render()).toEqual(renderedTri);
        });
    });

    //Test for a Green Square
    describe('Square', () => {
        it('should render a green square', () => {
            const newSquare = new Square('SQU', 'black', 'green');
            const renderedSqu = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="200" height="200" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SQU</text>
        </svg>`
            expect(newSquare.render()).toEqual(renderedSqu);
        });
    });

    //Test for a Purple Circle
    describe('Circle', () => {
        it('should render a purple circle', () => {
            const newCircle = new Circle('CIR', 'black', 'purple');
            const renderedCir = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="purple"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">CIR</text>
        </svg>`
            expect(newCircle.render()).toEqual(renderedCir);
        });
    });
});