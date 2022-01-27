import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN4k4_b-AbwuNkm9jzUhtMRvAwbNrwEJM",
  authDomain: "clone-d2539.firebaseapp.com",
  projectId: "clone-d2539",
  storageBucket: "clone-d2539.appspot.com",
  messagingSenderId: "787997225756",
  appId: "1:787997225756:web:18f7c68a12fe0f01bfc0d9",
  measurementId: "G-20M3HM8WE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
