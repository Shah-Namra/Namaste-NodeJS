console.log("Hi!!");

var a= 123;
var b= 567;

setTimeout(() => {
    console.log("Should be called instantly, ");
}, 0);// only pushed when call stack is empty
// call stack should be empty before any asynchronous code, like the callback from setTimeout(0), can run.

setTimeout(() => {
    console.log("called after 3sec");
}, 3000);

function multiplyFn(x, y){
    const res = a*b;
    return res;
}
var c = multiplyFn(a, b);
console.log("multiplication of ",a+"  and ",b+ "is :",c);