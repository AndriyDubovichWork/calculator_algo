import Operate from '../Operate';

describe('Operate', () => {
  test('operation has to be correct', () => {
    expect(Operate(2, 2, '+')).toBe(4);
    expect(Operate(4, 2, '-')).toBe(2);
    expect(Operate(8, 2, 'x')).toBe(16);
    expect(Operate(8, 2, '÷')).toBe(4);
    expect(Operate(8, 2, '^')).toBe(64);
    expect(Operate(2, 25, '√')).toBe(5);
    expect(Operate(2, 25, 'g')).toBe(undefined);
  });
});
