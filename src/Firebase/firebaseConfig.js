// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }  from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpa2Cy7gc26ePs_PgjRsZqIlEhUdP3q5E",
  authDomain: "delivery-food-f175e.firebaseapp.com",
  projectId: "delivery-food-f175e",
  storageBucket: "delivery-food-f175e.appspot.com",
  messagingSenderId: "881381691947",
  appId: "1:881381691947:web:ab8d125f026f31c0a5106e",
  measurementId: "G-MKWV84W8X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth (app)
export const firestore = getFirestore(app)
export const google = new GoogleAuthProvider();
