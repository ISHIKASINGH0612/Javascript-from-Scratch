//rest parameter is used when we don't know how many arguments will be passed to a function, we can use rest parameter to represent an indefinite number of arguments as an array.

function sum(...numbers)
{
  let summation=0;
  for(let num of numbers)
  {
    summation+=num;
  };

  return summation;
}

console.log(sum(1,2,3)); //6
console.log(sum(1,2,3,4,5)); //15
console.log(sum(34, 5487, 93274, 329,5,5,2,54));

function print(...messages)
{
  for(let msg of messages)
  {
    console.log(msg);
  }
}

print(1, "Ishika", true, null, "Nikhil is love", 89 );