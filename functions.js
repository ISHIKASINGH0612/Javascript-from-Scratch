//functions in JavaScript are reusable blocks of code that perform a specific task. They can take input in the form of parameters and can return a value. Functions are defined using the function keyword, followed by the function name and parentheses ().

//few points about functions in JavaScript:
//1. function in js can be stored in a variable
//2. function in js can be passed as an argument to another function
//3. function in js can be returned from another function
//4. function in js can be anonymous (without a name) means it can be assigned to a variable or passed as an argument without being named.
//5. function in js can be defined using function declaration or function expression
//6. in other languages, functions can not be passed as arguments or returned from other functions.


//ways to define a function in JavaScript:

//1. Function Declaration
function greet(name)
{
  console.log(`Hello, ${name}! i missed you so much. Love you!`);
}

greet("Nikhil");

//2. Function Expression means assigning a function to a variable. it can be anonymous or named.
//named function expression

function add(a, b)
{
  return a + b;
}

let sum=add(5, 10);
console.log(sum);

//anonymous function expression

let multiply=function(a, b)
{
  return a * b;
}

let product=multiply(5, 10);
console.log(product);

//3. Arrow Function Expression (ES6)

let life=(name)=>
{
  return `Without you, my life is incomplete. I love you so much, ${name}!`;
}

let message=life("Nikhil");
console.log(message);

//4. Immediately Invoked Function Expression (IIFE) means a function that is executed immediately after it is defined.
(function(){
  console.log("This is an IIFE. It runs immediately after it is defined.");
})();