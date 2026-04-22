// strictMode in JavaScript is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It can be enabled by adding the string "use strict"; at the beginning of a script or a function.

// for example

"use strict";

// this code will work fine because we are using strict mode and it will catch any errors or mistakes in the code. if we try to use a variable without declaring it, it will give an error instead of creating a global variable. this helps to prevent bugs and makes the code more secure and easier to debug.  

//1. var variable
function varTest(num)
{
  if(num>0)
  {
    var x1= "ishika singh will be a great software engineer";
  }
  console.log(x1);  
}

varTest(5);

//example to show strict mode with var variable

function varTest(num)
{
  if(num>0)
  {
    var x1= "ishika singh will be a great software engineer";
  }


  console.log(x1);
}   
varTest(5);
// the above code will work because var is function scoped and it is accessible outside the block in which it is declared. However, if we try to access x1 outside the function, it will give an error because it is not defined in the global scope. This is one of the disadvantages of using var for declaring variables, as it can lead to unexpected behavior and bugs in the code.