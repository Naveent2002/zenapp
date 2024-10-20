// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLDy5oQe0r8VzKRqsX2LsY1J95IuFQIII",
  authDomain: "zenapp-81e9f.firebaseapp.com",
  projectId: "zenapp-81e9f",
  storageBucket: "zenapp-81e9f.appspot.com",
  messagingSenderId: "565586016530",
  appId: "1:565586016530:web:28a0ea2c9081d126489bcb",
  measurementId: "G-0EQET0CEWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);