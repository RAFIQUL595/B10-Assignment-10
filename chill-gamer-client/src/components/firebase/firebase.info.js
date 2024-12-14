// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnB_4bDRlkGNptI-Cdg4urwuHe-pLOlLs",
  authDomain: "chill-gamer-e6052.firebaseapp.com",
  projectId: "chill-gamer-e6052",
  storageBucket: "chill-gamer-e6052.firebasestorage.app",
  messagingSenderId: "1070716689868",
  appId: "1:1070716689868:web:ce903135fc1bf145769169",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;