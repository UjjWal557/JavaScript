// Syntax: let object_name = {key1:value1, ...};
let obj = {a:1, b:2, c:3, d:4};
console.log(obj); // {a: 1, b: 2, c: 3, d: 4}

// Ways to access object values:

// 1. Dot(.) operator:
// Syntax: object_name.key
console.log(obj.b); // 2

// 2. Bracket Notation: 
// Syntax: object_name['key']
console.log(obj['c']); // 3

// Adding new data into the object:
// Syntax: object_name['newkey'] = value; / object_name.newkey = value;
obj.e = 5;
obj['f'] = 6;
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// MOdifying data:
// Syntax: object_name.key = new_value; / object_name['key'] = new_value;
obj.a = 10;
obj['d'] = 15;
console.log(obj); // { a: 10, b: 2, c: 3, d: 15, e: 5, f: 6 }

// Deleting data:
// Syntax: delete object_name.key; / delete object_name['key'];
delete obj.c;
console.log(obj); // { a: 10, b: 2, d: 15, e: 5, f: 6 }

// Nested Object:
let nested_obj = {a:1, b:2, c:{p:5, q:7, r:9}, d:4, e:5};
console.log(nested_obj.c); // { p: 5, q: 7, r: 9 }
console.log(nested_obj.c.q); // 7