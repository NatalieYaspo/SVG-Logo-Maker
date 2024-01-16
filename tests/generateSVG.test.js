const { Shapes, Circle, Square, Triangle } = require('../lib/shapes');

//Tests that the error is thrown when more than 3 letters are entered for the logo:
describe('Shapes', () => {
    describe('logoChars', () => {
        it('should throw and error when the user enters more than 3 characters.', () => {
            const cb = () => new Shapes('ancd', 'pink', 'purple');
            const err = new Error('Only 3 characters allowed for logo.')
            
            expect(cb).toThrowError(err);
        });
    });
});