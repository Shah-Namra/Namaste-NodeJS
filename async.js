const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 12345;
var b = 6789;

// synchronous  function
// using this is not good because it will break the code, and the code after this will be in a waiting to get executed before this code is executed
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