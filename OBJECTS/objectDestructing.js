//Object destructring : object destructuring is a way to extract values from an object and assign them to variables. It is a convenient way to access the properties of an object without having to use the dot notation.
//when is it used : it is used when we want to extract values from an object and assign them to variables. It is also used when we want to pass an object as a parameter to a function and we want to extract the values from the object inside the function.

const course={
  name:"JavaScript",
  price: 999,
  courseInstructor: "Hitesh Choudhary"
}

//without destructuring if we have to access courseInstructor property of course object we have to do this
console.log(course.courseInstructor); // This will print "Hitesh Choudhary" to the console.

//with destructuring we can do this
const {courseInstructor} = course;
console.log(courseInstructor); // This will also print "Hitesh Choudhary" to the console.

//we can also extract multiple properties from an object using destructuring
const {name, price} = course;
console.log(name);
console.log(price); // This will print "JavaScript" and 999 to the console respectively.

//we can also assign new variable names while destructuring
const {courseInstructor: instructor} = course;
console.log(instructor); // This will print "Hitesh Choudhary" to the console, but the variable name is now "instructor" instead of "courseInstructor".