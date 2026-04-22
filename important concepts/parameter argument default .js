//default parameters

function greet(name="Nikhil")
{
  console.log(`Hello, ${name}! i missed you so much. Love you!`);
}

//call as it is without passing any argument, it will use the default value of name which is "Nikhil"
greet();

//call with an argument, it will override the default value of name
greet("Nikhil Malhotra");

