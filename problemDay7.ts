// Problem 31: Debounce Function [Medium] Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called. Example: const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms Hint: Use clearTimeout and setTimeout.


function debounceTS<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>): void {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Example
function searchTS(query: string): void {
  console.log("Searching for:", query);
}

const debouncedSearchTS = debounceTS(searchTS, 300);

debouncedSearchTS("r");
debouncedSearchTS("re");
debouncedSearchTS("rea");
debouncedSearchTS("react");

// Only this one runs after 300ms:
// Searching for: react



// Problem 32: Throttle Function [Medium] Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds. Example: const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll Hint: Track the last call time with Date.now().
function throttleTS<T extends (...args: any[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastCall: number = 0;

  return function (...args: Parameters<T>): void {
    const now: number = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example
function onScrollTS(): void {
  console.log("Scroll event fired");
}

const throttledScrollTS = throttleTS(onScrollTS, 200);

throttledScrollTS();
throttledScrollTS();
throttledScrollTS();

// It will run at most once every 200ms


// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

function deepCloneTS<T>(obj: T): T {
  // If obj is null or not an object, return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // If obj is an array, clone each item
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneTS(item)) as T;
  }

  // If obj is a plain object, clone each key-value pair
  const clonedObj = {} as T;

  for (const key in obj) {
    clonedObj[key] = deepCloneTS(obj[key]);
  }

  return clonedObj;
}

// Example
const original = {
  x: {
    y: 1
  }
};

const copied = deepCloneTS(original);

copied.x.y = 99;

console.log(original.x.y); // 1
console.log(copied.x.y);   // 99

// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

type Listener = (...args: any[]) => void;

class EventEmitterTS {
  private events: Record<string, Listener[]> = {};

  on(event: string, listener: Listener): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event: string, ...args: any[]): void {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((listener) => {
      listener(...args);
    });
  }

  off(event: string, listener: Listener): void {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter(
      (savedListener) => savedListener !== listener
    );
  }
}

// Example
const emitterTS = new EventEmitterTS();

const greetTS = (name: string): void => {
  console.log("Hello " + name);
};

emitterTS.on("greet", greetTS);

emitterTS.emit("greet", "Sara"); // Hello Sara

emitterTS.off("greet", greetTS);

emitterTS.emit("greet", "Sara"); // Nothing happens


// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.

function myMapTS<T, U>(
  arr: T[],
  callback: (item: T, index: number, array: T[]) => U
): U[] {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    const mappedValue: U = callback(arr[i], i, arr);
    result.push(mappedValue);
  }

  return result;
}

// Example
const numbersTS: number[] = [1, 2, 3];

const doubledTS = myMapTS(numbersTS, function (x: number): number {
  return x * 2;
});

console.log(doubledTS); // [2, 4, 6]

