// Day 5 — Functions & Scope Problem 21: Factorial (Recursive) [Easy] Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n. Example: Input: 5 → Output: 120 (5×4×3×2×1)Input: 0 → Output: 1 Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).


function factorial(n) {
    // Base case
    if (n === 0) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


// Problem 22: Fibonacci Sequence [Easy] Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence. Example: Input: 6 → Output: 8 (0,1,1,2,3,5,8...) Hint: Try both iterative and recursive approaches.

function fibonacciJS(n) {
    if (n <= 1) {
        return n;
    }

    let first = 0;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        let next = first + second;
        first = second;
        second = next;
    }

    return second;
}

console.log(fibonacciJS(6)); // 8
console.log(fibonacciJS(0)); // 0
console.log(fibonacciJS(1)); // 1


function fibonacciRecursiveJS(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacciRecursiveJS(n - 1) + fibonacciRecursiveJS(n - 2);
}

console.log(fibonacciRecursiveJS(6)); // 8


// Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.

function makeCounterJS() {
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

const c = makeCounterJS();

c.increment();
c.increment();

console.log(c.getCount()); // 2

c.decrement();

console.log(c.getCount()); // 1



// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.

const curryJS = fn => a => b => fn(a, b);

const add = curryJS((a, b) => a + b);

console.log(add(2)(3)); // 5


// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.


function memoizeJS(fn) {
    const cache = {};

    return function(n) {
        if (n in cache) {
            console.log("From cache");
            return cache[n];
        }

        console.log("Computed");
        const result = fn(n);
        cache[n] = result;

        return result;
    };
}

const memoAdd = memoizeJS(n => n + 10);

console.log(memoAdd(5)); // Computed → 15
console.log(memoAdd(5)); // From cache → 15
console.log(memoAdd(7)); // Computed → 17
console.log(memoAdd(7)); // From cache → 17



