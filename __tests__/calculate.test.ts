import { describe, expect, test } from '@jest/globals';
import calculate from './../calculate';

describe('calculate', () => {
  test('has to operate', () => {
    expect(calculate('2+2')).toBe(4);
    expect(calculate('4-2')).toBe(2);
    expect(calculate('4*2')).toBe(8);
    expect(calculate('8/2')).toBe(4);
  });
});
