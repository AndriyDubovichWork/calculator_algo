import { describe, expect, test } from '@jest/globals';
import calculate from './../calculate';

describe('calculate', () => {
  test('has to operate', () => {
    expect(calculate('2+2')).toBe(4);
  });
});
