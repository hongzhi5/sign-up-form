const password = document.querySelector('#password'),
      passwordConfirm = document.querySelector('#password-confirm'),
      message = document.querySelector('#message'),
      form = document.querySelector('#signUpForm');

form.addEventListener('submit', function (e) {
    if (password.value !== passwordConfirm.value) {
        e.preventDefault(); // Prevent form submission
        message.textContent = 'Passwords do not match!';
        message.style.color = 'red';
    }
});

      
