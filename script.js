const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const warningImg = document.createElement("img");

const email = document.querySelector("#email");
const emailMsg = document.querySelector("#email + .error-msg");
const emailError = document.querySelector(".email-error");
let emailErrorCount = 0;

const firstName = document.querySelector("#firstname");
const firstNameMsg = document.querySelector("#firstname + .error-msg");
const firstNameError = document.querySelector(".firstname-error");
let firstNameErrorCount = 0;

const lastName = document.querySelector("#lastname");
const lastNameMsg = document.querySelector("#lastname + .error-msg");
const lastNameError = document.querySelector(".lastname-error");
let lastNameErrorCount = 0;

const password = document.querySelector("#password");
const passwordMsg = document.querySelector("#password + .error-msg");
const passwordError = document.querySelector(".password-error");
let passwordErrorCount = 0;

const confirmPassword = document.querySelector("#confirmpassword");
const confirmPasswordMsg = document.querySelector("#confirmpassword + .error-msg");
const confirmPasswordError = document.querySelector(".confirmpassword-error");
let confirmPasswordErrorCount = 0;

const errorColor = "red";
const correctColor = "lime"

// runs once input loses focus, this means it
// will only throw an error once a user has interacted
// with the input. makes is less aggressive when filling
//

inputs.forEach(input => {
  input.addEventListener("focusout", (e) => {
    let inputType = input.getAttribute("name");
    checkValidity(inputType);
  });
});

//checks if any input is valid after focusout event has been triggered

function checkValidity(inputType){
  switch (inputType){
    case "email":
      if (email.validity.valid){
        emailError.textContent = "";
        if(emailErrorCount == 1){
          emailMsg.removeChild(emailMsg.firstElementChild);
          emailErrorCount -= 1;
        } 
      }
      else{
        throwEmailError(emailErrorCount);
      }
      break;
    case "firstname":
      if(firstName.validity.valid){
        firstNameError.textContent = "";
        if(firstNameErrorCount == 1){
          firstNameMsg.removeChild(firstNameMsg.firstElementChild);
          firstNameErrorCount -= 1
        }
      }
      else{
        throwFirstNameError();
      }
      break;
    case "lastname":
      if(lastName.validity.valid){
        lastNameError.textContent = "";
        if (lastNameErrorCount == 1) {
          lastNameMsg.removeChild(lastNameMsg.firstElementChild);
          lastNameErrorCount -= 1;
        }
      }
      else{
        throwLastNameError();
      }
      break;
    case "password":
      checkPassword();
      break;
    case "confirmpassword":
      checkConfirmPassword();
      break;
  }
}

// creates an img element with a warning icon which is appended to the respective input that calls this function

function createWarningImg(){
  const warningImg = document.createElement("img");
  warningImg.setAttribute("class","warningImg");
  warningImg.setAttribute("src","warning.svg");
  warningImg.setAttribute("width","15px");
  warningImg.setAttribute("height","15px");
  return warningImg;
}

function throwFirstNameError(){
  if(firstNameErrorCount == 0){
    firstName.style.outline = `2px solid ${errorColor}`
    firstNameMsg.prepend(createWarningImg());
    firstNameError.style.setProperty('color',errorColor);
    firstNameError.textContent = "First Name";
    firstNameErrorCount += 1;
  }
}

function throwLastNameError(){
  if(lastNameErrorCount == 0){
    lastName.style.outline = `2px solid ${errorColor}`
    lastNameMsg.prepend(createWarningImg());
    lastNameError.style.setProperty('color',errorColor);
    lastNameError.textContent = "Last Name";
    lastNameErrorCount += 1;
  }
}

function throwEmailError(){
  if (emailErrorCount == 0){
    email.style.outline = `2px solid ${errorColor}`
    emailMsg.prepend(createWarningImg());
    emailErrorCount += 1;
    emailError.style.setProperty('color',errorColor);
    emailError.textContent = "Check Format (email@email.com)";
  }
}

//Password Logic

function checkPassword(){
  if(password.value == ""){
    addPasswordErrorMsg();
    passwordError.textContent = "Enter Password";
  }
  else if(password.value == "" && confirmpassword.value == ""){
    addPasswordErrorMsg();
    passwordError.textContent="Enter Password";
    confirmPassword.disabled = true;
    removeConfirmPasswordErrorMsg();
  }
  else if(password.value != confirmPassword.value && (confirmPassword.value != "") && (password.value != "")){
    removePasswordErrorMsg();
    addConfirmPasswordErrorMsg();
    confirmPasswordError.textContent = "Passwords don't match"
  }
  else{
    removePasswordErrorMsg();
    confirmPassword.disabled = false;
  }
}

function addPasswordErrorMsg(){
  password.style.outline = `2px solid ${errorColor}`;
  passwordError.style.color = `${errorColor}`
  if(passwordErrorCount != 1){
    passwordMsg.prepend(createWarningImg());
    passwordErrorCount = 1;
  }
}

function removePasswordErrorMsg(){
  if(passwordErrorCount == 1){
    passwordMsg.removeChild(passwordMsg.firstElementChild);
    password.style.removeProperty("outline");
    passwordError.textContent = ""
    passwordErrorCount = 0;
  }
}

function checkConfirmPassword(){
  if(confirmpassword.value == "" && password.value != ""){
    addConfirmPasswordErrorMsg();
    confirmPasswordError.textContent = "Confirm Password"
  }
  else if (confirmpassword.value != password.value){
    addConfirmPasswordErrorMsg();
    confirmPasswordError.textContent = "Passwords don't match"
  }
  else{
    removeConfirmPasswordErrorMsg();
  }
}

function addConfirmPasswordErrorMsg() {
  confirmPassword.style.outline = `2px solid ${errorColor}`;
  confirmPasswordError.style.color = `${errorColor}`
  if(confirmPasswordErrorCount != 1){
    confirmPasswordMsg.prepend(createWarningImg());
    confirmPasswordErrorCount = 1;
  }
}

function removeConfirmPasswordErrorMsg(){
  if(confirmPasswordErrorCount == 1){
    confirmPasswordMsg.removeChild(confirmPasswordMsg.firstChild)
    confirmPassword.style.removeProperty("outline");
    confirmPasswordError.textContent = ""
    confirmPasswordErrorCount = 0;
  }
}

