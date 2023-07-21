const addFunctions = require('./addTwoNumbers.js');
const multiplyFunctions = require('./multiplyTwoNumbers.js');
const subtractFunctions = require('./subtractTwoNumbers.js');

describe('Tests Calculator Add Function', () => {
  it('Add two positive numbers', () => {
    expect(addFunctions.addTwoNumbers(4,5)).toBe(9);
  })
  it('Add a negative number and a positive number', () => {
    expect(addFunctions.addTwoNumbers(-4,10)).toBe(6);
  })
})

describe('Tests Calculator Multiply Function', () => {
  it('Multiply Two Positive numbers', () => {
    expect(multiplyFunctions.multiplyTwoNumbers(4,5)).toBe(20);
  })
  it('Multiply a negative and a positive number', () => {
    expect(multiplyFunctions.multiplyTwoNumbers(-4,10)).toBe(-40);
  })

  it('Multiply two negative numbers',() =>{
    expect(multiplyFunctions.multiplyTwoNumbers(-2,-10)).toBe(20);
  })
})

//
// Subtract tests
//

describe('Tests Calculator Subtract Function', () => {
  it('Subtract two positive numbers', () => {
    expect(subtractFunctions.subtractTwoNumbers(10,3)).toBe(7);
  })
})



