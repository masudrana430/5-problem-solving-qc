// Day 8 — Error Handling & Advanced Patterns
 
// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParseTS(str: string): unknown | null {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

// Examples
console.log(safeJsonParseTS('{"a":1}'));
// { a: 1 }

console.log(safeJsonParseTS("bad json"));
// null



// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.


async function retryTS<T>(
  fn: () => Promise<T>,
  times: number
): Promise<T> {
  let lastError: unknown;

  for (let i = 1; i <= times; i++) {
    try {
      const result: T = await fn();
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i} failed`);
    }
  }

  throw lastError;
}

// Example usage

async function ExretryTS<T>(
  fn: () => Promise<T>,
  times: number
): Promise<T> {
  let lastError: unknown;

  for (let i = 1; i <= times; i++) {
    try {
      const result: T = await fn();
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i} failed`);
    }
  }

  throw lastError;
}



// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

