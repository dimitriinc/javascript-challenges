// Write a function that takes an array of integers and returns a new array with all the duplicate numbers removed.

function removeDuplicates(numbers) {
    const noDuplicatesArray = Array.from(new Set(numbers))
    console.log(noDuplicatesArray)
}

const numbers = [32, 2, 32, 2, 8, 99, 99]
removeDuplicates(numbers)