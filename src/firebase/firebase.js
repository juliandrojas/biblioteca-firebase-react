// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbNPLs6cmK_UBqNf9ktRGn3BYMl_YmiVg",
  authDomain: "biblioteca-react-eb11f.firebaseapp.com",
  databaseURL: "https://biblioteca-react-eb11f-default-rtdb.firebaseio.com",
  projectId: "biblioteca-react-eb11f",
  storageBucket: "biblioteca-react-eb11f.appspot.com",
  messagingSenderId: "949378375942",
  appId: "1:949378375942:web:3040cfb86e57c8b6d47e87",
  measurementId: "G-W3JFYF2XV4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);