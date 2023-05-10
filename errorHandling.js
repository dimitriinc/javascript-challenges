// Error handling: Write a function that takes two arguments, a number and a callback function. The function should check if the number is positive and, if it is, call the callback function with the number as an argument. If the number is negative, it should throw an error.

const callback = function(num) {
    console.log(`The number is positive:: ${num}`)
}

const checkNumber = function(num, callback) {
    if (num >= 0) callback(num)
    else throw new Error('The number is negative!')
}

try {
    checkNumber(-3, callback)
} catch(err) {
    console.log(err.message)
}