// login-handler.js

// Importa la función de login desde tu archivo firebase.js
// Asegúrate de que la ruta './firebase.js' sea correcta dependiendo de dónde esté tu archivo
import { loginWithEmailPassword } from './firebase.js'; // Asegúrate de exportar esta función en firebase.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtén una referencia al formulario y a los campos de entrada
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('username'); // ¡Importante! Firebase signInWithEmailAndPassword requiere un EMAIL, no un nombre de usuario
    const passwordInput = document.getElementById('password');
    // Puedes añadir un elemento para mostrar mensajes de error o éxito
    // const messageDiv = document.getElementById('messageArea');

    // Verifica que los elementos existen antes de intentar añadir listeners
    if (loginForm && emailInput && passwordInput) {
        // Añade un "escuchador" de eventos al envío del formulario
        loginForm.addEventListener('submit', async (event) => {
            // 1. Previene el envío tradicional del formulario
            event.preventDefault();

            // 2. Obtiene los valores ingresados por el usuario
            const email = emailInput.value;
            const password = passwordInput.value;

            // 3. Llama a la función de login de Firebase que ya creaste
            try {
                const user = await loginWithEmailPassword(email, password); // Espera a que la función se complete

                // Si llegamos aquí, el login fue exitoso
                console.log("¡Inicio de sesión exitoso!", user);
                // messageDiv.textContent = "¡Bienvenido!"; // Muestra un mensaje de éxito
                // 4. Redirige al usuario o actualiza la UI según sea necesario
                // window.location.href = '/dashboard'; // Ejemplo de redirección
            } catch (error) {
                // Si ocurre un error durante el login (contraseña incorrecta, usuario no existe, etc.)
                console.error("Fallo en el inicio de sesión:", error);
                // 5. Muestra un mensaje de error al usuario
                // messageDiv.textContent = `Error: ${error.message}`; // Muestra el mensaje de error de Firebase

                // O muestra mensajes más amigables basados en el código de error
                let userFriendlyMessage = "Error al iniciar sesión. Inténtalo de nuevo.";
                switch (error.code) {
                    case 'auth/user-not-found':
                        userFriendlyMessage = 'No se encontró un usuario con ese email.';
                        break;
                    case 'auth/wrong-password':
                        userFriendlyMessage = 'Contraseña incorrecta.';
                        break;
                    case 'auth/invalid-email':
                        userFriendlyMessage = 'El formato del email es inválido.';
                        break;
                    // Puedes añadir más casos según los errores comunes de Firebase Auth
                }
                alert(userFriendlyMessage); // Usa un alert simple por ahora, considera algo mejor para la UI
            }
        });
    } else {
        console.error("No se encontraron los elementos del formulario de login. Asegúrate de que los IDs ('loginForm', 'username', 'password') sean correctos y el script se cargue después del HTML.");
    }
});
