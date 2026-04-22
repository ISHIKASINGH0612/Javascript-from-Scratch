//first way to combine object

const obj1={
  a:1,
  b:2,
  c:3
}

const obj2={
  d:4,
  e:5,
  f:6
}

const obj3={obj1, obj2} // this will create a new object with two properties obj1 and obj2 which are the original objects.

console.log(obj3); // {obj1: {a: 1, b: 2, c: 3}, obj2: {d: 4, e: 5, f: 6}}

//second way to combine object

const obj4={...obj1, ...obj2} // this will create a new object with all the properties of obj1 and obj2.

console.log(obj4); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

//third way to combine object

const obj5=Object.assign(obj1, obj2) // this will modify the original object obj1 and add the properties of obj2 to it.
console.log(obj5); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

//4th way to combine object
const obj6=Object.assign({}, obj1, obj2) // this will create a new object and add the properties of obj1 and obj2 to it without modifying the original objects.
console.log(obj6); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}