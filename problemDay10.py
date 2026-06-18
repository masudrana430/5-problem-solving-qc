# Day 10 — Algorithms & Problem Solving II
 
# Problem 46: Count Words in a Sentence  [Easy]
# Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
# Example:
# Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
# Hint: Split by spaces, then reduce into a frequency object.
def word_count_py(sentence):
    words = sentence.split(" ")
    count = {}

    for word in words:
        count[word] = count.get(word, 0) + 1

    return count


# Example
print(word_count_py("the cat sat on the mat"))

# Output:
# {'the': 2, 'cat': 1, 'sat': 1, 'on': 1, 'mat': 1}

# Problem 47: Longest Word in a Sentence  [Easy]
# Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
# Example:
# Input: 'The quick brown fox'Output: 'quick'
# Hint: Split the sentence and use reduce() to track the longest.

def longest_word_py(sentence):
    words = sentence.split(" ")
    longest = words[0]

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest


# Example
print(longest_word_py("The quick brown fox"))
# Output: quick

# Problem 48: Rotate an Array  [Medium]
# Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
# Example:
# Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
# Hint: Use slice and concat, or reverse the whole array then parts.

def rotate_array_py(arr, k):
    n = len(arr)

    if n == 0:
        return arr

    k = k % n

    last_part = arr[n - k:]
    first_part = arr[:n - k]

    return last_part + first_part


# Example
print(rotate_array_py([1, 2, 3, 4, 5], 2))
# Output: [4, 5, 1, 2, 3]

# Problem 49: Roman to Integer  [Medium]
# Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
# Example:
# Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
# Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

def roman_to_int_py(s):
    roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    total = 0

    for i in range(len(s)):
        current = roman[s[i]]
        next_value = roman[s[i + 1]] if i + 1 < len(s) else 0

        if next_value > current:
            total -= current
        else:
            total += current

    return total


print(roman_to_int_py("III"))    # 3
print(roman_to_int_py("IX"))     # 9
print(roman_to_int_py("LVIII"))  # 58

# Problem 50: Pascal's Triangle Row  [Medium]
# Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
# Example:
# Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
# Hint: Each element is the sum of the two elements above it from the previous row.

def pascal_row_py(n):
    row = [1]

    for i in range(1, n + 1):
        new_row = [1]

        for j in range(1, len(row)):
            new_row.append(row[j - 1] + row[j])

        new_row.append(1)
        row = new_row

    return row


print(pascal_row_py(0))  # [1]
print(pascal_row_py(3))  # [1, 3, 3, 1]
print(pascal_row_py(4))  # [1, 4, 6, 4, 1]

