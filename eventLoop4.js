
const fs = require("fs");

setImmediate(() => console.log("setImmediate")); // 1 

setTimeout(() => console.log("Timer expired"), 0); // 2

Promise.resolve("Promise").then(console.log); // 3

fs.readFile("./file.txt", "utf8", () => { // 4
  console.log("File Reading CB"); 
});
process.nextTick(() => {   // 5
  process.nextTick(() => console.log(" inner nextTick")); //5.1
  console.log("nextTick"); // 5.2
});

console.log("Last line of the file."); // 6

/* 
    OUTPUT: 
    Last line of the file.
    nextTick
    inner nextTick
    Promise
    Timer expired
    File Reading CB
    setImmediate
    

*/