const capitalize = require('./capitalize');

test('capitalizes first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('a')).toBe('A');
});

