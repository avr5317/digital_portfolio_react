
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmp-s4Sed2BBaoepTYwcYUg6AlaPJZjzI",
  authDomain: "react-portfolio-vinayarekha.firebaseapp.com",
  projectId: "react-portfolio-vinayarekha",
  storageBucket: "react-portfolio-vinayarekha.appspot.com",
  messagingSenderId: "999719917538",
  appId: "1:999719917538:web:26f982a63173161f5a0bbb"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

