// It is used to extract values from arrays and objects
let arr = ['A','B','C','D'];
var [first, second] = arr;
console.log(first); // A
console.log(second); // B

// Skipping an element in between:
let [x,,y] = arr;
console.log(x); // A
console.log(y); // C

// Taking the last element;
let [a,...b] = arr; // used two commas(,) --> takes all elements after the second element
console.log(a); // A
console.log(b); // [ 'C', 'D' ]

/* let [a,...b] = arr; // single comma(,) --> takes all elements after the first element
console.log(b); // [ 'B', 'C', 'D' ] */

// Rest of elements:

let [p,q,...any_variable] = arr;
console.log(p); // A
console.log(q); // B
console.log(any_variable); // [ 'C', 'D' ]

// Destructuring works same for the objects 

let user = { name:'abc', age:30, address:{city:"Biratnagar", street:101}};
let {name, age:new_name} = user;
console.log(name);
console.log(new_name);

// Also works for default values:
let {name: username, gender="Male", address:{city:usercity, street:userstreet}} = user;
console.log(username); // abc
console.log(gender); // Male
console.log(usercity); // Biratnagar 
console.log(userstreet); // 101
console.log(age); // Reference Error, as it's not defined above