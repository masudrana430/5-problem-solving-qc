// Day 5 — Functions & Scope
 
// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

 
 
 
 
 
 
// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

 
 
 
 
 
 
// Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.

 
 
 
 
 
 
// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.



// Problem 21
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Problem 22
function fibonacci(n) {
    if (n <= 1) return n;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Problem 23
function makeCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        }
    };
}

// Problem 24
function curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        };
    };
}

// Tests
console.log(factorial(5)); // 120
console.log(fibonacci(6)); // 8

const counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

const add = curry((a, b) => a + b);
console.log(add(2)(3)); // 5