/*
let name1= [1,2,3,4,5,6];
let [first,,...last]=name1;
console.log(first);
console.log(last);

// witth objects
let user = {x:"abc", age:25};
let {x, age:userAge, gender="male"}=user;
console.log(x);
console.log(userAge);
console.log(gender);

let p=["alpha", "beta", "gamma", "delta"];
var [firstName,...lastName] = p;
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"


var [firstName,,...lastName] = ["html", "css", "javascript", "react"];

console.log(firstName);

console.log(lastName);
*/
/*
let car= {
    name:'BMW',
    model:'3 S',
    type:{
        fuel:'petrol',
        color:'black'
    },
    check: function()
    {
        console.log("Superrr");
    }
};

console.log(car['model']);
console.log(car.type['design']);

//but if we use open chaining, if property is not there, it will not throw error
console.log(car?.type?.fuel);//petrol
console.log(car['type']?.color);//black
console.log(car?.engine?.design);

//car.check();

/*
for(let i in car)
{
    console.log(`${i}=${car[i]}`);
}*/

let arr=[100,50,13.5,-9,0,75];
let arr1 = ["Aashish","Ujjwal","Dharmendra"];
//console.log(arr.sort((a,b)=>a-b));

arr3=[...arr];
arr3.push(7);
console.log(arr3);
console.log(arr);