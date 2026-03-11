//1. constant variable
const ID= 2101640100125;
console.log(ID);
// ID= 2101640100126;
// console.log(ID);
//it is not possible to change the value of a constant variable.So the above code will give an error.

//2. var variable

function varTest(num)
{
  if(num>0)
  {
    var x1= "ishika singh will be a great software engineer";
  }

  console.log(x1);
}

varTest(5);


//3. let variable

function varTest(num)
{
  if(num>0)
  {
    let x2= "ishika singh will be a great software engineer";
  }

  console.log(x2);
}

varTest(5);
// the code is giving an error because the variable x is declared with let keyword and it is block scoped. So it is not accessible outside the block in which it is declared.

//4. without var, let and const 

testVariable = "ishika singh";

function printName()
{
  console.log(`${testVariable} will be a great Human also`);
}

printName();


// this code will work because when we assign a value to a variable without declaring it with var, let or const, it becomes a global variable and can be accessed anywhere in the code.

//Redeclaration of variables
 var x=10;
 console.log(x);
 var x=20;
 console.log(x);
// the above code will work because var allows redeclaration of variables. So the value of x will be updated to 20 and it will be printed in the console. this causes confusion and bugs in the code, so it is not recommended to use var for declaring variables. It is better to use let or const for declaring variables to avoid such issues.

let y=10;
console.log(y);
// let y=20;
// console.log(y);
// the above code will give an error because let does not allow redeclaration of variables. So we cannot declare a variable with the same name again in the same scope. This is one of the advantages of using let over var, as it helps to avoid confusion and bugs in the code.

const z=10;
console.log(z);
// const z=20;
// console.log(z);
// the above code will give an error because const does not allow redeclaration of variables. So we cannot declare a variable with the same name again in the same scope. This is one of the advantages of using const over var, as it helps to avoid confusion and bugs in the code.

//since var allows redeclaration of variables, it can lead to unexpected behavior and bugs in the code. For example, if we accidentally redeclare a variable with var, it can overwrite the previous value and cause issues in the program. On the other hand, let and const do not allow redeclaration of variables, which helps to prevent such issues and makes the code more predictable and easier to debug. Therefore, it is recommended to use let or const for declaring variables instead of var.

// var is accessible anywhere inside the function where it is declared. so if are using it in a loop, suppose you took var i to iterate in a for loop, then this i will be accessibke even outside the loop. on the other hand, if you are using let i to iterate in a for loop, then this i will not be accessible outside the loop. 

// difference between declaration and initialization of variables

// declaration of a variable is the process of creating a variable and giving it a name. for example, let a; this is a declaration of a variable named a. here memory is allocated for the variable a but it does not have any value assigned to it. so it is undefined.

// initialization of a variable is the process of assigning a value to a variable. for example, let a=10; this is an initialization of a variable named a with the value 10. here memory is allocated for the variable a and it has the value 10 assigned to it. so it is not undefined anymore.

//hOISTING is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// if a variable is declared with var, then first it will be hoisted and then it will be initialized with undefined. so if you try to access the variable before it is declared, it will give you undefined. 

// if a variable is declared with let or const, then it will be hoisted but it will not be initialized. so if you try to access the variable before it is declared, it will give you a ReferenceError.