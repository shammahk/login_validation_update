let button = document.querySelector('.butn');
button.addEventListener("click", loader);

let reset = document.querySelector('.reset');
reset.addEventListener("click", clearAll);
// reset.style.visibility = 'hidden';

let username = document.querySelector('.username');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let password_confirm = document.querySelector('#confirm_password');

var user_error = document.getElementById("user_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("passwordMatch_error");

let load = document.querySelector('.loader');

username.addEventListener("blur", good);
email.addEventListener("blur", ema);
password.addEventListener("blur", pas);

function good() {
    if (username.value != "") {
        username.style.border = 'solid 0.5px green';
        user_error.style.display="none";
    }
}

function ema() {
    if (email.value != "") {
        email.style.border = 'solid 0.5px green';
        email_error.style.display = 'none';
    }
    if (email.value == "") {
        email.style.border = 'solid 0.5px red';
    }
}

function pas() {
    if (password.value == "") {
        password.innerHTML = "Enter Password";
        password.style.border = 'solid 0.5px red';      
    }  else if (password.value !== "") {
        password_error.style.display = 'none';
        password.style.border = 'solid 0.5px green'; 
    }
}

function loader() {
    load.style.visibility='visible';
    if (username.value == "") {
        user_error.style.display="block";
        username.style.border= ' solid 0.5px red';
    }
    if (email.value == "") {
        email_error.style.display = 'block';
        email.style.border= ' solid 0.5px red';
    }
    if (password.value !== password_confirm.value) {
        password_error.style.display = 'block';
        password.style.border= ' solid 0.5px red';
        password_confirm.style.border= ' solid 0.5px red';
        password_confirm.focus();
    }
    if (password.value !== "" && password.value == password_confirm.value) {
        password_error.style.display = 'none';
        password_confirm.style.border= ' solid 0.5px green';
        password.style.border= ' solid 0.5px green';        
    } 
}

function clearAll() {
    email_error.style.display = 'none';
    user_error.style.display="none";
    password_error.style.display = 'none';
    username.style.border = 'none';
    email.style.border = 'none';
    password.style.border = 'none';
    password_confirm.style.border = 'none';
    load.style.visibility='hidden';
}