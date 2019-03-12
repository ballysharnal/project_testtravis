'use strict'

/*
 * Create a `repeat` function that takes a string and a number as parameters
 * and return the repeated string by the given number
 * Like the method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * Of course you may not use the method directly
 *
 */
function repeat(string, nbr){
    let bloup = '';
    for (nbr; nbr = 0; nbr--){
        bloup = bloup + string
    }
    return bloup
}
//* Begin of tests
const assert = require('assert')

console.log(typeof repeat, 'function')
console.log(repeat.length, 2)
console.log(repeat.toString().includes('.repeat'), false)
console.log(repeat('a', 3), 'aaa')
console.log(repeat('ba', 10), 'babababababababababa')
console.log(repeat('pouet', 2), 'pouetpouet')
console.log(repeat('haha', 1), 'haha')
console.log(repeat('hehehe', 0), '')
// End of tests */
