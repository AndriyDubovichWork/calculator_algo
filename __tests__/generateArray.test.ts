import generateArray from './../generateArray';
describe('generate Array', () => {
  test('text to array', () => {
    expect(generateArray('')).toStrictEqual(['']);
    expect(generateArray('1+1')).toStrictEqual([1, '+', 1]);
    expect(generateArray('(1+1)')).toStrictEqual(['(', 1, '+', 1, ')']);
  });
});
