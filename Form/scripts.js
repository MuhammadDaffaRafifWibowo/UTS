const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('input', function () {
    const isValid = form.checkValidity();
    submitBtn.disabled = !isValid;
});

form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});