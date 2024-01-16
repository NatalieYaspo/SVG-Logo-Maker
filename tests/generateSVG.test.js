const { Shapes, Circle, Square, Triangle } = require('../lib/shapes');

describe('Shapes', () => {
    describe('logoChars', () => {
        it('should throw and error when the user enters more than 3 characters.', () => {
            const cb = () => new Shapes('ancd', 'pink', 'purple');
            const err = new Error('Only 3 characters allowed for logo.')
            
            expect(cb).toThrowError(err);
        });
    });
});