const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const email = document.querySelector("#email");
const emailMsg = document.querySelector("#email + .error-msg");
const emailError = document.querySelector(".email-error");
const errorColor = "red"
const warningImg = document.createElement("img");

// runs once input loses focus, this means it
// will only throw an error once a user has interacted
// with the input. makes is less aggressive when filling
// form

email.addEventListener("focusout",(e) => {

  if (email.validity.valid){
    emailError.textContent = "";
    emailMsg.removeChild(warningImg);
  }
  else{
    throwEmailError();
  }

});

function createWarningImg(){
  warningImg.setAttribute("src","warning.svg");
  warningImg.setAttribute("width","15px");
  warningImg.setAttribute("height","15px");
  
}

function throwEmailError(){
  createWarningImg();
  emailMsg.prepend(warningImg);
  emailError.style.setProperty('color',errorColor);
  emailError.textContent = "Check Format (email@email.com)";
}
