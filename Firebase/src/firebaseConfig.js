import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEbeb08dhyP4pAXjYWouSmVis0ytL75Ek",
  authDomain: "jaydeep-firebase-adfcf.firebaseapp.com",
  databaseURL: "https://jaydeep-firebase-adfcf-default-rtdb.firebaseio.com",
  projectId: "jaydeep-firebase-adfcf",
  storageBucket: "jaydeep-firebase-adfcf.appspot.com",
  messagingSenderId: "940289903746",
  appId: "1:940289903746:web:b3c90289f387706933389b",
  measurementId: "G-XBD9JVF546",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app); // Realtime Database
export const firestore = getFirestore(app); // Firestore Database
