'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
function capitalize(truc){
    let machin = truc.charAt(0).toUpperCase()
    return machin + truc.slice(1).toLowerCase()
}

//* Begin of tests
//const assert = require('assert')

console.log(typeof capitalize, "function")
console.log(capitalize('str'), 'Str')
console.log(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
console.log(capitalize('STR'), 'Str')
console.log(capitalize('zapZAP'), 'Zapzap')
// End of tests */
