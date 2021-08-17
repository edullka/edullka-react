import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpHuVoZeW_puyS720c-smcKR06x0csMfs",
  authDomain: "edullka.firebaseapp.com",
  projectId: "edullka",
  storageBucket: "edullka.appspot.com",
  messagingSenderId: "910647153372",
  appId: "1:910647153372:web:691082a7213c7b555b1a19",
  measurementId: "G-E0Q3NTJXSQ"
};

const fireb = firebase.initializeApp(config);
const auth = fireb.auth();
const db = fireb.firestore();

export { db, auth };