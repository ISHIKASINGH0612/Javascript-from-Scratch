const form=document.querySelector('form');


// const weight=document.querySelector('#Weight').value;
// const height=document.querySelector('#Height').value;
//yaha par agar ye likhenge to ye dono variables form submit hone se pehle hi initialize ho jayenge aur unki value blank hogi. To isliye hume inhe form submit hone ke baad initialize karna hoga.
//usecase will give empty values because when the script runs, the form has not been submitted yet, so the input fields are still empty. To get the values after the form is submitted, we need to initialize these variables inside the event listener for the form submission.

//form jab bhi submit hota hai to ya to GET ya POST se hota hai aur browser ko uski url chal hi jaati hai. To usko rokne ke liye hum preventDefault() method ka use karte hain.

form.addEventListener('submit', function(e){
    e.preventDefault();//to prevent default behavior of form submission

    let weight=document.querySelector('#Weight').value;
    let height=document.querySelector('#Height').value;
    let result=document.querySelector('#result');

    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML='Please enter a valid height';
    }
    else{
      height=height/100;
    }

    if(weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML='Please enter a valid weight';
    }
    else{
      weight=`${weight}`;
    }

    result.innerHTML=`Your BMI is ${weight/height**2}`;


})