'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */
function total(arrayNbr){
    let total = 0
    for (let i = 0; i < arrayNbr.length; i++){
        total = total + arrayNbr[i]
    }
    return total
}

//* Begin of tests
const assert = require('assert')

console.log(typeof total, 'function')
console.log(total.length, 1)
console.log(total([ 1, 1, 1]), 3)
console.log(total([ 10, 10, 10]), 30)
console.log(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
