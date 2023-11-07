// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fda84.firebaseapp.com",
  projectId: "mern-estate-fda84",
  storageBucket: "mern-estate-fda84.appspot.com",
  messagingSenderId: "93296510400",
  appId: "1:93296510400:web:39d1b39051375c2b957425"
};

export const app = initializeApp(firebaseConfig);