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