'use strict';


//Form validation
const form = document.getElementById('form');
const loginBtn = document.getElementById("submit-btn");

const errorMessage = document.querySelectorAll('.error-message');
const errorIcons = document.querySelectorAll('.error-icon');
const successIcons = document.querySelectorAll(".success-icon");

const emailInput = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('click', (e) => {
    e.preventDefault();
     
    validate();
    console.log(`LOGIN`);
});


 
const validate = function(){
  
    //EMAIL
    if(emailInput.value.trim() === ''){
        errorFn(0, 'Email cannot be empty');
    }
    else if(!isEmailValid(emailInput.value.trim())){
        errorFn(0, 'Provide a valid email address');
    }
    else{
        successFn(0)
    }

    //PASSWORD
    if(password.value.trim() === ""){
        errorFn(1, 'Password field cannot be blank');
    }
  
    else if(password.value.trim().length < 6 || password.value.trim().length > 15){
       errorFn(1, "Password must be min 6 and max 15");
    }
    else if(!isPasswordValid(password.value.trim())){
        errorFn(1, "Password must include upper and lowercase letters, numbers, and special characters.")
    }
    else{
        successFn(1);
    }

}
 


//EMAIL FUNCTION: Checking if the user's email matches the regular expression standard
const isEmailValid = function (email) {
	const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regEmail.test(email);//Testing the email if it's valid... This returns TRUE or FALSE
};




//PASSWORD FUNCTION: Checking if the user's password matches the regular expression standard
const isPasswordValid = function (password) {
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?/-]).{8,}$/;
	return regexPassword.test(password);//Testing the email if it's valid... This returns TRUE or FALSE
};





//Error function
const errorFn = function (i, message){
    errorMessage[i].textContent = message;
    errorMessage[i].style.opacity = 1;
    errorIcons[i].style.opacity = 1;

    successIcons[i].style.opacity = 0;
}



//Success function
const successFn = function (i, message) {
	successIcons[i].style.opacity = 1;

	errorMessage[i].style.opacity = 0;
	errorIcons[i].style.opacity = 0;
};





