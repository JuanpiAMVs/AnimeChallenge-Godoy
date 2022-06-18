// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoiNZkIm02hujIXtXj9P_un5iU6EWiBBI",
  authDomain: "anime-stock-a9e25.firebaseapp.com",
  projectId: "anime-stock-a9e25",
  storageBucket: "anime-stock-a9e25.appspot.com",
  messagingSenderId: "400806928104",
  appId: "1:400806928104:web:4dcfbb695bcf817132b35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;