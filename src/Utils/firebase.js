// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCS-0UkHwuT5f99XFIAVryRFQ7TbCtW1s",
  authDomain: "netflixclone-3fe62.firebaseapp.com",
  projectId: "netflixclone-3fe62",
  storageBucket: "netflixclone-3fe62.appspot.com",
  messagingSenderId: "110004625649",
  appId: "1:110004625649:web:c4c2e3bcbb0326f639c950",
  measurementId: "G-3ZN4MNBLQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();