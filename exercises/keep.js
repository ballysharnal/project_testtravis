'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = string => string[0] + string[1]
//* Begin of tests
const assert = require('assert')
console.log(keepFirst('Blauiruruib eczf'))
assert.fail('You must write your own tests')
// End of tests */
