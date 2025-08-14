// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCbd9NyaSM-k3NZfB0xe-3nYPesipNuMfo",
  authDomain: "bookito-af85e.firebaseapp.com",
  projectId: "bookito-af85e",
  storageBucket: "bookito-af85e.firebasestorage.app",
  messagingSenderId: "1074538039651",
  appId: "1:1074538039651:web:bf01baa2518c8aaa75ab56"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
