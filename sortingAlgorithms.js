function bubbleSort(array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const currentItem = array[i]
        let previousIndex = i - 1
        while (previousIndex >= 0 && array[previousIndex] > currentItem) {
            array[previousIndex + 1] = array[previousIndex] // Shift the previous item to the right, if it's larger than the current item
            previousIndex--
        }
        array[previousIndex + 1] = currentItem  // Insert the current item to the left of all the previous ones that are larger than it
    }
    return array
}

function quickSort(array) {
    if (array.length <= 1) return array
    const pivot = array[0]
    const left = []
    const right = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) left.push(array[i])
        else right.push(array[i])
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

const array = [2, 5, 2, 0, 8, 5, 1, 9, 6, 5, 2]
console.log(quickSort(array))