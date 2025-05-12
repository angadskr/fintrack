// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCicEgp_8gvRYUYDQf6zo79gE-Tt7xrU",
  authDomain: "fintrack-d51ec.firebaseapp.com",
  projectId: "fintrack-d51ec",
  storageBucket: "fintrack-d51ec.firebasestorage.app",
  messagingSenderId: "785848553140",
  appId: "1:785848553140:web:47db9c2add1d0b53b611e1",
  measurementId: "G-7DW0SBMCEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;