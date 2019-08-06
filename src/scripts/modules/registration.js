function registerButton () {
    event.preventDefault();
    var person = {
        namefirst: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        yourlogin: document.getElementById('yourlogin').value,
        yourpassword: document.getElementById('yourpassword').value
    };
    localStorage.person = JSON.stringify(person);

    alert("Register well!")
}

function autorization () {
    var users = JSON.parse(localStorage.person)

    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if(login === "admin" || password === "admin"){
        document.location.href = '/admin.html'
    }
    else if(login === users.yourlogin && password === users.yourpassword){
        document.location.href = '/account.html'
    }
    else {
        alert("Error");
    }
}

function exit () {
    document.location.href = '/register.html'
}