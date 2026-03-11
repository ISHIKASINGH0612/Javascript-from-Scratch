// operations in strings
// we can perform following operations on strings in JavaScript:
// 1. concatenation
// 2. length
// 3. indexing  
// 4. slicing
// 5. template literals

//1. concatenation means joining two or more strings together. We can use the + operator or the concat() method to concatenate strings in JavaScript. For example:

let str1 = "Hello, ";
let str2 = "Ishika Singh!";
let result = str1 + str2;
console.log(result); // Output: Hello, Ishika Singh!

let str3 = "Welcome to JavaScript programming.";
let str4 = " Let's learn together.";
let result2 = str3.concat(str4);
console.log(result2); // Output: Welcome to JavaScript programming. Let's learn together.

//2. length property is used to get the length of a string in JavaScript. It returns the number of characters in the string, including spaces and special characters. For example:
let str5 = "Ishika Singh";
console.log(str5.length); // Output: 12

//3. indexing is used to access individual characters in a string. In JavaScript, strings are zero-indexed, which means the first character is at index 0, the second character is at index 1, and so on. We can use square brackets [] to access characters by their index. For example:
let str6 = "JavaScript";
console.log(str6[0]);
console.log(str6[4]);
console.log(str6[10]); // Output: J, S, t

//4. slicing is used to extract a portion of a string based on specified start and end indices. We can use the slice() method to perform slicing in JavaScript. For example:
let str7 = "Ishika Singh";
let slicedStr = str7.slice(0, 6);
console.log(slicedStr); // Output: Ishika


//5. template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are defined using backticks (` `) instead of single or double quotes. Template literals can include placeholders for variables or expressions, which are denoted by ${}. For example:
let name = "Ishika Singh";
let age = 25;
let greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting2); // Output: Hello, my name is Ishika Singh and I am 25 years old.