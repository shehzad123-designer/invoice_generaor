
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);


    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleNewPassword = document.querySelector('#toggleNewPassword');
    const newPassword = document.querySelector('#new-password');

    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const confirmPassword = document.querySelector('#confirm-password');

    function setupPasswordToggle(toggleIcon, passwordField) {
        toggleIcon.addEventListener('click', function () {

            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);


            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    setupPasswordToggle(toggleNewPassword, newPassword);
    setupPasswordToggle(toggleConfirmPassword, confirmPassword);
});

let timerElement = document.getElementById('timer');
    let resendButton = document.getElementById('resend-code-btn');
    let timeLeft = 60;

    function startTimer() {
        let timerInterval = setInterval(function() {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                resendButton.disabled = false;
            }
        }, 1000);
    }


    resendButton.disabled = true;
    startTimer();


    resendButton.addEventListener('click', function() {
        timeLeft = 60;
        resendButton.disabled = true;
        startTimer();
    });
