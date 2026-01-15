let arr = ['a','b','c'];
// Push
arr.push('d','e');
console.log(arr); // (5) ['a', 'b', 'c', 'd', 'e']
arr.push(1, [2,3,4]);
console.log(arr); // (7) ['a', 'b', 'c', 'd', 'e', 1, Array(3)]

// To prevent the previous output, use concat or spread(...) operator
arr1 = ['a','b','c','d'];
arr1.push('e', ...['f','g','h']);
console.log(arr1); // (8) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
arr1 = arr1.concat([1,2,3]);
console.log(arr1); // (11) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 1, 2, 3]

// Comparison:
let arr2 = ['a','b','c'];
let a = arr2;
arr2 = arr2.concat(3);
console.log(a, arr2); // (3) ['a', 'b', 'c']    (4) ['a', 'b', 'c', 3] --> concat doesn't updates its copy


let arr3 = ['a','b','c'];
let b = arr3;
console.log(b); // (3) ['a', 'b', 'c']
arr3.push('new');
console.log(b, arr3); // (4) ['a', 'b', 'c', 'new']    (4) ['a', 'b', 'c', 'new']  --> push updates the shallow copy too

// Pop
console.log(arr); // (7) ['a', 'b', 'c', 'd', 'e', 1, Array(3)]
console.log(arr.pop()); // (3) [2, 3, 4]
console.log(arr); // (6) ['a', 'b', 'c', 'd', 'e', 1]
console.log(arr.pop('c')); // 1 --> pop just removes the last element and takes no argument or ignores the argument passed 

//{ If an array is empty and pop is used on it, the pop method will return undefined }
let ar=[]; // empty array
console.log(ar.pop()); // undefined

// Shift --> It removes the first element
console.log(arr);
console.log(arr.shift()); // a

// Splice --> It removes, adds, replaces the element
// syntax: array_name.splice(starting index, number of elements, element1, element2,...);

//remove elements 
let x = ['a','b','c'];
console.log(x.splice(-2,2)); // (2) ['b', 'c'] --> removes 2 element from index -2
console.log(x); // (1) ['a']

// add elements
x.splice(1,0,'e','f','g'); // remove 0 element, and add the given elements
console.log(x); // (4) ['a', 'e', 'f', 'g']

// replace
x.splice(2,3,'i','o','u'); //--> from index 2, replace given elements, 'u' is inserted as no element is available to replace
console.log(x); // (5) ['a', 'e', 'i', 'o', 'u']

// Slice --> It return a new array(sub array) 
// syntax : array.slice(start, end)

console.log(x); // (5) ['a', 'e', 'i', 'o', 'u']
let Arr = x.slice(-3,3); // takes element of index -3
console.log(Arr); // (1) ['i']

// Other Methods
// Map
console.log(x); // (5) ['a', 'e', 'i', 'o', 'u']
let y = x.map(val => val.toUpperCase());  // --> if the array consists numeric element, the map method will return TypeError
console.log(y); // (5) ['A', 'E', 'I', 'O', 'U']

// Filter

let arr_exp = ['abc', 'bcd', 'ef', 'z', 'wxyz'];
let result = arr_exp.filter(val => val.length>2);
console.log(result); // (3) ['abc', 'bcd', 'wxyz']

// Reduce --> It is used to reduce the array into a single value
// Syntax: array.reduce((accumulator, current_value)=>new_value, initial_value);

// always provide the initial value according to the requirement 

let exp = [2,3,4,5];
let res = exp.reduce((i,j)=> i+j**2,0); // --> sum of the square of the elements of the array
let res1 = exp.reduce((i,j)=> i+j,0); // --> Sum of the elements
console.log(res); // 54
console.log(res1); // 14

// Some --> It is used to check if some array passes a test. It returns a boolean value.

console.log(arr_exp); // (5) ['abc', 'bcd', 'ef', 'z', 'wxyz']
let res2 = arr_exp.some(i => i.length<3);
console.log(res2); // true --> as at least one element satisfies the condition

// Includes