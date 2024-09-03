
document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'quotation.html';
});


document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
});


document.getElementById('back-to-login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('sign-in-form').style.display = 'block';
});


document.getElementById('submit-email-btn').addEventListener('click', function() {
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('enter-code-form').style.display = 'block';
});


document.getElementById('submit-code-btn').addEventListener('click', function() {
    document.getElementById('enter-code-form').style.display = 'none';
    document.getElementById('new-password-form').style.display = 'block';
});


document.getElementById('save-password-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});


document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});





document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email');
    const password = document.getElementById('password');


    email.classList.remove('is-invalid');
    password.classList.remove('is-invalid');

    let isValid = true;

    if (!email.checkValidity()) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    if (!password.checkValidity()) {
        password.classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'quotation.html'; 
    }
});





