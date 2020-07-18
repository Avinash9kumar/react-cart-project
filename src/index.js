import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore' ;


const firebaseConfig = {
    apiKey: "AIzaSyDXWA_EA3cXXR8Q2S9CkPNxVwoH7YNX_7Q",
    authDomain: "cart-28958.firebaseapp.com",
    databaseURL: "https://cart-28958.firebaseio.com",
    projectId: "cart-28958",
    storageBucket: "cart-28958.appspot.com",
    messagingSenderId: "185579846545",
    appId: "1:185579846545:web:bb9caa0bd4a8379277b830"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
