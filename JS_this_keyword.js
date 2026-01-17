/*The this references the object of which the function is a property. In other words, 
the this references the object that is currently calling the function.*/

const counter = {
   count : 0,
   next : function() {                                 
       return ++this.count; //this references to the counter's object 'count'
   }
};
console.log(counter.next()); // 1
