# Lecture 4 Notes
## Node.js Modules and IIFE

## IIFE (Immediately Invoked Function Expression)

- **Definition**: A function that runs immediately after it's defined.
- **Purpose**: Encapsulates module code, keeping it private and isolated.
- **Syntax**:
```
  (function () {
      // All module code runs inside here
  })(); // IIFE
```
### Private Variables and Functions
- **Mechanism**: IIFE and the module system (`require`/`module.exports`) create their own scope, keeping variables and functions private unless explicitly exported.

### Module Wrapping
- Both require and module.exports are passed as parameters to the module function:
```function(module, require) {
    console.log("HEHE");
    function calculateMultiply(a, b) {
        console.log(a * b);
    }
    module.exports = { calculateMultiply };
}();
```
- Node.js automatically wraps each module in a function, enabling the use of require and module without explicit arguments.

### How require Works: 5-Step Mechanism
1. Resolving the Module: Checks the source of the module (node modules, core modules, files, etc.).
2. Loading the Module: Loads file content based on its type (JS, JSON, etc.).
3. Wrapping Inside an IIFE: Node.js wraps the code in an IIFE, allowing the use of require and module.exports.
4. Code Evaluation: Executes the module and sets module.exports.
5. Caching: Modules are cached after the first load to improve performance and prevent multiple executions.

### Understanding setTimeout
- Source: Refer to Node.js Timers Implementation for details on how setTimeout works behind the scenes.

### Key Points:

Modules are wrapped in an IIFE upon requiring.
Caching improves performance by reusing loaded modules.






