const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(0, 0)).toBe(0);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(0, 5)).toBe(-5);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-1, 3)).toBe(-3);
  expect(calculator.multiply(0, 5)).toBe(0);
});

test('divides two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
  expect(calculator.divide(0, 5)).toBe(0);
});

test('throws error when dividing by zero', () => {
  expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
});