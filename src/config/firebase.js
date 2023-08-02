import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDuirLG6CZOEio-4xuJV-J_DFDewk32KXw",
  authDomain: "pikpok-aa4ab.firebaseapp.com",
  projectId: "pikpok-aa4ab",
  storageBucket: "pikpok-aa4ab.appspot.com",
  messagingSenderId: "261205974336",
  appId: "1:261205974336:web:4e4b185fc927035d616ea5",
  measurementId: "G-1CNDBCL0TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;