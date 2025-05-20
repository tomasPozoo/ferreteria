// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4QXFkzz7f3Yej76d_4kuwKcMtuyQdY_c",
  authDomain: "ferreteria-a26a2.firebaseapp.com",
  projectId: "ferreteria-a26a2",
  storageBucket: "ferreteria-a26a2.firebasestorage.app",
  messagingSenderId: "792864123481",
  appId: "1:792864123481:web:10f4eaf4a2d65d6a609f48",
  measurementId: "G-PG4HWQMTDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };

// Iniciar sesión con Email y Contraseña
async function loginWithEmailPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Inicio de sesión exitoso
    const user = userCredential.user;
    console.log("¡Usuario logueado con email y contraseña!", user);
    // Aquí podrías redirigir al usuario o actualizar la UI
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error al iniciar sesión con email/contraseña:", errorCode, errorMessage);
    // Muestra un mensaje de error al usuario
    throw error; // Re-lanza el error para que quien llame a esta función lo maneje
  }
}
