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

// Includes  --> It checks the presence of the array element and returns boolean value 
console.log(exp);
console.log(exp.includes(3)); // true
console.log(exp.includes(1)); // false

// Sort
let ex1 = ['i','e','a','u','o'];
let ex2 = [4,1,100,12,3,50,5,9.8];
console.log(ex1.sort()); // (5) ['a', 'e', 'i', 'o', 'u']
console.log(ex2.sort()); // (8) [1, 100, 12, 3, 4, 5, 50, 9.8]

/*
sort() methods works properly only for string array because it sorts the elements 
in Lexicographical order (or dictionary order), and for non-string elements, 
it converts them into string and then sorts them as for 100 and 3, in string '100'
and '3', '1' comes first than '3', so '100' is placed before '3'.
*/

/* To resolve this issue, we can use:
1. Compare Function
2. Arrow Function */

// Compare function:
function compare(a,b)
{
    return a-b;
}
console.log(ex2.sort(compare)); // (8) [1, 3, 4, 5, 9.8, 12, 50, 100]

/* Idea for Sorting:
Return Value                Task
    <0                  Put a before b
    >0                  Put a after b
    =0                  Keep order unchanged
*/

// Arrow Function: 
let ex = [4,1,100,12,3,50,5,9.8];
ex.sort((a,b)=>a-b);
console.log(ex);

// Split --> It is a String method that returns an array; arrays do not have split().
// Syntax: string.split(separator, limit);
let str = "Hello, It's a Sunny Day";
let split_array = str.split(" ");
console.log(split_array); // (5) ['Hello,', "It's", 'a', 'Sunny', 'Day']
let split_array1 = str.split(",");
console.log(split_array1); // (2) ['Hello', " It's a Sunny Day"]
let split_char = str.split(""); // Splits the string into single characters
console.log(split_char); // (23) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'I', 't', "'", 's', ' ', 'a', ' ', 'S', 'u', 'n', 'n', 'y', ' ', 'D', 'a', 'y']

// Join: It converts an array into a string
// Syntax: array.join(separator);

console.log(split_array); // (5) ['Hello,', "It's", 'a', 'Sunny', 'Day']
let array_join = split_array.join(" ");
console.log(array_join); // Hello, It's a Sunny Day
console.log(typeof array_join); // string

// Split and join together
let str_exp =  "Hello World";
console.log(str_exp.split(' ').join('-')); // Hello-World
// Reverse: It reverses an array, not a string
console.log(split_array); // (5) ['Hello,', "It's", 'a', 'Sunny', 'Day']
console.log(split_array.reverse()); // (5) ['Day', 'Sunny', 'a', "It's", 'Hello,']

let new_arr = [2,5,7,8,1,0];
console.log(new_arr.reverse()); // (6) [0, 1, 8, 7, 5, 2]

//console.log(str_exp.reverse()); // doesn't work as str_exp is not an array

// to reverse a string
let newStr = str_exp.split("").reverse().join("");
console.log(newStr); // dlroW olleH

// Example For Palindrome
function check(str_exp)
{
    let reversedStr= str_exp.split('').reverse().join('');
    return (str_exp==reversedStr)?true:false;
}
check("madam")?console.log("Palindrome"):console.log("Not a Palindrome"); // Palindrome