import IsOperator from './../IsOperator';

describe('Is Operator', () => {
  test('check if string is operator', () => {
    expect(IsOperator('+')).toBe('+');
    expect(IsOperator('-')).toBe('-');
    expect(IsOperator('x')).toBe('x');
    expect(IsOperator('÷')).toBe('÷');
    expect(IsOperator('^')).toBe('^');
    expect(IsOperator('√')).toBe('√');
  });
  test('if string is NOT operator', () => {
    expect(IsOperator('')).toBe(false);
    expect(IsOperator('s')).toBe(false);
    expect(IsOperator('1')).toBe(false);
    expect(IsOperator('_')).toBe(false);
    expect(IsOperator('%')).toBe(false);
    expect(IsOperator('$')).toBe(false);
    expect(IsOperator('>')).toBe(false);
  });
});
