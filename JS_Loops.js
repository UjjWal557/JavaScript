// for loop

/* Syntax: 

for (initialization; condition; increment/decrement) 
{
    statements to be executed
}

*/

for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}

/* 
Output:
        Number: 0
        Number: 1
        Number: 2
        Number: 3
        Number: 4
*/


//------------------------------------------------------------------
// while loop
/* 
Syntax:
while (condition)
{
    statements to be executed
}
*/

let a = 10;
while(a>=1)
{
    console.log("Value of a: " + a);
    a--;
}

/* 
Output: 
        Value of a: 10
        Value of a: 9
        Value of a: 8
        Value of a: 7
        Value of a: 6
        Value of a: 5
        Value of a: 4
        Value of a: 3
        Value of a: 2
        Value of a: 1
*/


//---------------------------------------------------------------------
// do...while loop

/*
Syntax:
do
{
    statements to be executed
} while (condition);
*/

let x = 12;
do
{
    if(x%2==0)
    {
        console.log("Even number: " + x);
    }
    x--;
}
while(x>5);

/*
Output:
        Even number: 12
        Even number: 10
        Even number: 8
        Even number: 6
*/