'use strict'

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code :
function sameSign(arg1, arg2){
    if ((arg1 > 0 && arg2 > 0) || (arg1 < 0 && arg2 < 0)){
        return true
    }else if (arg1 === 0 && arg2 === 0){
        return true
    }
    return false
}
//* Begin of tests
const assert = require('assert')

console.log(typeof sameSign, 'function')
console.log(sameSign.length, 2)
assert.notStrictEqual(sameSign, Math.sameSign)
console.log(sameSign(-2, -1), true)
console.log(sameSign(0, 0), true)
console.log(sameSign(12, 3232), true)
console.log(sameSign(1, -1), false)
console.log(sameSign(-231, 1), false)
console.log(sameSign(-231, 0), false)
console.log(sameSign(0, 231), false)
console.log(sameSign(231, -233), false)
// End of tests */
