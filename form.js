function submitForm(){
    const fullname = document.getElementById("name");
    if (fullname.value==="" || fullname.length<2){
        alert("Please enter your fullname");
        fullname.focus();
        return;
    }
    const gender = document.getElementById("gender");
    if (gender.value==="select gender") {
        alert("Please select a gender");
        gender.focus();
        return;
    }
    
}

