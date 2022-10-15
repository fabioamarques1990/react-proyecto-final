import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GXkCUe9A0HEIiOT3AK6zHXvUHiqBtzI",
  authDomain: "proyecto-react-3439d.firebaseapp.com",
  projectId: "proyecto-react-3439d",
  storageBucket: "proyecto-react-3439d.appspot.com",
  messagingSenderId: "326594399641",
  appId: "1:326594399641:web:bf157fae594877bea89708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);