'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

function get(bla){
  return sourceObject[bla]
}


// Your code :

//* Begin of tests
//const assert = require('assert')

console.log(typeof get, 'function')
console.log(get('num'), 42)
console.log(get('bool'), true)
console.log(get('str'), 'some text')
console.log(get('log'), console.log)
console.log(get('noexist'), undefined)
// End of tests */
