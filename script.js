
document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'quotation.html';
});



document.getElementById("submit-email-btn").addEventListener("click", function() {
    window.location.href = "code.html"; // Redirect to code.html
});
document.getElementById("submit-code-btn").addEventListener("click", function() {
    window.location.href = "newpass.html"; // Redirect to code.html
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





