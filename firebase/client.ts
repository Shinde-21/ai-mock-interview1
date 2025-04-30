// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChiPhGrao38Kad7404Epmb_oIetB0WRdc",
  authDomain: "prepwise-af8cd.firebaseapp.com",
  projectId: "prepwise-af8cd",
  storageBucket: "prepwise-af8cd.firebasestorage.app",
  messagingSenderId: "60009422444",
  appId: "1:60009422444:web:bd36632b25362b577c0249",
  measurementId: "G-9D536B52XM"
};

// Initialize Firebase
const app =  !getApps.length ? initializeApp(firebaseConfig): getApp()
export const auth = getAuth(app);
export const db = getFirestore(app);