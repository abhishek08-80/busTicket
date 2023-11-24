function validation() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
        document.getElementById("emailerror").innerText = "Please enter email";
    } else if (!emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = "Please enter valid email";
    } else {
        document.getElementById("emailerror").innerText = ""
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = "Please enter password";
    } else {
        document.getElementById("passworderror").innerHTML = ""

    }

    if (email && emailcheck.test(email) && password) {
        const values = {
            email: email,
            username: "abhishek",
            token: "8d4d85f97g8puinjr"
        }
        localStorage.setItem("loginInfo", JSON.stringify(values))
    window.location.replace("homePage.html");
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




