// Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

function capitalizeWords(words) {
    const newWords = words.map(word => word[0].toUpperCase() + word.slice(1))
    console.log(newWords)
}

const words = ['kdsajlfk', 'dlksjflk', 'dslkfjlk', 'ldskjflks']
capitalizeWords(words)