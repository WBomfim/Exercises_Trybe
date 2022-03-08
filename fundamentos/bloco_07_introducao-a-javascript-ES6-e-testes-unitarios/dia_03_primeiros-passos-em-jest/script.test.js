const {sum, myRemove, myFizzBuzz} = require('./script.js');

describe('Sum test', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  })

  it('sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
  })

  it('sums two values', () => {
    expect(sum(0, 0)).toEqual(0);
  })

  it('Throw error', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })

  it('Throw error', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error ('parameters must be numbers'));
  })
});

describe('Remove item from array', () => {
  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  })

  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Remove number 3', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).not.toContain(5);
  })
});

describe('Return fizz or buzz according to numbers', () => {
  it('Return fizzbuzz for 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Return fizzbuzz for 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('Return fizzbuzz for 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('Return fizzbuzz for 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })

  it('Return fizzbuzz for A', () => {
    expect(myFizzBuzz('A')).toBe(false);
  })
});
