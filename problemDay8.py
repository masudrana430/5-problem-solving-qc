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


# Problem 38: Implement Promise.all from Scratch  [Hard]
# Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
# Example:
# myPromiseAll([p1, p2, p3]).then(results => console.log(results));
# Hint: Track resolved count and results array; reject on first failure.

import asyncio

async def my_promise_all_py(tasks):
    results = [None] * len(tasks)

    async def run_task(task, index):
        result = await task
        results[index] = result

    running_tasks = []

    for index, task in enumerate(tasks):
        running_tasks.append(run_task(task, index))

    await asyncio.gather(*running_tasks)

    return results

# Example Usage
import asyncio

async def my_promise_all_py(tasks):
    results = [None] * len(tasks)

    async def run_task(task, index):
        result = await task
        results[index] = result

    running_tasks = []

    for index, task in enumerate(tasks):
        running_tasks.append(run_task(task, index))

    await asyncio.gather(*running_tasks)

    return results



# Python Rejection Example
import asyncio

async def success_task():
    await asyncio.sleep(0.5)
    return "Success"

async def failed_task():
    await asyncio.sleep(0.2)
    raise Exception("Something went wrong")

async def main():
    try:
        results = await my_promise_all_py([
            success_task(),
            failed_task()
        ])

        print(results)
    except Exception as error:
        print("Rejected:", error)

asyncio.run(main())

# Output: Rejected: Something went wrong


# Problem 39: Flatten Object (Deep)  [Medium]
# Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
# Example:
# Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
# Hint: Use recursion; build the key by joining parent keys with dots.

