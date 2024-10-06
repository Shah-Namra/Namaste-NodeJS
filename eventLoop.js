
const fs = require("fs");

const a =100;
setImmediate(()=>{ console.log("Immediate 1")} );

fs.readFile("file.txt","utf8",(err,data)=>{ 
    console.log("File Data: ",data); 
}  );

setTimeout(()=>{
    console.log("Timeout 1")
} ,0); 

function printA(){ 
    console.log("A = ",a); 
}

printA();

console.log("Last Line of the code");

/* 
Output:
A =  100
Last Line of the code
--- Time experience:  0.000ms---
Timeout 1
Immediate 1
File Data:  This is Namaste NodeJs

*/