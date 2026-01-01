// if statement

let x= 6;
if(x%2==0)
{
    console.log(`${x} is even`);
}

// if...else statement
let age = 20;
if (age >= 18) {    
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// if...else if...else statement
let IQ = 50;
if (IQ >= 140) 
{
    console.log("Genius");
} 
else if (IQ >= 120) 
{
    console.log("Very Intelligent");
} 
else 
{
    console.log("Average Intelligence");
}

//switch statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName= "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName="Thursday";
        break;
    case 6:
        dayName="Friday";           
        break;
    case 7:
        dayName="Saturday";
        break;
    default:
        dayName="Invalid day";
        break;
}
console.log(`Day ${day} is ${dayName}`);

//Ternary operator

let a=5;
let b=6;
let c=3;

let Max=(a>b) && (a>b) ? a : (b>c) ? b : c;
console.log(`Max value is ${Max}`);

//Nested ternary operator

let val=3;
let result = val > 5 ? "Greater than 5" : val < 3 ? "Less than 3" : val === 3 ? "Equal to 3" : "Between 3 and 5";  // use Strict Equality while comapring equality
console.log(result);