// Array Methods in JavaScript
let arr1=[1,2,3,4,5];
let arr2=["a","b","c","d","e"];
console.log(arr1.pop());
console.log(arr1);
let arr3= arr1.slice(1,3); // from index 1 to index 3 (3 not included)
console.log(arr3);
console.log(arr1.slice(3)); // from index 3 to end
console.log(arr1.slice(-2)); // last two elements
console.log(arr1.includes(3)); // true
console.log(arr1.includes(7)); // false
let numbers = [2,50,100,23,5,13.2,4];
console.log(numbers.sort()); // sorts in ascending order by default

//Using compare function
numbers.sort((a,b)=>a-b); // ascending order
console.log(numbers);

numbers.sort((a,b)=>b-a); // descending order
console.log(numbers);

// split and join
let str= "My name is Ujjwal";
let words= str.split(" "); // splits by space
console.log(words); // ["My", "name", "is", "Ujjwal"]
console.log(str.split("is")); // splits by "is" --> ["My name ", " Ujjwal"]
console.log(str.split(" ",3)); // splits by space, max 3 parts
console.log(str.split("")); // splits into characters --> ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'U', 'j', 'j', 'w', 'a', 'l']

var a = [1, 2, 3, 4, 5, 6];
console.log(a.join('|'));
console.log(a.reverse());

//console.log(str.reverse()); // doesn't work as str is not an array

// to reverse a string
let newStr = str.split("").reverse().join("-");
console.log(newStr); // l-a-w-j-j-u- -s-i- -e-m-a-n- -y-M

// Example For Palindrome

function check(str)
{
    let reversedStr= str.split('').reverse().join('');
    return (str==reversedStr)?true:false;
}
check("madam")?console.log("Palindrome"):console.log("Not a Palindrome");

//Spread Operator with Arrays
let arr=[1,2,3,4];
console.log(...arr); // 1 2 3 4

//But when copied
let ar2=[...arr]; // to copy array, we must enclose it in []
console.log(ar2);// [ 1, 2, 3, 4 ]

//To merger two arrays
let ar3=[7,8,9]
let margedArr=[...arr,...ar3];
console.log(margedArr); // [ 1, 2, 3, 4, 7, 8, 9 ]
//To add elements in between
let margedArr2=[...arr,5,6,...ar3];
console.log(margedArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(arr);// [ 1, 2, 3, 4 ] ,original array remains unchanged(spread operator prevents mutation)

// Spread Operator with Objects
let obj={a:1,b:2};
let obj1={...obj,b:3,c:3};
console.log(obj1); // { a: 1, b: 3, c: 3 }

// Merging two objects
let obj2={b:3,d:4,e:5};
let mergedObj={...obj,...obj2};
console.log(mergedObj); // { a: 1, b: 3, d: 4, e: 5 } , b's value is updated

//Using for Math functions
let number=[-5,3,7,1,9,-2];
// without spread operator
console.log(Math.max(number)); // returns 'NaN' as Math.max expects a list of numbers, not an array
console.log(Math.min(number)); // returns 'NaN'
//with spread operator
console.log(Math.max(...number)); // 9, the array is expanded into individual arguments
console.log(Math.min(...number)); // -5

// Math function works well with list of numbers
console.log(Math.max(2,5,1,9,6,-1)); // 9
console.log(Math.min(2,5,1,9,6,-1)); // -1