// let nums=[2,4,7,5,4,3,8,9,6];

// let newNums=nums.filter((num)=>
// {
//   return num%2==0;
// }
// );

// console.log(newNums);

let details=[
  {name: "Ishika", age: 23},
  {name: "Hitesh", age: 26},
  {name: "Ankita", age: 20},
  {name: "Rohit", age: 25}
];

let newDetails=details.filter((detail)=>
{
  return detail.age>=25;
}
);

console.log(newDetails);