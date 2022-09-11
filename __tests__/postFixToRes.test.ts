import postFixToRes from './../postFixToRes';

describe('post Fix To Res', () => {
  test('has to calculate res', () => {
    expect(postFixToRes([1, 1, '+'])).toBe(2);
    expect(postFixToRes([1, 1, 10, 'x', '+'])).toBe(11);
  });
});
