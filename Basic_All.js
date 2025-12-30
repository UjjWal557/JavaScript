/*let x="7";
let z="4";
let y="Text";
let w= NaN;
let msg= `The number is ${x} and String is ${y}`;
console.log(msg);
//Exponent
console.log(x**3);
console.log(x+z);
console.log(x-z);
console.log(x*z);
console.log(x%z);
console.log(parseInt(x/z));//parseInt--> takes the integer value from the division
//JS converts string into number for -,*,/,%,** if possible, and for +, it performs string concatenation
//But if the string cannot be converted into the number it converts it to "NAN"
if(!isNaN(w))
    console.log("It's not NAN")
else
    console.log("It's NAN")
console.log(typeof(w))*/

/*const userName = require("readline-sync").question('May I know your name? ');
console.log(`Welcome, ${userName}!`);*/
/*var x=5;
console.log(typeof x);
console.log("The value of x is: "+x);
console.log(`The same value of x is: ${x}`);*/

/*function greet(name) {
  console.log("Hello", name);
}

function takeName(recall) {
  const name = "Ujjwal";
  recall(name);
}

takeName(greet);
setTimeout(function() {
    console.log("This is a callback function!");
}, 5000);
*/


let x=["abc","def","gh"];
//console.log(x.filter(i=>i.length>2));
console.log(x.some(i=>i.length<3));
let z= x.map(v => v.toUpperCase());
console.log(z);
console.log(x.pop());
console.log(x.shift());
console.log(x.splice(0,1));
console.log(x.pop());
console.log(x.pop());

/*let x=[2,3,4,5];
//let res= x.reduce((i,j)=>i+j);
let res= x.reduce((i,j)=>i+j**2,0);
console.log(res);*/