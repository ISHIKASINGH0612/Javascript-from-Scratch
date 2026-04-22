//callback functions means a function that is passed as an argument to another function and is executed after some operation is completed. Callback functions are commonly used in asynchronous programming, such as handling events or making API calls.

//example of a callback function

function sayHello()
{
  console.log("Hello, Life`s good! I am so happy to see you again. I missed you so much, Nikhil!");
}

function greet(callback)
{

  console.log("Welcome to my world, Nikhil! I am so happy to see you again. I missed you so much!");
  callback();
}

greet(sayHello);


// function returning another function

function outerFunction()
{
  console.log("This is the outer function. It will return the inner function.");

  function innerFunction()
  {
    console.log("This is the inner function. It is returned by the outer function.");
  } 
  return innerFunction;
}

// to call the inner function, we need to store the returned function in a variable and then call it.reason for this is that the inner function is not executed immediately when the outer function is called, but it is returned as a value that can be called later. In details, when we call outerFunction(), it executes the code inside it and returns the innerFunction as a value. We can then store this returned function in a variable and call it to execute the code inside the inner function.

let value=outerFunction();
value();
