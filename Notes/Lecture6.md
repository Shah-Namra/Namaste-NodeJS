# Episode 06: libuv & Asynchronous I/O in Node.js

### Thread
- Smallest unit of execution within a process.
- Multiple threads can exist in a process (multi-threading).
- JavaScript is single-threaded (synchronous execution).

### Synchronous vs Asynchronous
- Synchronous: Tasks are executed one after another.
- Asynchronous: Tasks are handled independently (parallel execution).

## JavaScript Engine Execution
### Global Execution Context (GEC)
- Created when the JS engine starts executing code.
- All top-level code runs in GEC.

### Memory Creation Phase
- Variables and functions stored in memory, initialized as `undefined.`

### Code Execution Phase
- Code executed line-by-line.
- Function calls create a new Function Execution Context (FEC).

### Function Execution Context (FEC)
- Created when a function is called.
- Function parameters assigned values.
- After execution, FEC is popped off the call stack.

### Garbage Collection
- JS engine automatically frees memory of unused variables.

## Asynchronous Code Execution (libuv)
JavaScript alone is synchronous.

NodeJS allows asynchronous operations using libuv. 
- libuv interacts with the OS for async tasks. 
- libuv handles tasks like file I/O, timers, and network requests.

### Event Loop
- libuv registers async operations (like API calls, file reads, setTimeout).
- V8 engine continues executing synchronous code while libuv manages async tasks.

### In short:
1. Synchronous code executed in GEC.
2. When async code (e.g., API call) is encountered:
    - V8 signals libuv to handle the task.
    - libuv registers the callback and continues with other operations.
3. Event loop executes async tasks when synchronous code finishes.

- **NodeJS** = Asynchronous I/O + Non-blocking model.
- **libuv** = Handles async operations behind the scenes.
- **Event Loop** = Manages execution of asynchronous tasks