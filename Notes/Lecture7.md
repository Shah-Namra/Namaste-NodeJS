# Episode 07: sync, async and setTImeoutZero

## Synchronous

- Blocks the execution until the current operation is completed.
- Use cautiously as it blocks the main thread.

## Asynchronous

- Allows other operations to continue while waiting for tasks to complete.
- Prevents blocking of the event loop

- whenever API call, file read, `setTimeout` etc are executed, v8 engine uses the help of libuv to handle async tasks without blocking main thread

`require` runs in a synchronous manner

```
const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 12345;
var b = 6789;

// synchronous  function
// using this is not good because it will break the code, 
// and the code after this will be in a waiting to get executed before this code is executed
// try not use this 
// it will block the event loop until its succesfully executed
fs.readFileSync("./file.txt","utf8");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Data Fetched")
});

setTimeout(()=>{
    console.log("Printed in 5000ms")
}, 5000);

// async function
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File Data: ",data);
});

function multiply(x,y){
    const res = a*b;
    return res;
}
var c = multiply(a,b);
console.log("Multiply result = ",c);
```

> Avoid using synchronous methods in production code whenever possible
> 

`fs.readFileSync()` is an example of sync function which can be avoided 

https://nodejs.org/docs/latest/api/ ⇒ to see the various types of modules present in NodeJS

## Blocking

```jsx
const crypto = require("node:crypto");
//const crypto = require("crypto"); 
// both are same

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 -  Password Base Key Deravtive Function

// Synchronous Function - Will BLOCK THE MAIN THREAD - DON"T USE IT
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(() => {
  console.log("call me right now !!!! ");
}, 0); // it will only be called once call stack of main thread is empty

// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
```

- if a function has `Sync` at the end it means its a synchronous function
- pbkdf2 -  Password Base Key Deravtive Function
- Output :

```
Hello World
First Key is Generated
Multiplication result is :  22637556228
call me right now !!!!
Second Key is generated
``` 

## Understanding `setTimeout(() => {}, 0):`

```jsx
setTimeout(() => {
    console.log("Should be called instantly, ");
}, 0);
```

- only pushed when call stack is empty
- call stack should be empty before any asynchronous code, like the callback from `setTimeout(0)`, can run.
- Although `0` milliseconds is specified, it does **not** execute immediately.
- It’s an asynchronous function that pushes the callback to the **event queue**.
- Callback will execute **only after the call stack is cleared** (i.e., when all sync code has finished executing).

## in short

- Always prefer using async functions over sync function to keep the code non-blocking
- Event loop will always finish the current sync tasks before moving to async ones
- Async code uses the help of libuv, which manages the async I/O in nodejs