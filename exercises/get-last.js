'use strict'

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code :
function getLast(arrayString){
    return arrayString[arrayString.length - 1]
}
//* Begin of tests
const assert = require('assert')

console.log(getLast([ 2, 42 ]), 42)
console.log(getLast([ 'pouet', 4, true ]), true)
console.log(getLast([ getLast ]), getLast)
console.log(getLast('salut'), 't')
console.log(getLast([]), undefined)
// End of tests */
