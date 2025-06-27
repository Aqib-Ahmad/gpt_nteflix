// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVpgLlR37xYG3IvXTMy00tmwHTdBPxSnw",
  authDomain: "gptnetflix-a7272.firebaseapp.com",
  projectId: "gptnetflix-a7272",
  storageBucket: "gptnetflix-a7272.firebasestorage.app",
  messagingSenderId: "622386046985",
  appId: "1:622386046985:web:bab33535069d2a416b30d8",
  measurementId: "G-586CGLFWLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
