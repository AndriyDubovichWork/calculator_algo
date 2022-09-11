import YardAlgotithm from './../YardAlgotithm';

describe('Shunting Yard Algotithm', () => {
  test('correct input to correct output', () => {
    expect(YardAlgotithm([])).toStrictEqual([]);
    expect(YardAlgotithm([''])).toStrictEqual([]);
    expect(YardAlgotithm([1, '+', 1])).toStrictEqual([1, 1, '+']);
    expect(YardAlgotithm(['(', 1, '+', 1, ')', 'x', 2])).toStrictEqual([
      1,
      1,
      '+',
      2,
      'x',
    ]);
  });
});
