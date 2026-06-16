// Day 8 — Error Handling & Advanced Patterns
 
// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.


function safeJsonParseJS(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

// Examples
console.log(safeJsonParseJS('{"a":1}')); 
// { a: 1 }

console.log(safeJsonParseJS("bad json")); 
// null



// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.


async function retryJS(fn, times) {
  let lastError;

  for (let i = 1; i <= times; i++) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i} failed`);
    }
  }

  throw lastError;
}

// Example Usage

let attempt = 0;

async function unstableFetch() {
  attempt++;

  if (attempt < 3) {
    throw new Error("Fetch failed");
  }

  return "Data fetched successfully";
}

async function run() {
  try {
    const result = await retryJS(unstableFetch, 3);
    console.log(result);
  } catch (error) {
    console.log("All attempts failed:", error.message);
  }
}

run();

// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

function myPromiseAllJS(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// Example
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

myPromiseAllJS([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

// Output: [10, 20, 30]

const p4 = Promise.resolve("A");
const p5 = Promise.reject("Something went wrong");
const p6 = Promise.resolve("C");

myPromiseAllJS([p4, p5, p6])
  .then((results) => console.log(results))
  .catch((error) => console.log("Rejected:", error));

// Output: Rejected: Something went wrong


// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

function flattenObjectJS(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObjectJS(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// Example
const inputJS = {
  a: {
    b: {
      c: 1
    }
  }
};

console.log(flattenObjectJS(inputJS));

// Output: { 'a.b.c': 1 }