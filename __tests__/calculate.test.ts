import calculate from './../calculate';

describe('calculate', () => {
  test('has to do single operations', () => {
    expect(calculate('2+2')).toBe(4);
    expect(calculate('4-2')).toBe(2);
    expect(calculate('4*2')).toBe(8);
    expect(calculate('8/2')).toBe(4);
    expect(calculate('8^2')).toBe(64);
    expect(calculate('2√25')).toBe(5);
  });
  test('has to do multiple operations', () => {
    expect(calculate('2+2+2')).toBe(6);
    expect(calculate('4-2-1')).toBe(1);
    expect(calculate('4*2*2')).toBe(16);
    expect(calculate('8/2/2')).toBe(2);
    expect(calculate('2^2^2')).toBe(16);
    expect(calculate('2√2√625')).toBe(5);
  });
  test('has to do hard operations', () => {
    expect(calculate('2+2x2')).toBe(6);
    expect(calculate('1+2*2/2')).toBe(3);
    expect(calculate('2*10-2^3')).toBe(12);
    expect(calculate('2√25-2^3')).toBe(-3);
  });
  test('has to operations with bracket', () => {
    expect(calculate('(2+2)x2')).toBe(8);
    expect(calculate('((1+2)*2)^2')).toBe(36);
    expect(calculate('2*(7-2)^2')).toBe(50);
    expect(calculate('2√(27-2)^2')).toBe(25);
  });
});
