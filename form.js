let iti;
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("phone");

  iti = window.intlTelInput(input, {
    initialCountry: "gh",
    separateDialCode: true,
    preferredCountries: ["ng", "gh", "us", "gb"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
  });
});

function check_phone_number(){
    const NumberError = document.getElementById("NumberError");
     const phone = document.getElementById("phone");
    NumberError.innerHTML ="";
    if(phone.value.trim()===""){
    NumberError.innerHTML = "Mobile Number cannot be empty";
    return;
  }
    if (!iti.isValidNumber()) {
    NumberError.innerHTML = "Please enter a valid phone number";
    return;
  }
  
}

function submitForm(){
    const fullnameError = document.getElementById("fullnameError");
    const name = document.getElementById("name");
    const namepattern = /^[A-Za-z\s]+$/;
    fullnameError.innerHTML="";
    if (namepattern.test(name.value) === false){
       fullnameError.innerHTML="Please fullname can only be alphabet";
        name.focus();
        return;  
    }
    if (name.value===""){
        fullnameError.innerHTML="Please enter your full name";
        name.focus();
        return;
     }
    if (name.value.length<2){
        fullnameError.innerHTML="Full name should be more than two characters";
        name.focus();
        return;
    }

    const Gendererror = document.getElementById("Gendererror");
    const gender = document.getElementById("gender");
    Gendererror.innerHTML="";
    if (gender.value==="select gender") {
        Gendererror.innerHTML="Please select a gender";
        gender.focus();
        return;
    }
    const emailerror = document.getElementById("emailerror");
    const email = document.getElementById("email");
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // alert(emailpattern.test(email.value));
    emailerror.innerHTML="";
    if(email.value===""){
    emailerror.innerHTML="Please enter your email address";
    email.focus();
    return;
     }
     if(emailpattern.test(email.value)===false){
     emailerror.innerHTML="Invalid email format";
     email.focus();
    return;
     }
     
     const password = document.getElementById("password");
     const passworderror = document.getElementById("PasswordError")
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    passworderror.innerHTML = "";
    if(password.value===""){
        passworderror.innerHTML = "Password cannot be empty, please set a new password";
        password.focus();
        return;
    }
    if( passwordpattern.test(password.value)===false){
        passworderror.innerHTML = "Password must be at least one uppercase, one lowercase, one number, one special character, no spaces, and a minimum length (e.g., 8-16 chars)";
        password.focus();
        return;
    }
      const cpassword = document.getElementById("cpassword");
     const cpassworderror = document.getElementById("cPasswordError")
    const cpasswordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    cpassworderror.innerHTML = "";
    if(cpassword.value===""){
        cpassworderror.innerHTML = "Password cannot be empty, please set a new password";
        cpassword.focus();
        return;
    }
    if( cpasswordpattern.test(cpassword.value)===false){
        cpassworderror.innerHTML = "Password must be at least one uppercase, one lowercase, one number, one special character, no spaces, and a minimum length (e.g., 8-16 chars)";
        cpassword.focus();
        return;
    }
    if(cpassword.value !== password.value){
    cpassworderror.innerHTML = "Both passwords are not the same, Please check and try again";
        password.focus();
        return;
    }
}

