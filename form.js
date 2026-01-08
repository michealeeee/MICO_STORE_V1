function submitForm(){
    const fullnameError = document.getElementById("fullnameError");
    const name = document.getElementById("name");
    fullnameError.innerHTML="";
    if (name.value==="" || name.value.length<2){
        fullnameError.innerHTML="Please enter your full name";
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
    emailerror.innerHTML="";
    if(email.value===""){
    emailerror.innerHTML="Please enter your email address";
    email.focus();
    return;
     }
}

