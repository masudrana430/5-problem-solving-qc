// Day 2 — Strings & String Methods
 
// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

 
 
 
 
 
 
// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

 
 
 
 
 
 
// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

 
 
 
 
 
 
// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

 
 
 
 
 
 
// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.


Problem 1: Swap Two Variables
function swap(a, b) {
    [a, b] = [b, a];
    return { a, b };
}

console.log(swap(5, 10)); // { a: 10, b: 5 }
Problem 2: Check Even or Odd
function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
Problem 3: Find the Largest of Three Numbers
function largest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largest(3, 7, 5)); // 7

Alternative using if-else:

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