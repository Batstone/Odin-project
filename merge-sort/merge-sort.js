
const test1 = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort (arr) {

    // Return original aray if only one element is present
    if (arr.length < 2) {
        return arr
    }

    // Split array in half, Math.floor rounds down
    const middleIndex = Math.floor(arr.length / 2);

    // Slice array from beginning up until the middle index
    const beginning = mergeSort(arr.slice(0, middleIndex));
    // Slice the end of the array
    const end = mergeSort(arr.slice(middleIndex));

    return mergeArrays(beginning, end);
}

function mergeArrays(beginning, end) {

    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare each element and merge them into the resultArray
    while (leftIndex < beginning.length && rightIndex < end.length) {
        if (beginning[leftIndex] < end[rightIndex]) {
            resultArray.push(beginning[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(end[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements (if any)
    return resultArray.concat(beginning.slice(leftIndex)).concat(end.slice(rightIndex));
}

const sortedArray = mergeSort(test1);
