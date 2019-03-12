'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */

function words(string){
    return string.split(' ')
}
//* Begin of tests
const assert = require('assert')

console.log(typeof words, 'function')
console.log(words.length, 1)
console.log(words('a b c'), [ 'a', 'b', 'c' ])
console.log(words('a 1 c'), [ 'a', '1', 'c' ])
console.log(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
console.log(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
