/* script.js */
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

    if (!name || !email || !password) {
        errorMessage.innerHTML = 'Todos los campos son obligatorios.';
        return;
    }

    if (password.length < 6) {
        errorMessage.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    console.log(`Nombre: ${name}`);
    console.log(`Correo Electrónico: ${email}`);
    console.log(`Contraseña: ${password}`);
    errorMessage.innerHTML = 'Registro exitoso.';
}
