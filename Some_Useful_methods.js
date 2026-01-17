// Bind()

//Simple code without the use of bind

/*Here is no problem to access the name "ABC", this keyword bind the name variable to the function. 
It is known as "default binding". this keyword refers demo object. */
var demo = {
name : "ABC",
printFunc: function(){
   console.log(this.name);}
   }
demo.printFunc(); // ABC


// other example:
var demo1 = {
name : "ABC",
printFunc: function(){
   console.log(this.name);}
   }
var printFunc2= demo1.printFunc;
printFunc2(); // undefined  --> Here we made a new variable function printFunc2 which refers to the function printFunc() of object demo1. Here the binding of this is lost, so no output is produced.

// To solve this, we can use bind method:
/* By using bind() method we can set the context of this to a particular object. 
So we can use other variables also to call binded function. */
var demo3 = {
name : "ABC",
printFunc: function(){
   console.log(this.name);}
}
var printFunc2= demo3.printFunc.bind(demo3);
   //using bind() 
   // bind() takes the object "demo3" as parameter
printFunc2(); // ABC

//Other example
var obj1 = {
name : "ABC",
article: "C++"
}

var obj2 = {
name : "CDE",
article: "JAVA"
}
  
var obj3 = {
name : "IJK",
article: "C#"
}

function printVal(){
   console.log(this.name+" knows "+this.article);
   }
      
var printFunc2= printVal.bind(obj1);
printFunc2(); // ABC knows C++
  
var printFunc3= printVal.bind(obj2);
printFunc3(); // CDE knows JAVA
  
var printFunc4= printVal.bind(obj3);
printFunc4(); // IJK knows C#