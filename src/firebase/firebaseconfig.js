// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1-fiTldjgqm2BZFtIxP0Fe2Mf0ohDmp8",
    authDomain: "alasicas-3793a.firebaseapp.com",
    projectId: "alasicas-3793a",
    storageBucket: "alasicas-3793a.appspot.com",
    messagingSenderId: "278872603537",
    appId: "1:278872603537:web:fb6d064adc7d7cf65f3830"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth();

export{appFirebase , auth};