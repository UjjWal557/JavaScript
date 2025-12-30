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