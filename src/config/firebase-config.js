// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0iUCLg3P0vsUyzg3xT8Ciwh9JJyHd-J0",
  authDomain: "expense-tracker-fe2a9.firebaseapp.com",
  projectId: "expense-tracker-fe2a9",
  storageBucket: "expense-tracker-fe2a9.appspot.com",
  messagingSenderId: "350750220658",
  appId: "1:350750220658:web:f363e8fea6eeecb12abdeb",
  measurementId: "G-RSBHBH62XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);


//firebase login
//firebase init
//firebase deploy
