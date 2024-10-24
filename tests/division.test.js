const divide = require('../math/division');

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('throws error when dividing by 0', () => {
  expect(() => divide(1, 0)).toThrow('Division by zero');
});
