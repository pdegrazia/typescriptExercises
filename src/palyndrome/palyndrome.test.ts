const isPalyndromeFunction = require('./palyndrome');


test('Should return it is a palyndrome', () => {
    const palyndromeWord: string = 'anna';
    expect(isPalyndromeFunction(palyndromeWord)).toBe(true);
});

test('Should return it is not a palyndrome', () => {
    const notPalyndromeWord: string = 'iamnotapalyndrome';
    expect(isPalyndromeFunction(notPalyndromeWord)).toBe(false);
});

test('Should return it is a palyndrome with mixed lower and upper case', () => {
    const mixedPalyndrome: string = 'baRarAb';
    expect(isPalyndromeFunction(mixedPalyndrome)).toBe(true); 
});

test('Should throw when argument is not a string', () => {
    expect(isPalyndromeFunction(6)).toThrow(Error);
});
