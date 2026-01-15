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

// Shift --> It removes the first element
console.log(arr);
console.log(arr.shift()); // a