// let nums=[34,7,5,3,67,56,89,23,12];

// let sum=nums.reduce((acc, curr)=>
// {
//   return acc+curr;
// }, 0);

// console.log(sum);

// let product=nums.reduce((acc, curr)=>
// {
//   return acc*curr;
// }, 1);

// console.log(product);

let details=[
  {name: "Ishika", age: 23, salary: 50000},
  {name: "Hitesh", age: 26, salary: 75000},
  {name: "Ankita", age: 20, salary: 60000},
  {name: "Rohit", age: 25, salary: 80000}
];


let total_salary=details.reduce((acc, curr)=>
{
  return acc+curr.salary;
});

console.log(total_salary);

let highest_salary=details.reduce((acc, curr)=>
{
  return (acc>curr)? acc : curr;
}, details[0].salary);

console.log(highest_salary);