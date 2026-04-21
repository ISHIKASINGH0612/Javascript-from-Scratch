

//operations on arrays in JavaScript

//1. copy of array
//The copy is shallow copy, which means that if we modify the copied array, it will also modify the original array. For example:
let originalArray = [1, 2, 3];
console.log(originalArray); // Output: [1, 2, 3]
let copiedArray = originalArray; // This creates a shallow copy of the original array
console.log(copiedArray); // Output: [1, 2, 3]
copiedArray.push(4);
console.log(copiedArray); // Output: [1, 2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4] because the original array is also modified due to the shallow copy.

//Copy is not a deep copy, which means that if we modify the copied array, it will not modify the original array. 

//2. isarray() method is used to check if a variable is an array or not. It returns true if the variable is an array, and false otherwise. For example:
let arr1 = [1, 2, 3];
let arr2 = "Hello";
console.log(Array.isArray(arr1)); // Output: true
console.log(Array.isArray(arr2)); // Output: false


//3. from() method is used to create a new array from an array-like or iterable object. It can also be used to convert a string into an array of characters. For example: