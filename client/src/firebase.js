// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9e507.firebaseapp.com",
  projectId: "mern-auth-9e507",
  storageBucket: "mern-auth-9e507.appspot.com",
  messagingSenderId: "1033801117075",
  appId: "1:1033801117075:web:743c70d6fe64dad49a0c66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);