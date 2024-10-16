# Episode 4: module.export & require
 

In Node.js, modules allow you to separate your code into individual files and make the code easier to maintain. This guide explains how to use **CommonJS** modules and **ES Modules** (introduced in ES6) for exporting and importing functionality across different files.

## CommonJS Modules

CommonJS modules use `require` for importing and `module.exports` for exporting variables and functions.

### Example:

```js
// app.js
require("./xyz.js");
const calculateSum = require("./sum.js");

calculateSum(10, 20);
console.log(globalThis === global); // true
```

```
// xyz.js
console.log("First line of code");

// sum.js
function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
}
module.exports = calculateSum;

```
### Output
```
First line of code
30
true
```

### Exporting Multiple Variables and Functions
You can export multiple variables and functions by wrapping them in an object.

```
// app.js
require("./xyz.js");
const { x, calculateSum } = require("./sum.js");

console.log(globalThis === global); // true
calculateSum(10, 20);
console.log(x);

// sum.js
var x = "Hello World";  

function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
}

module.exports = { x, calculateSum };
```

### Output
First line of code
30
Hello World

## ES Modules (ESM)
- In ES Modules, `import` and `export` are used instead of `require` and `module.exports.` 
- ES Modules are asynchronous and enforce strict mode by default.

### Example: 
```
// app.js
import calculateSum from "./sum.js";

calculateSum(10, 20);

// sum.js
export function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
}

```
### Setup for ES Modules:
To enable ES modules in Node.js, you need to specify `"type": "module"` in your `package.json` file:


## Key Differences Between CommonJS and ES Modules:
1. Synchronous vs. Asynchronous:
- CommonJS modules are synchronous.
- ES modules are asynchronous.

2. Strict Mode:
- CommonJS modules operate in non-strict mode.
- ES modules always run in strict mode, enforcing better error handling.

### Export Patterns in CommonJS
You can export multiple variables and functions using different patterns. Here’s one common way:
```
module.exports.x = x;
module.exports.calculateSum = calculateSum;
// Or, more commonly:
module.exports = { x, calculateSum };
```

## Nested Modules Example:
Organize your project into folders to group related modules together. For example:
```
// calculate/index.js
const sum = require('./sum');
const multiply = require('./multiply');

module.exports = { sum, multiply };
Now you can import both functions at once:

// app.js
const { sum, multiply } = require('./calculate');
sum(10, 20);
multiply(10, 2);
```
## Loading JSON Files
In Node.js, you can load a .json file using require:
```
const data = require('./data.json');
console.log(data);
Built-in Modules
Node.js includes several built-in modules, such as util. You can import them like this:

const util = require('node:util');
```