// Write a function that takes two arrays of integers and returns a new array with all the elements that are common to both arrays.

function mergeCommon(arr1, arr2) {
    const setOfCommons = new Set()
    arr1.forEach(num1 => {
        arr2.forEach(num2 => {
            if (num1 == num2) setOfCommons.add(num1)
        })
    })
    return Array.from(setOfCommons)
}

const numbers1 = [3, 43, 9, 234, 23, 98435, 2]
const numbers2 = [234, 32, 98, 238, 2, 849, 98435]

console.log(mergeCommon(numbers1, numbers2))