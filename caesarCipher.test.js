const caesarCipher = require('./caesarCipher');

test('shifts characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('wraps from z to a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('Z', 1)).toBe('A');
});

test('preserves case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('handles punctuation and spaces', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles negative shifts', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('handles large shifts', () => {
  expect(caesarCipher('abc', 27)).toBe('bcd');
});
