// Copy by reference / Shallow Copying
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr1); // (3) [1, 2, 3]
console.log(arr2); // (3) [1, 2, 3]

arr2.push(4);
console.log(arr1); // (4) [1, 2, 3, 4]
console.log(arr2); // (4) [1, 2, 3, 4]


/* Here, while using a shallow copy, modification on the copy array 
affects the original array too, because 'array' and'object' are
of reference types in JS, i.e, both arr1 and arr2 references the same
array in the memory. */

// Solution: Making a Deep Copy (No change in the original array)
// 1. Using the Spread Operator (...)
let arr = [1,2,3];
let arr3 =[...arr];
console.log(arr3); // (3) [1, 2, 3]
arr3.push(4,5);
console.log(arr); // (3) [1, 2, 3]
console.log(arr3); // (5) [1, 2, 3, 4, 5]

// 2. Using Array.from
// Syntax: let array_name = Array.from(original_array);
let arr4 = Array.from(arr);
arr4.pop();
console.log(arr); // (3) [1, 2, 3]
console.log(arr4); // (2) [1, 2]

// 3. Using concat:
// Syntax: let array = original_array.concat(); 
// arr.concat(7,8,9); --> can add extra elements too


//Spread Operator with Arrays
let array=[1,2,3,4];
console.log(...array); // 1 2 3 4

// let b = ...array; // SyntaxError 
// let b = (...array); // SyntaxError 
/* [ Spread operator should be used in []--> for array, {}--> for object 
or must be pass as an argument into a function definition / call ]  */

//But when copied
let ar2=[...array]; // to copy array, we must enclose it in []
console.log(ar2);// [ 1, 2, 3, 4 ]

//To merger two arrays
let ar3=[7,8,9]
let margedArr=[...array,...ar3];
console.log(margedArr); // [ 1, 2, 3, 4, 7, 8, 9 ]

//To add elements in between
let margedArr2=[...array,5,6,...ar3];
console.log(margedArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(array);// [ 1, 2, 3, 4 ] ,original array remains unchanged(spread operator prevents mutation)

// Spread Operator with Objects
let obj={a:1,b:2};
let obj1={...obj,b:3,c:3};
console.log(obj1); // { a: 1, b: 3, c: 3 } , b's value is updated --> the key stores the updated value

// Merging two objects
let obj2={b:3,d:4,e:5};
let mergedObj={...obj,...obj2};
console.log(mergedObj); // { a: 1, b: 3, d: 4, e: 5 } , b's value is updated

//Using for Math functions
let number=[-5,3,7,1,9,-2];

// without spread operator
console.log(Math.max(number)); // returns 'NaN' as Math.max expects a list of numbers (1,2,3,...), not an array
console.log(Math.min(number)); // returns 'NaN'

//with spread operator
console.log(Math.max(...number)); // 9, the array is converted into a list of arguments
console.log(Math.min(...number)); // -5

// Math function works well with list of numbers
console.log(Math.max(2,5,1,9,6,-1)); // 9
console.log(Math.min(2,5,1,9,6,-1)); // -1