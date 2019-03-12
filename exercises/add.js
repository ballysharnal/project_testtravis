'use strict'

/*
 * Create a `add` function that takes 2 number arguments and add them
 *
 * @notions Primitive and Operators, Functions
 */

// Your code :
const add = (int1, int2) => int1 + int2
//* Begin of tests

const rand = Math.random()

console.log(typeof add, 'function')
console.log(add.length, 2)
console.log(add(2, 2), 4)
console.log(add(rand, rand), rand + rand)
// End of tests */
