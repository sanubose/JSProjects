//Frequency = (lastIndex - firstIndex + 1)

function firstOccurence(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            result = mid;
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}

function lastOccurence(arr, target) {
    let start = 0, end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            result = mid;
            start = mid + 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}

function frequencyOfElement(arr, target) {
    let first = firstOccurence(arr, target);
    let last = lastOccurence(arr, target);

    if (first === -1) {
        return 0; // element not found
    }

    return last - first + 1;
}


console.log(frequencyOfElement([1, 2, 3, 4, 4, 4], 4));// Output:3
console.log(lastOccurence([1, 2, 3, 4, 4, 4], 4));// Output:5
console.log(firstOccurence([1, 2, 3, 4, 4, 4], 4));// Output:3

