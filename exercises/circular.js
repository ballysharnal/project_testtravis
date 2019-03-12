'use strict'

/*
 * Create an object named `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :
let circular = {
    circular: circular
}

//* Begin of tests
//const assert = require('assert')

console.log(typeof circular, 'object')
console.log(circular.circular, circular)
console.log(circular.circular.circular, circular)
console.log(circular.circular.circular.circular, circular)
console.log(circular.circular.circular.circular.circular, circular)
// End of tests */
