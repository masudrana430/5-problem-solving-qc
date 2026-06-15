// Problem 31: Debounce Function [Medium] Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called. Example: const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms Hint: Use clearTimeout and setTimeout.


function debounceJS(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Example
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounceJS(search, 300);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");

// Only this one runs after 300ms:
// Searching for: react


// Problem 32: Throttle Function [Medium] Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds. Example: const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll Hint: Track the last call time with Date.now().

function throttleJS(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example
function onScroll() {
  console.log("Scroll event fired");
}

const throttledScroll = throttleJS(onScroll, 200);

// Example calls
throttledScroll();
throttledScroll();
throttledScroll();

// It will run at most once every 200ms


// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

function deepCloneJS(obj) {
  // If obj is null or not an object, return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // If obj is an array, clone each item
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneJS(item));
  }

  // If obj is a plain object, clone each key-value pair
  const clonedObj = {};

  for (let key in obj) {
    clonedObj[key] = deepCloneJS(obj[key]);
  }

  return clonedObj;
}

// Example
const a = {
  x: {
    y: 1
  }
};

const b = deepCloneJS(a);

b.x.y = 99;

console.log(a.x.y); // 1
console.log(b.x.y); // 99


// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

class EventEmitterJS {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((listener) => {
      listener(...args);
    });
  }

  off(event, listener) {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter(
      (savedListener) => savedListener !== listener
    );
  }
}

// Example
const emitter = new EventEmitterJS();

function greet(name) {
  console.log("Hello " + name);
}

emitter.on("greet", greet);

emitter.emit("greet", "Sara"); // Hello Sara

emitter.off("greet", greet);

emitter.emit("greet", "Sara"); // Nothing happens


// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.

function myMapJS(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const mappedValue = callback(arr[i], i, arr);
    result.push(mappedValue);
  }

  return result;
}

// Example
const numbers = [1, 2, 3];

const doubled = myMapJS(numbers, function (x) {
  return x * 2;
});

console.log(doubled); // [2, 4, 6]

