import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyB0b36H9_hhNj_tpXM-TOvqrxAH66jWu8Y",
    authDomain: "cart-e0dbb.firebaseapp.com",
    databaseURL: "https://cart-e0dbb-default-rtdb.firebaseio.com",
    projectId: "cart-e0dbb",
    storageBucket: "cart-e0dbb.appspot.com",
    messagingSenderId: "469074625174",
    appId: "1:469074625174:web:1d4122d4d3a752d931b8b7"
  };


  firebase.initializeApp(firebaseConfig);

  const database= firebase().database().ref();

  export const cartref=database.child("notes");
  
  export default firebase;

  
