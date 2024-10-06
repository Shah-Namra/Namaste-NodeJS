
const fs = require("fs");


setImmediate(() => console.log("setImmediate")); // 1

setTimeout(() => console.log("Timer expired"), 0); // 2

Promise.resolve(() => console.log("Promise")); // 3

fs.readFile("./file.txt", "utf8", () => { // 4
    setTimeout(() => console.log("2nd timer"), 0); // 4.1
    process.nextTick(() => console.log("2nd nextTick")); // 4.2
    setImmediate(() => console.log("2nd setImmediate")); // 4.3
    console.log("File Reading CB"); // 4.4
});

process.nextTick(() => console.log("nextTick")); // 5

console.log("Last line of the file."); // 6

/*
OUTPUT: 
Last line of the file.
nextTick
Promise
Timer expired
setImmediate
File Reading C
2nd nextTick.
2nd setImmediate
2nd timer because of 0 delay

*/