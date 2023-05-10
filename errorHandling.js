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