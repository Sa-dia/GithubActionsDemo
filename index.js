const add = require('./math/addition');
const subtract = require('./math/subtraction');
const multiply = require('./math/multiplication');
const divide = require('./math/division');

console.log("Addition of 5 + 3 = ", add(5, 3));
console.log("Subtraction of 5 - 3 = ", subtract(5, 3));
console.log("Multiplication of 5 * 3 = ", multiply(5, 3));
console.log("Division of 6 / 2 = ", divide(6, 2));