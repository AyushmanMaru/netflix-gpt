// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMZRPrHLWTn6iDvs-WAjyBCSkMDrwvFAY",
  authDomain: "netflixgpt-ddef2.firebaseapp.com",
  projectId: "netflixgpt-ddef2",
  storageBucket: "netflixgpt-ddef2.appspot.com",
  messagingSenderId: "95808187867",
  appId: "1:95808187867:web:07b37c3a9beb3fd28e4bfe",
  measurementId: "G-WBWFFGM36M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();