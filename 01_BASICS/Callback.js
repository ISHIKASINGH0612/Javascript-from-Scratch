// callback functions are the functions that are passed as argument in other functions and are invoked inside the outer function to complete some kind of routine or action.

function inner(name)
{
  console.log("Hello "+name);
}


function outer(callback)
{
  let name ="Ishika";
  callback(name);
}

outer(inner);

//it is a synchronus callback as it is executed immediately