require ("./xyz");
// const { calculateMultiply } = require("./Calculate/multiply");
// const {x, calculateSum} = require ("./Calculate/sum"); 
const { calculateMultiply, calculateSum } = require("./Calculate");
// another way to import
//import { calculateSum } from "./sum";

const data = require("./package.json");
var name = "Namaste NodeJS"

// console.log(name);
// console.log(this) // empty object   
// console.log(global);
console.log(globalThis === global);
//console.log(__dirname);


calculateSum(10, 20);
calculateMultiply(10, 20);

console.log("Hello World");

console.log(data);