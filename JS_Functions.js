/*
Syntax: 
function functionName(parameters) {
    // function body
}
*/

//Example
function EvenOdd(number)
{
    let res= parseInt(number/2);
    if (res*2==number)
    {
        console.log(number+" is Even Number");
    }
    else
    {
        console.log(number+" is Odd Number");
    }
}

let obj = require("readline-sync");
let number= obj.questionInt("Enter a number:");
EvenOdd(number);

//------------------------------------------------------
//Anonymous Function 
// [ Here, the variable is considered as the function name ]

// anonymousFunctionName(); // Reference Error 
let anonymousFunctionName= function(){console.log("This is an Anonymous Function");};
anonymousFunctionName(); // call the function after defining it

//-------------------------------------------------

//Uses of Anonymous Function

/* Callback Functions*/
setTimeout(function(){console.log("Message displays after 7 seconds.");},7000);

/* IIFE - Immediately Invoked Function Expression */
(function(){
    console.log("This is IIFE - Immediately Invoked Function Expression");
})();

// Also used in sorting an array
let arr=[55,100,5,75,25,10];
arr.sort(function(a,b){
    return a-b;
}); // ascending order, for descending order use b-a
console.log("Sorted Array: "+arr); // Sorted Array: 5,10,25,55,75,100

//------------------------------------------------------
//Arrow Functions
// Syntax: 
// let functionName = (parameters) => { //function body }   

// Example:
// If there is only one parameter, we can skip the parentheses
 let diff = (a,b) => {
    return a-b;
 };
 console.log("Result="+ diff(10,5)); // Result=5

 // for array sorting
    let arr1=[55,100,5,75,25,10];
    arr1.sort((a,b) => a-b); 
    console.log("Sorted Array using Arrow Function: "+arr1); // Sorted Array using Arrow Function: 5,10,25,55,75,100

//------------------------------------------------------

//Function with Default Parameters
    function greet(name="Guest"){
        console.log("Hello, "+name+"!");
    }
    greet("Alice"); // Hello, Alice!
    greet(); // Hello, Guest!
 
