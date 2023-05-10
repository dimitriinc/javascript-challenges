// Write a function that takes a string as input and returns a new string with all the vowels removed.

function vowelsRemover(string) {
    if (!string instanceof String) return
    const vowels = 'aeiouAEIOU'
    const noVowelsString = string
        .split('')
        .filter(letter => !vowels.includes(letter))
        .join('')
    return noVowelsString
}

console.log(vowelsRemover('Kanakanak'))