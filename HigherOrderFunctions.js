//functions that either take another function as an argument or return a function are called higher-order functions. They are a powerful tool in JavaScript and are used extensively in functional programming.

function greet(name)
{
  console.log(`Hello, ${name}!`);
}

function callme(fn)
{
  return fn("Ishika Singh");
}

callme(greet); //This will call the callme function and pass the greet function as an argument. The callme function will then call the greet function with the argument "Ishika Singh", which will print "Hello, Ishika Singh!" to the console.

//Higher-order functions can also return a function. For example:

function outer(x)
{
  return function inner()
  {
    console.log(`The value of x is ${x}`);
  }
}

outer(500); //This will call the outer function and pass the argument 500. The outer function will return the inner function, which will print "The value of x is 500" to the console when called.