//spread is used to expand an iterable (like an array) into individual elements. It can be used in various contexts, such as function calls, array literals, and object literals.

let arr=[1,2,3,4,5,6,7,8,9,10];

function sum(...args)
{
  let summation=0;
  for(let num of args)
  {
    summation+=num;
  }
  return summation;
}

console.log(sum(...arr)); 

let copy=[...arr]; //copying an array using spread operator
console.log(copy);