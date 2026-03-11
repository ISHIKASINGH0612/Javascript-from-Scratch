//data types in javascript
// there are 7 primitive data types in javascript
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

//non-primitive data type in javascript is object


//symbol and bigint are new data types introduced in ES6 and ES2020 respectively. Symbol is used to create unique identifiers for objects and bigint is used to represent large integers that cannot be represented by the number data type.

//More about symbols
const sym1= Symbol("id");
const sym2= Symbol("id"); 
console.log(sym1===sym2);//false because each symbol is unique and different from each other even if they have the same description. This is one of the main features of symbols, as it allows us to create unique identifiers for objects without worrying about naming conflicts or collisions with other variables in the code.

//Range of bigint is from -(2^53 - 1) to (2^53 - 1) and it can represent integers larger than this range without losing precision, unlike the number data type which can only represent integers up to 2^53 - 1. This makes bigint useful for applications that require working with large integers, such as cryptography, scientific computing, and financial calculations.



//undefined and null are two different data types in JavaScript. undefined is a primitive data type that represents the absence of a value or an uninitialized variable. It is the default value of variables that have not been assigned a value. null, on the other hand, is a primitive data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or to reset the value of a variable to null.

// for example
let a;
console.log(a); // undefined because a is declared but not initialized with any value.

let b = null;
console.log(b); // null because b is explicitly assigned the value null, which indicates that it has no value or is intentionally empty.

//boolean dataype in JavaScript can have only two values: true or false. It is often used in conditional statements and logical operations to control the flow of the program based on certain conditions. For example:

let isRaining = true;
if (isRaining) {
  console.log("Don't forget to take an umbrella!");
} else {
  console.log("Enjoy the sunny weather!");
}

//string data type in JavaScript is used to represent textual data. It can be defined using single quotes (' '), double quotes (" "), or backticks (` `). For example:

let name = "Ishika Singh";
let greeting = 'Hello, ' + name + '!';
console.log(greeting); // Output: Hello, Ishika Singh!

//number data type in JavaScript is used to represent both integer and floating-point numbers. It can be defined using numeric literals or by performing mathematical operations. For example:

let age =25;
console.log(typeof age); // Output: number

let pi = 3.14;
console.log(typeof pi); // Output: number