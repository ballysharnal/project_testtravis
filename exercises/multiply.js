'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(num1, num2){
    let result = 0
    if (num1 > 0) {
        while (num1 > 0){
            result = result + num2
            num1--
        }
    }else if (num1 < 0 && num2 > 0){
        while (num1 < 0){
            result = result - num2
            num1++
            
        }
    }else if (num1 < 0 && num2 < 0){
        while (num1 < 0){
            result = result - num2
            num1++
        }
    }
    return result
}
//* Begin of tests
const assert = require('assert')

console.log(typeof multiply, 'function')
console.log(multiply.length, 2)
console.log(multiply.toString().includes('Math.imul'), false)
console.log(multiply.toString().includes('*'), false)
console.log(multiply.toString().includes('/'), false)
console.log(multiply(34, 78), 2652)
console.log(multiply(123, 0), 0)
console.log(multiply(0, -230), 0)
console.log(multiply(0, 0), 0)
console.log(multiply(123, -22), -2706)
console.log(multiply(-22, 123), -2706)
console.log(multiply(-22, -123), 2706)
// End of tests */
