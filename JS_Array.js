let x = [1,2,3,4,5];
console.log(x); // [ 1, 2, 3, 4, 5 ]

// Storing multiple types of data
let arr= [1,true,5.6,[2,3,4,7], {name:"Ujjwal"},"Hello"];
console.log(arr); // [ 1, true, 5.6, [ 2, 3, 4, 7 ], { name: 'Ujjwal' }, 'Hello' ]

// Accessing elements
console.log("First Element: "+arr[0]); // First Element: 1
console.log("Fourth Element: "+arr[3]); // Fourth Element: 2,3,4,7
console.log("Fifth Element's name property: "+arr[4]); //Fifth Element's name property: [object Object]
console.log("Fifth Element's name property: "+arr[4].name); // Fifth Element's name property: Ujjwal
console.log(arr[3][3]); // 7

// Iterating over an Array -- using 'of' operator
console.log("Array Elements:");
for (let i of arr) // it iterates over the elements of the array
{
    console.log(i);
}

// Iterating over an Array -- using 'in' operator
console.log("Array Elements using index:");
for (let i in arr)
{
    console.log(arr[i]);
}


//------------------------------------------------------
// Array Methods