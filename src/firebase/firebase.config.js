// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSP_ge3rB1U8twGNtGbUVAZdvR7sfC2zI",
    authDomain: "hmacademy-9ecb9.firebaseapp.com",
    projectId: "hmacademy-9ecb9",
    storageBucket: "hmacademy-9ecb9.appspot.com",
    messagingSenderId: "108634091601",
    appId: "1:108634091601:web:7ecec8b1405c30d45ec870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;