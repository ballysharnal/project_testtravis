'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = line => line.slice(2)
const cutLast = line => line.substr(line.length - 1, 2)
const cutFirstLast = line => line.slice(2).substr(line.length - 1, 2)
//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
