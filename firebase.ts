// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const getUser = (callback :(user: User | null) => void ) => {
  const unsubscribe = onAuthStateChanged(auth, (userData) => {
    callback(userData)
  })
  return unsubscribe;
}