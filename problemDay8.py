# Day 8 — Error Handling & Advanced Patterns
 
# Problem 36: Safe JSON Parse  [Easy]
# Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
# Example:
# safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
# Hint: Use try/catch inside the function.

import json

def safe_json_parse(s):
    try:
        return json.loads(s)
    except json.JSONDecodeError:
        return None


print(safe_json_parse('{"a": 1}'))   # {'a': 1}
print(safe_json_parse('bad json'))   # None


# Problem 37: Retry a Promise  [Medium]
# Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
# Example:
# await retry(unstableFetch, 3);// Tries up to 3 times before failing
# Hint: Use a loop with try/catch; only throw after all retries are exhausted.

import asyncio

async def retry(fn, times):
    last_error = None

    for attempt in range(1, times + 1):
        try:
            return await fn()
        except Exception as error:
            last_error = error
            print(f"Attempt {attempt} failed")

    raise last_error

# Example Usage
import asyncio

attempt = 0

async def unstable_fetch():
    global attempt
    attempt += 1

    if attempt < 3:
        raise Exception("Fetch failed")

    return "Data fetched successfully"


async def main():
    try:
        result = await retry(unstable_fetch, 3)
        print(result)
    except Exception as error:
        print("All attempts failed:", error)


asyncio.run(main())


