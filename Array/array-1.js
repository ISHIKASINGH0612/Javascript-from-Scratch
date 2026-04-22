//array in javascript is a data structure that can hold multiple values of different data types. It is a non-primitive data type and is used to store collections of data. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size as needed.

//ways to create an array in JavaScript

//1. using array literal syntax
let myArray1 = [1, "Hello", true, null, undefined, { name: "Ishika" }, [1, 2, 3]];
console.log(myArray1); 

//2. using the Array constructor
let myArray2 = new Array(1, "Hello", true, null, undefined, { name: "Ishika" }, [1, 2, 3]);
console.log(myArray2);// Array constructor starts with capital.

//3. using the Array.of() method
let myArray3 = Array.of(1, "Hello", true, null, undefined, { name: "Ishika" }, [1, 2, 3]);
console.log(myArray3);

//4. using the Array.from() method
let myArray4 = Array.from([1, "Hello", true, null, undefined, { name: "Ishika" }, [1, 2, 3]]);
console.log(myArray4);

//5. using the spread operator
// The spread operator is a convenient way to create a new array by spreading the elements of an existing array or iterable object. It allows us to easily copy and combine arrays without modifying the original array. For example:
let myArray5 = [...[1, "Hello", true, null, undefined, { name: "Ishika" }, [1, 2, 3]]];
console.log(myArray5);
//another example of spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
//another example of spread operator
let arr3 = [1, 2, 3];
let newArray = [0, ...arr3, 4];
console.log(newArray); // Output: [0, 1, 2, 3, 4]


//5. using the Array.fill() method
// The Array.fill() method is used to fill all the elements of an array with a static value from a start index to an end index. It modifies the original array and returns the modified array. For example:
let myArray6 = new Array(5).fill(0);
console.log(myArray6); // Output: [0, 0, 0, 0, 0]