import * as firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOSV3Q5kz--rTpuETSJLshH1Hw96S2zPU",
  authDomain: "ecommerce-project-e21a5.firebaseapp.com",
  projectId: "ecommerce-project-e21a5",
  storageBucket: "ecommerce-project-e21a5.appspot.com",
  messagingSenderId: "478436435711",
  appId: "1:478436435711:web:46cc936248660242214eca"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
