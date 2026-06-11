// Problem Day 3
// Day 3 — Arrays & Array Methods
 
// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

 
 
 
 
// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

 
 
 
 
// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

 
 

 
// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().




// Problem 11
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Problem 12
function findMax(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

// Problem 13
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Problem 14
function flattenArray(arr) {
    return arr.flat();
}

// Problem 15
function chunkArray(arr, size) {
    const result = [];
    let index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }

    return result;
}

// Test Cases
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(findMax([3, 1, 7, 2, 9]));
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log(flattenArray([1, [2, 3], [4, 5]]));
console.log(chunkArray([1, 2, 3, 4, 5], 2));