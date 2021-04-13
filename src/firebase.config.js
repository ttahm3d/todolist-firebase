import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiZbf_NIQznWVaZ5BvezYXMKFGWfJugYs",
  authDomain: "todolist-tahir.firebaseapp.com",
  projectId: "todolist-tahir",
  storageBucket: "todolist-tahir.appspot.com",
  messagingSenderId: "934376820917",
  appId: "1:934376820917:web:3b9a7b6e6ae854bc316efc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
