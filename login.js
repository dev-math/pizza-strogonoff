function boom1(){
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "inline";
}
function boom(){
    document.getElementById("signin").style.display = "inline";
    document.getElementById("signup").style.display = "none";
}
function submitdata(){
    var email  = document.getElementById("email").value;
    localStorage.setItem("email",email);

    var pass  = document.getElementById("pass").value;
    localStorage.setItem("pass",pass);
}

function checkdata(){
    let email_check  = document.getElementById("email_check").value;
    let email = localStorage.getItem("email");

    let pass_check  = document.getElementById("pass_check").value;
    let pass = localStorage.getItem("pass");
   
    if(email === email_check && pass === pass_check){
        // document.getElementById("container").style.display = "none";
       location.replace("index.html");
    }
    if(email !== email_check && pass !== pass_check){
        document.querySelector("#note").textContent = "Incorrect password";
    }
    if(email !== "" && pass !== ""){
        document.querySelector("#note").textContent = "Please Fill All Blanks";
    }

}