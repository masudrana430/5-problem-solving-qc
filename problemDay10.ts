// Day 10 — Algorithms & Problem Solving II
 
// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.
function wordCountTS(sentence: string): Record<string, number> {
  const words: string[] = sentence.split(" ");
  const count: Record<string, number> = {};

  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  return count;
}

// Example
console.log(wordCountTS("the cat sat on the mat"));

// Output:
// { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }


// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

function longestWordTS(sentence: string): string {
  const words: string[] = sentence.split(" ");
  let longest: string = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// Example
console.log(longestWordTS("The quick brown fox"));
// Output: quick


// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

function rotateArrayTS(arr: number[], k: number): number[] {
  const n: number = arr.length;

  if (n === 0) return arr;

  k = k % n;

  const lastPart: number[] = arr.slice(n - k);
  const firstPart: number[] = arr.slice(0, n - k);

  return lastPart.concat(firstPart);
}

// Example
console.log(rotateArrayTS([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]

// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToIntTS(s: string): number {
  const roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total: number = 0;

  for (let i = 0; i < s.length; i++) {
    const current: number = roman[s[i]];
    const next: number | undefined = roman[s[i + 1]];

    if (next !== undefined && next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToIntTS("III"));   // 3
console.log(romanToIntTS("IX"));    // 9
console.log(romanToIntTS("LVIII")); // 58

// Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row.

function pascalRowTS(n: number): number[] {
  let row: number[] = [1];

  for (let i: number = 1; i <= n; i++) {
    const newRow: number[] = [1];

    for (let j: number = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}

console.log(pascalRowTS(0)); // [1]
console.log(pascalRowTS(3)); // [1, 3, 3, 1]
console.log(pascalRowTS(4)); // [1, 4, 6, 4, 1]

