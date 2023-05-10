// Write a function that takes an array of strings and returns the longest string in the array.

function longestString(words) {
    return words.reduce((acc, word) => acc.length > word.length ? acc : word)
}

const words = ['battery', 'radiator', 'alternator', 'transmission', 'clutch', 'engine', 'tranSmiSSion']

console.log(longestString(words))