function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

counter(); //This will call the counter function and return the inner function, but it will not execute the inner function yet.

let increment = counter(); //This will call the counter function and return the inner function, which is stored in the increment variable.  
increment(); //This will call the inner function and print 1 to the console.

//Builtin higher-order functions in JavaScript include:
//1. map: This function takes an array and a callback function as arguments and returns a new array with the results of calling the callback function on each element of the original array.  
//2. filter: This function takes an array and a callback function as arguments and returns a new array with all the elements of the original array that satisfy the condition specified in the callback function.
//3. reduce: This function takes an array and a callback function as arguments and returns a single value that is the result of applying the callback function to each element of the array, starting with an initial value.

//example of map function
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); //This will print [1, 4, 9, 16, 25] to the console.

let names= ["ishika", "Nikhil", "Anshul", "Anshika"];

let newNames=names.map(function(name)
{
  return name.toUpperCase();
})

console.log(newNames); //This will print ["ISHIKA", "NIKHIl", "ANSHUL", "ANSHIKA"] to the console.

//example of filter function
let numbers2=[1, 2,3, 4, 5];

let evenNumbers=numbers2.filter(function(number2)
{
  return number2 % 2 === 0;
});

console.log(evenNumbers); //This will print [2, 4] to the console.

//example of reduce function
let numbers3=[1, 2, 3, 4, 5];

let sum=numbers3.reduce(function(accumulator, currentValue)
{
  return accumulator + currentValue;
}, 5);//0 is the initial value for the accumulator. It is optional, but if we do not provide it, the first element of the array will be used as the initial value and the iteration will start from the second element.

console.log(sum); //This will print 15 to the console.