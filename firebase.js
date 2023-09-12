// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk0kt8a4OTKXkuwSZtQkL5Qyxh15oQIyE",
  authDomain: "blossom-flora-12786.firebaseapp.com",
  projectId: "blossom-flora-12786",
  storageBucket: "blossom-flora-12786.appspot.com",
  messagingSenderId: "731807110176",
  appId: "1:731807110176:web:e1647a562791c7fccb1845",
  measurementId: "G-KX266BE727"
};

// Initialize Firebase
export const auth = getAuth();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);