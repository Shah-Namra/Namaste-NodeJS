# Episode 3: Let's write code

### Node REPL 
- REPL = Read, Evaluate, Print, Loop

## Global Objects
- Browser: `window` => global object
- Node.js: `global` => superpower from Node.js
- - global is not part of V8; Node.js gives access to it.
- `this` in Browser => window
- `this` in Node.js => empty object

### Accessing Global Object
- Browser: `window`, `this,` `self`, `frames` => global object
- Web Workers: `self` => global object
- Because of this OpenJs Foundation standardized this introducing `globalThis` as a universal way to reference the global object across all JS environments 