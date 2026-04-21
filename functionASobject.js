//functions in js are treated as objects. we can add properties and methods to functions just like we do with objects. This is because functions in JavaScript are first-class citizens, meaning they can be treated like any other data type, including objects.

function learn()
{
  console.log("I am learning JavaScript.");
}

//now calling the function
learn(); //This will call the learn function and print "I am learning JavaScript." to the console.

//Now we will add a property to the learn function. We can do this by simply assigning a value to a new property on the function object.

learn.language="cpp";

console.log(learn.language); //This will print "cpp" to the console.

//Builtin properties of functions in JavaScript include:
//1. length: This property returns the number of parameters expected by the function.
//2. name: This property returns the name of the function as a string.
//3. prototype: This property is used to add properties and methods to all instances of a function when it is used as a constructor.

function add(a, b)
{
  return a + b;
}

console.log(add.length); //This will print 2 to the console, as the add function expects 2 parameters.
console.log(add.name); //This will print "add" to the console, as the name of the function is "add".
console.log(add.prototype); //This will print the prototype object of the add function to the console.