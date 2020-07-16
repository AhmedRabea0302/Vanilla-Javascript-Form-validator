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

// Check Email is Valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not Valid');
    }

}

// Check Required Fields
function checkRequiredFieds(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} Is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get Fiels Names
function getFieldName(input) {
    return input.id.toUpperCase();
}

// Check Length 
function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} Must Be at Least ${min} Charachters`);
        } else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} Can't be More than ${max} Charachters`);
        } else {
            showSuccess(input);
        }
    
}

// Check Password Match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    } else {
        showSuccess(input2);
    }
}


// Enent Listeners 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequiredFieds([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});