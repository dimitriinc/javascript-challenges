// Write a function that takes an array of integers and returns the second smallest number in the array.

function secondSmallestInteger(integers) {
    const smallest = integers.reduce((acc, int) => acc > int ? int : acc)
    console.log(smallest)
    const secondSmallest = integers.reduce((acc, int) => acc > int && int !== smallest ? int : acc)
    console.log(secondSmallest)
} 

const integers = [23, 3, 839, 2, 43, 222, 1, 3, 83, -3, -32]

secondSmallestInteger(integers)