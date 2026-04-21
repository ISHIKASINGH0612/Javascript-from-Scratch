//objects in javascript are just a way to store data in a structured way. They are made up of key-value pairs, where the key is a string and the value can be any data type.

//we can create an object in JavaScript using the object literal syntax, which is a pair of curly braces {}. Inside the curly braces, we can define the key-value pairs for the object. Start with either let, var or const followed by the name of the object and then assign it to the object literal. For example:

const person={
  name: "Ishika Singh",
  age: 25,
  city: "Delhi",
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],

  greet()
  {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

//person.greet(); //This will call the greet method of the person object.

//we can write object inside object as well. Also functions can be defined inside objects as well.

//THIS keyword is used to refer to the current object. It can be used to access the properties and methods of the object from within the object itself. 

//For Normal functions, THIS is undefined in strict mode and refers to the global object (window in browsers) in non-strict mode. For arrow functions, THIS is lexically bound, meaning it takes the value of THIS from the surrounding context where the arrow function is defined.

function display()
{
  console.log(this); //In non-strict mode, this will refer to the global object (window in browsers). In strict mode, this will be undefined.
}

//Arrow function ka THIS is lexically bound, meaning it takes the value of THIS from the surrounding context where the arrow function is defined. So, if we define an arrow function inside an object, THIS will refer to the object itself.
//example:
const obj={
  name: "Ishika Singh",
  age: 25,
  city: "Delhi",
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],  
  greet: ()=>
  {
    console.log(this.name); //In this case, this will refer to the global object (window in browsers) because arrow functions do not have their own THIS and take it from the surrounding context.
  } 
}

obj.greet(); //This will call the greet method of the obj object.