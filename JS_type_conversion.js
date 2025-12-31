/*Arithmetic Operators
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Remainder (%) 
Exponentiation (**)
*/

// Conversion wiht operators

let a= '5';
let b= 3;
console.log(`Output=${a + b}, Type=${typeof (a + b)}`); // Output=53, Type=string

//But for other arithmetic operators, JS converts string to number
console.log(`Output=${a - b}, Type=${typeof (a - b)}`); // Output=2, Type=number
console.log(`Output=${a ** b}, Type=${typeof (a ** b)}`); // Output=125, Type=number


/* But if the string cannot be converted to number, 
 i.e, the string is not a valid number, the result will be 'NaN' */

let x= 'hello';
console.log(`Output=${x - b}, Type=${typeof (x - b)}`); // Output=NaN, Type=number
console.log(`Output=${x ** b}, Type=${typeof (x ** b)}`); // Output=NaN, Type=number


// [ If both the operands are strings, '+' operator concatenates them, else it returns 'NaN']


// Explicit conversion

// String to Number
let c = '123';
let d = Number(c);
console.log(`Output=${d}, Type=${typeof d}`); // Output=123, Type=number

// Number to String
let e = 125.25;
let f = String(e);
console.log(`Output=${f}, Type=${typeof f}`); // Output=125.25, Type=string

// Boolean to Number
let g = true;
let h = Number(g);
console.log(`Output=${h}, Type=${typeof h}`); // Output=1, Type=number [ if false, output=0 ]

//Boolean to String
let i = false;
let j = String(i);
console.log(`Output=${j}, Type=${typeof j}`); // Output=false, Type=string

// Number to Boolean
let k = 0;
let l = Boolean(k);
console.log(`Output=${l}, Type=${typeof l}`); // Output=false, Type=boolean [ if non-zero number, output=true ]

// String to Boolean    
let m = '';
let n = Boolean(m);
console.log(`Output=${n}, Type=${typeof n}`); // Output=false, Type=boolean [ if non-empty string, output=true ]