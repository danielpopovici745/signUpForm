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
const lastNameError = document.querySelector(".lastname-error");
const lastNameMsg = document.querySelector("#lastname + .error-msg");
let lastNameErrorCount = 0;
const errorColor = "red";

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

function checkValidity(inputType){
  switch (inputType){
    case "email":
      if (email.validity.valid){
        emailError.textContent = "";
        if(warningImg != null)
        emailMsg.removeChild(emailMsg.firstElementChild);
        emailErrorCount -= 1;
        break;
      }
      else{
        throwEmailError(emailErrorCount);
        break;
      }
    case "firstname":
      if(firstName.validity.valid){
        firstNameError.textContent = "";
        firstNameMsg.removeChild(firstNameMsg.firstElementChild);
        firstNameErrorCount -= 1
        break;
      }
      else{
        throwFirstNameError();
        break;
      }
    case "lastname":
      if(lastName.validity.valid){
        lastNameError.textContent = "";
        lastNameMsg.removeChild(lastNameMsg.firstElementChild);
        lastNameErrorCount -= 1;
        break;
      }
      else{
        throwLastNameError();
        break;
      }
  }
}

function createWarningImg(){
  const warningImg = document.createElement("img");
  warningImg.setAttribute("class","warningImg");
  warningImg.setAttribute("src","warning.svg");
  warningImg.setAttribute("width","15px");
  warningImg.setAttribute("height","15px");
  return warningImg;
}

function throwEmailError(){
  if (emailErrorCount == 0){
    emailMsg.prepend(createWarningImg());
    emailErrorCount += 1;
    emailError.style.setProperty('color',errorColor);
    emailError.textContent = "Check Format (email@email.com)";
  }
  
  
}

function throwFirstNameError(){
  if(firstNameErrorCount == 0){
    firstNameMsg.prepend(createWarningImg());
    firstNameError.style.setProperty('color',errorColor);
    firstNameError.textContent = "First Name";
    firstNameErrorCount += 1;
  }
}

function throwLastNameError(){
  if(lastNameErrorCount == 0){
    lastNameMsg.prepend(createWarningImg());
    lastNameError.style.setProperty('color',errorColor);
    lastNameError.textContent = "Last Name";
    lastNameErrorCount += 1;
  }
}


