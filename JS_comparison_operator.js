// Comaprison Operators
/* Loose Equality (==)
   Strict Equality (===)    
   Inequality (!=)
   Strict Inequality (!==)
   Greater than (>)
   Greater than or equal to (>=)
   Less than (<)
   Less than or equal to (<=)
*/

// In JS,strings are compared based om their ASCII values, from left to right
let str1 = 'apple';
let str2 = 'banana';
console.log(str1 < str2); // true, because 'a' (97) < 'b' (98)

// Type Coercion

let p = '10';
let q = 5;
console.log(p > q); // true, because '10' is converted to number 10

let r = 100;
let s = 50;
console.log(r > s); // true, both are numbers

let t = '20';
let u = '3';
console.log(t < u);// true, because as '2' comes prior to '3', that's why it perfoms 2<3, and that's actually true

// Strict Equality (===) does not perform type coercion
let v = '100';
let w = 100;
console.log(v === w); // false, as '===' checks value and type both

// Loose Equality (==) performs type coercion
let x = '200';
let y = 200;
console.log(x == y); // true, as '200' is converted to number 200

// Null and Undefined Comparison

console.log(null == undefined); // true, as both are considered equal in loose equality
console.log(null === undefined); // false, as types are different [ null is an object, undefined is itself a type]

// Null  in Mathematical Comparisons

// In mathematical comparisons [<,>,<=,>], null is treated as 0

console.log(null > 0); // false, as 0 is not greater than 0
console.log(null >= 0); // true, as 0 is equal to 0
console.log(null < 0); // false, as 0 is not less than 0
console.log(null<1); // true, as 0 is less than 1
console.log(null==0); // false, as null is not actually equal(converted) to 0
console.log(null <= 0); // true, as 0 is equal to 0
console.log(null != 0); // true, as null is not equal to 0
console.log(null !== 0); // true, as types are different
