'use strict'

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code :
let obj = {
    str : '1337',
    num: 42,
    bool: false,
    undef: undefined
}
//* Begin of tests
const assert = require('assert')

console.log(typeof obj, 'object')

console.log(typeof obj.str, 'string')
console.log(obj.str, '1337')

console.log(typeof obj.num, 'number')
console.log(obj.num, 42)

console.log(typeof obj.bool, 'boolean')
console.log(obj.bool, false)

console.log(typeof obj.undef, 'undefined')
console.log(obj.undef, undefined)
// End of tests */
