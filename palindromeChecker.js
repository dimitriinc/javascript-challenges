// Palindrome checker: Write a function that takes a string as input and returns true if it's a palindrome and false otherwise.

function isPalindorme(string) {
    const stringReverse = string.toLowerCase().split('').reverse().join('')
    return string.toLowerCase() === stringReverse
}

console.log(isPalindorme('Paraparap'))
console.log(isPalindorme('Adanac'))