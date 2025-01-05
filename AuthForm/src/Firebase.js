import { initializeApp } from "firebase/app";  

const firebaseConfig = {  
  apiKey: "AIzaSyBEbeb08dhyP4pAXjYWouSmVis0ytL75Ek",  
  authDomain: "jaydeep-firebase-adfcf.firebaseapp.com",  
  databaseURL: "https://jaydeep-firebase-adfcf-default-rtdb.firebaseio.com",  
  projectId: "jaydeep-firebase-adfcf",  
  storageBucket: "jaydeep-firebase-adfcf.firebasestorage.app",  
  messagingSenderId: "940289903746",  
  appId: "1:940289903746:web:b3c90289f387706933389b",  
  measurementId: "G-XBD9JVF546"  
};  

export const app = initializeApp(firebaseConfig);