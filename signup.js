

var signUpData = {
    email: "",
    password: "",
    date: "",
    number: "",
    address: "",
}


function ChangeHandler(e) {
    signUpData.email = document.getElementById("email").value
    signUpData.password = document.getElementById("password").value
    signUpData.date = document.getElementById("date").value
    signUpData.number = document.getElementById("number").value
    signUpData.address = document.getElementById("address").value
}

console.log(signUpData)


function SignupSubmitHandler() {
    // e.preventDefault();
    alert("The form was submitted");
    localStorage.setItem("data", JSON.stringify(signUpData))
}