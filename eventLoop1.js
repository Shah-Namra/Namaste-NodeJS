const a = 100; // 1

setImmediate(() => console.log("setImmediate")); //2 

Promise.resolve(() => console.log("Promise")); // 3

fs.readFile("./file.txt", "utf8", () => { // 4
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0); // 5

process.nextTick(() => console.log("process.nextTick")); // 6

function printA() { // 7
    console.log("a=", a);
}

printA();   // 8
console.log("Last line of the file.");  // 9

/* 
output : 
a = 100
last line of the file
process.nextTick
Promise
Timer expired   
setImmediate
File Reading CB
*/