// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8iMQ0Sp2x3WXlCeSwaJfJ0WKFJ3ZfPE",
  authDomain: "vite-contact-b620e.firebaseapp.com",
  projectId: "vite-contact-b620e",
  storageBucket: "vite-contact-b620e.appspot.com",
  messagingSenderId: "383461674172",
  appId: "1:383461674172:web:a45f4169579d88405f94b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);