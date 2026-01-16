let car = {
    name:"BMW",
    model:'3s',
    info: function(){
        return "Best car to ride on.";
    },
    address:{
        city:"brt",
        street:111
    },
    check: function(){
        console.log("Object ends.");
    }
};
console.log(car.info()); // Best car to ride on. --> Use console if the function has return type
car.check(); // Object ends. --> directly call the function using the dot operator

// 'in' operator --> checks if the key is present in the object and returns boolean value  
let res = 'check' in car;
console.log(res); // false

// printing all elements of the object
for(let i in car) // 'i' stores the key name
{
    console.log(`${i}:${car[i]}`);  
}

//Optional Chaining(?.)
// It allows to safely access nested properties.
// It is used to check if a property exists before trying to access the property.

//console.log(car.address.data); // undefined, as the child variable is not defined
//console.log(car.details.data); // TypeError, as the parent property is itself not defined

// To solve this, Optional Chaining(?.) is used:
console.log(car['details']?.data); // undefined
console.log(car?.info?.()); // Best car to ride on. --> put console.log to the query as info function returns the value, but doesn't directly prints
car?.check?.(); // Object ends. --> as the check function has console, it can be called directly 