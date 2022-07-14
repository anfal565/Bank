//reg new account details
function register() {
    acno = reg_acno.value
    uname = reg_usname.value
    email = reg_email.value
    pswd = reg_pswd.value
    balance = 2000
    //accno details object
    acnodetails = {
        acno,
        uname,
        email,
        pswd,
        balance
    }

    if (acno in localStorage) {
        alert("Acc already exist")
    }
    else {
        localStorage.setItem(acno, JSON.stringify(acnodetails))
        alert("Register successfully!!")
        window.location.href = "index.html"
    }
}