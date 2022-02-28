import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyB0b36H9_hhNj_tpXM-TOvqrxAH66jWu8Y",
  authDomain: "cart-e0dbb.firebaseapp.com",
  databaseURL: "https://cart-e0dbb-default-rtdb.firebaseio.com",
  projectId: "cart-e0dbb",
  storageBucket: "cart-e0dbb.appspot.com",
  messagingSenderId: "469074625174",
  appId: "1:469074625174:web:1d4122d4d3a752d931b8b7"
};


firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
