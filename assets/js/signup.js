function validation() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    let usercheck = /^[A-Za-z.]$/;
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{0,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (!username) {
        document.getElementById("usererror").innerHTML = "Please enter username";

    } else if (usercheck.test(username)) {
        document.getElementById("usererror").innerHTML = "Please enter valid username";
    }
    else {
        document.getElementById("usererror").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailerror").innerText = "Please enter email";

    } else if (!emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = "Please enter valid email";

    } else {
        document.getElementById("emailerror").innerText = ""
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = "Please enter password";
    }
    else if (passwordcheck.test(password)) {
        document.getElementById("passworderror").innerHTML = "Please enter strong password";
        // location.href = "login.html";        
    } else {
        document.getElementById("passworderror").innerHTML = "";
    }

    if (password !== confirmpassword) {
        document.getElementById("confirmpassworderror").innerHTML = "* Password doesn't match!";
    } else {
        document.getElementById("confirmpassworderror").innerHTML = "";
    }

    if (username && password && confirmpassword && email && password === confirmpassword && emailcheck.test(email)) {
        window.location.replace("login.html");

    }

    return false;
}


function savedata() {
    let name, email, password;
    name = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email
    })) {
        alert("duplicate")

    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
        })

        localStorage.setItem("users", JSON.stringify(user_records))
    }



}




