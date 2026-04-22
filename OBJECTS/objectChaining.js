//object chaing: jab hum ek object ki multiple properties ya methods ko access karte hain, to hum object chaining ka use kar sakte hain. Iska matlab hai ki hum ek object ke properties ya methods ko directly access kar sakte hain bina intermediate variables ke.

//Example:

const person={
  email: "ishikasingh0612@gmail.com",

  name:{
    first: "Ishika",
    last: "Singh",
    // dob={ 
    //   day: 6,
    //   month: 12,
    //   year: 2003
    // }// this is not correct way to define dob as it is an object and we cannot define an object inside another object without using a key.

    dob: {  
      day: 6,
      month: 12,
      year: 2003
     }
  }
}

console.log(person.name.dob.year); //2003


//one more thing we can use (?) optional chaining operator to access the properties of an object without getting an error if the property does not exist.

console.log(person.name?.dob?.year);
console.log(person.name?.address?.city); //undefined without throwing an error