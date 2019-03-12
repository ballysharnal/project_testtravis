'use strict'

/*
 * Create the `abs` function that takes one number argument
 * and returns its absolute value.
 * You are not allowed to use `Math.abs`, make your own.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 *
 * @notions Functions, Ternary
 */

// Your code :

let abs = number => number >= 0 ? number : -number
//* Begin of tests
const assert = require('assert')

console.log(assert.strictEqual(typeof abs, 'function'))
console.log(assert.strictEqual(abs.toString().includes('Math.abs'), false))
console.log(assert.notStrictEqual(abs, Math.abs))
console.log(assert.strictEqual(abs.length, 1))
console.log(assert.strictEqual(abs(0), 0))
console.log(assert.strictEqual(abs(-1), 1))
console.log(assert.strictEqual(abs(-13.2), 13.2))
console.log(assert.strictEqual(abs(132), 132))
// End of tests */
