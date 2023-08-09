// Obtener los elementos del formulario y el mensaje de error
const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

// Escuchar el evento submit del formulario
form.addEventListener('submit', (event) => {
    // Verificar si el nombre de usuario tiene menos de 2 caracteres
    if (usernameInput.value.length < 2) {
        event.preventDefault(); // Evitar el envío del formulario
        usernameError.textContent = 'El nombre de usuario debe tener al menos 2 caracteres.';
    } else {
        usernameError.textContent = ''; // Borrar el mensaje de error si es válido
    }

    // Verificar si la contraseña tiene menos de 6 caracteres
    if (passwordInput.value.length < 6) {
        event.preventDefault(); // Evitar el envío del formulario
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    } else {
        passwordError.textContent = ''; // Borrar el mensaje de error si es válida
    }
});
