// Day 4 — Objects & Loops
 
// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

 
 
 
 
 
 
// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

 
 
 
 
 
 
// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.

 
 
 
 
 
 
// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

 
 
 
 
 
 
// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.




// Problem 16
function countProperties(obj) {
    return Object.keys(obj).length;
}

// Problem 17
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Problem 18
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }

    return result;
}

// Problem 19
function invertObject(obj) {
    const result = {};

    for (let key in obj) {
        result[obj[key]] = key;
    }

    return result;
}

// Problem 20
function findDuplicateNames(arr) {
    const count = {};

    for (let item of arr) {
        count[item.name] = (count[item.name] || 0) + 1;
    }

    return Object.keys(count).filter(
        name => count[name] > 1
    );
}

// Tests
console.log(countProperties({ a: 1, b: 2, c: 3 }));
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(fizzBuzz(15));
console.log(invertObject({ a: 1, b: 2 }));

console.log(
    findDuplicateNames([
        { name: "Ali" },
        { name: "Sara" },
        { name: "Ali" }
    ])
);


