import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
  it('should work with two positive numbers', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should work with positive and negative numbers', () => {
    const result = add(6, -4);
    expect(result).to.equal(2);
  });

  it('should work with both numbers being negative', () => {
    const result = add(-3, -7);
    expect(result).to.equal(-10);
  });

  it('should return the same number when adding zero', () => {
    const result = add(5, 0);
    expect(result).to.equal(5);
  });

  it('should return zero from two zeros', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  it('should work with decimal numbers', () => {
    const result = add(1.5, 2.3);
    expect(result).to.be.closeTo(3.8, 0.001);
  });

  it('should work with large numbers', () => {
    const result = add(1e6, 1e6);
    expect(result).to.equal(2e6);
  });
});
