// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmMS3WTgpfrAlpof2Pl8GD_mbNrEyvNdw",
  authDomain: "aicinestream.firebaseapp.com",
  projectId: "aicinestream",
  storageBucket: "aicinestream.appspot.com",
  messagingSenderId: "438553916226",
  appId: "1:438553916226:web:9e12479d5e2d5a3fc14edb",
  measurementId: "G-WP189KZZKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();