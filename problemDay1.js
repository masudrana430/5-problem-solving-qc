// Day 1 — Variables, Data Types & Operators
 
// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.


 
 
 
// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.


 
 
 
 
 
// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

 
 
 
 
 
 
// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

 
 
 
 
 
 
// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.


// Problem 1: Swap Two Variables
function swap(a, b) {
    [a, b] = [b, a];
    return { a, b };
}

console.log(swap(5, 10)); // { a: 10, b: 5 }
// Problem 2: Check Even or Odd
function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
// Problem 3: Find the Largest of Three Numbers
function largest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largest(3, 7, 5)); // 7

// Alternative using if-else:

function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
// Problem 4: Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(toFahrenheit(0));   // 32
console.log(toFahrenheit(100)); // 212
// Problem 5: Check Positive, Negative or Zero
function checkSign(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(checkSign(-5)); // negative
console.log(checkSign(0));  // zero
console.log(checkSign(8));  // positive