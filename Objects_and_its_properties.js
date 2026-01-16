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

// Shorthand Property
/* It simplify the syntax for defining object properties when the property name is the same 
as the variable name holding the value. Instead of writing both the property and its value 
explicitly, we can use shorthand syntax. */

//without shorthand feature:
function getObject(name, city) {
    return {
        name: name,
        city: city
    };
}
const obj1 = getObject('Akash', 'Mumbai');
console.log(obj1); // Output: { name: 'Akash', city: 'Mumbai' }

// with shorthand feature: --> no need to rewrite if the variable name is same
function getObject1(name, city) {
    return {
        name,
        city
    };
}
const obj2 = getObject1('Akash', 'Mumbai');
const obj3 = getObject1('Anant', 'Goa');
console.log(obj2); // Output: { name: 'Akash', city: 'Mumbai' }
console.log(obj3); // {name: 'Anant', city: 'Goa'}

const students = [
    { name: 'Akash', city: 'Mumbai', course: 'JavaScript' },
    { name: 'Ashish', city: 'Chennai', course: 'Redux' },
    { name: 'Sita', city: 'Delhi', course: 'React' }
];

students.forEach(student => {
    console.log(student);
});