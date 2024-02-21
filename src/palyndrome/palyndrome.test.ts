const isPalyndromeFunction = require('./palyndrome');


test('Should return it is a palyndrome', () => {
    const palyndromeWord = 'anna';
    expect(isPalyndromeFunction(palyndromeWord)).toBe(true);
});

test('Should return it is not a palyndrome', () => {
    expect(true);
});

test('Should return it is a palyndrome with mixed lower and upper case', () => {
    expect(true);
});

test('Should throw when argument is not a string', () => {
    expect(true);
});
