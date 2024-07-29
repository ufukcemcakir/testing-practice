const reverseString = require('./reverseString');

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('a')).toBe('a');
});

test('returns empty string for empty input', () => {
  expect(reverseString('')).toBe('');
});

test('reverses a string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});