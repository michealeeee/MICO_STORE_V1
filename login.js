function ValidateLogin(){
    const ViewEmailError=document.getElementById("ViewEmailError");
    const email=document.getElementById("email");
    ViewEmailError.innerHTML="";
    if (email.value===""){
        ViewEmailError.innerHTML="email field cannot be empty";
    }
    
}