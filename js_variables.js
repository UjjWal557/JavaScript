//Use "var" when the variable's value needs to be reassigned
var x = 5; 
//Use "let" when the variable's value needs to be reassigned
let y = "Hello"; 
/*Use "const" when the variable's value doesn't 
need to be changed throughout the program*/
const z = 3.14; 

console.log(x);
console.log(y);
console.log(z);

// Demonstrating the use of let, var and const

var a1= 10;
console.log(a1); // Outputs: 10
var a1= 20; // No error, redeclaration allowed with var
console.log(a1); // Outputs: 20

let b1= 15;
console.log(b1); // 15
//let b1=23; // Error, 'let' does not allow redeclaration, but allows reassignment
b1=25; // No error, as reassignment is allowed
console.log(b1); // 25

const c1= 5.5;
console.log(c1); // 5.5

//const c1=7.7; // Error, 'const' does not allow redeclaration
//c1=8.8; // Error, 'const' does not allow reassignment


//Hoisting Behavior 

console.log(p); // undefined [due to hoisting] (output appears only when the variable is declared with var, if not declared, it gives Reference Error)
var p = 30;

console.log(q); // ReferenceError, as 'let' and 'const' are not hoisted in the same way
let q = 40;


/* Scope of let and var */

function check()
{
    var a = 10;
    let b = 15;
    if (true)
    {
        var a = 20; //updates the same variable
        let b = 1; // different variable than the above declared one
        console.log("Inside if block, a="+a); // a=20
        console.log(`Inside if block, b=${b}`); //b=1
    }
        console.log("Outside if block, a="+a); // a=20 
        console.log(`Outside if block, b=${b}`); //b=15
}

check();

/*
So, use "let" when you want to keep the variable value
limited to its own block. And use "var" if the variable's value always changes
But try to avoid using "var", better use "let"*/