function login() {
    acno = login_acno.value
    pswd = login_pswd.value

    if (acno in localStorage) {
        acnodetails = JSON.parse(localStorage.getItem(acno))
        console.log(acnodetails["pswd"]);
        //compare
        if (pswd == acnodetails.pswd) {
            alert("Login successfully!!")
            window.location ="home.html"
        }
        else {
            alert("Incorrect password")
        }
    }
    else {
        alert("Invalid accno")
    }
}

//ridirect create newacc
function newacc() {
    window.location = "reg.html"
}
