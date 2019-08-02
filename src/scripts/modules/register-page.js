var tabs = document.getElementsByClassName('menuRegister')[0];

tabs.addEventListener( "click" , function(event) {
    var elem = event.target,
        activeTab = document.querySelector('.menuRegister .active'),
        activeContent = document.querySelector('.registerContent__item.active'),
        elemAttr = elem.getAttribute('rel');

    activeTab.classList.remove('active');
    activeContent.classList.remove('active');

    elem.parentElement.classList.add('active');
    document.getElementById(elemAttr).classList.add('active');
});

var register = document.getElementById('register-button');
var autorization = document.getElementById('autorization-button');
var firstName = document.getElementById('firstname');
var secondName = document.getElementById('secondname');
var yourLogin = document.getElementById('yourlogin');
var yourPassword = document.getElementById('yourpassword');


register.addEventListener('click' , function () {
    localStorage.setItem('firstname', firstName.value);
    localStorage.setItem('secondname', secondName.value);
    localStorage.setItem('yourlogin', JSON.stringify(yourLogin.value));
    localStorage.setItem('yourpassword', JSON.stringify(yourPassword.value));
    alert("Register well!")
});

autorization.addEventListener('click' , function () {
    var storedLogin = localStorage.getItem('yourlogin');
    var storedPassword = localStorage.getItem('yourpassword');

    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if(login === "admin" || password === "admin"){
        document.location.href = '/admin.html'
    }
    else if(login == JSON.parse(storedLogin) && password == JSON.parse(storedPassword)){
        document.location.href = '/account.html'
    }
    else {
        alert("Error");
    }
});






