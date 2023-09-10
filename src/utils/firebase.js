// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCasv3SSlxcQilbvSKIw08RlodA_6kL6AQ",
  authDomain: "netflixgpt-5ee23.firebaseapp.com",
  projectId: "netflixgpt-5ee23",
  storageBucket: "netflixgpt-5ee23.appspot.com",
  messagingSenderId: "27415874844",
  appId: "1:27415874844:web:7ac8e7dca3f2acf450fed9",
  measurementId: "G-QB3Q9G7MP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();