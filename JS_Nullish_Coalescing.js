/* Used to handle 'undefined' and 'null' values. 
It helps to work with values like [undefined, null, 0, empty string ("") ]*/

// Syntax: let result = value ?? defaultValue;

// [ If value is neither null oir undefined, it returns the value ]
// [ If value is null or undefined, it returns the defaultValue ]

let a = null;
let b;
let c = "";
let d = 0;
let e = "hello";
console.log( a ?? "No Proper Value"); // Output: No Proper Value
console.log( b ?? "No Proper Value"); // Output: No Proper Value
console.log( c ?? "No Proper Value"); // Output: "" (empty string)
console.log( d ?? "No Proper Value"); // Output: 0
console.log( e ?? "No Proper Value"); // Output: hello

// Working with (||) OR operator instead of (??) Nullish Coalescing operator
// [ The OR operator considers all falsy values (null, undefined, 0, "", false) as false and returns the default value ]

console.log( a || "No Proper Value"); // Output: No Proper Value
console.log( b || "No Proper Value"); // Output: No Proper Value
console.log( c || "No Proper Value"); // Output: No Proper Value
console.log( d || "No Proper Value"); // Output: No Proper Value
console.log( e || "No Proper Value"); // Output: hello
