// test/calculator.test.js (leave it as .js)
import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator Integration Tests', () => {
  describe('Addition', () => {
    it('should add two numbers', () => {
      const result = add(3, 4);
      expect(result).to.equal(7);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two numbers', () => {
      const result = subtract(9, 3);
      expect(result).to.equal(6);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two numbers', () => {
      const result = multiply(3, 4);
      expect(result).to.equal(12);
    });
  });

  describe('Division', () => {
    it('should divide two numbers', () => {
      const result = divide(12, 3);
      expect(result).to.equal(4);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(12, 0)).to.throw('Cannot divide by zero');
    });
  });
});
