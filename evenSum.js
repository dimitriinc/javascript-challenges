// Write a function that takes an array of integers and returns the sum of all the even numbers in the array.

function evenAdder(integers) {
    const sum = integers
        .filter(int => int % 2 === 0)
        .reduce((acc, int) => acc += int)
    return sum
}

const integers = [3, 6, 7, 2, 9, 6, 8, 1, 3]
console.log(evenAdder(integers))