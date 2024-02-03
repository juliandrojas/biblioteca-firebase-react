// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjK5RQDnj3RCVy9G6cBZ4mcG1FtQYqHgU",
  authDomain: "biblioteca-react-c163c.firebaseapp.com",
  projectId: "biblioteca-react-c163c",
  storageBucket: "biblioteca-react-c163c.appspot.com",
  messagingSenderId: "486352192282",
  appId: "1:486352192282:web:fb0936facfdbe71ff222a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de autenticación de Firebase
export const auth = getAuth(app);

// Exporta la instancia de Cloud Firestore
export const db = getFirestore();