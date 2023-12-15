const multiply = require('./../multiply');

describe('multiply test', () => {
    it('multiply 4 * 3 to equal 12', () => {
        expect(multiply(4,3)).toBe(12)
    })

    it('multiply 4* -3 to equal -12', () => {
        expect(multiply(4,-3)).toBe(-12);
    })
})
