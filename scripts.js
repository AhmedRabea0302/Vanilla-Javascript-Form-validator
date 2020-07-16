var form      = document.getElementById('form');
var username  = document.getElementById('username');
var email     = document.getElementById('email');
var password  = document.getElementById('password');
var password2  = document.getElementById('password2');

// Show Input Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Enent Listeners 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username, 'Username Is Required');
    } else {
        showSuccess(username);
    }
});