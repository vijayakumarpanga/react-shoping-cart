import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase from 'firebase'
import  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_1pyVJqinGYssdmfJC8dNP_ehUip_3Bs",
  authDomain: "shopping-cart-aa1ab.firebaseapp.com",
  databaseURL: "https://shopping-cart-aa1ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-cart-aa1ab",
  storageBucket: "shopping-cart-aa1ab.appspot.com",
  messagingSenderId: "34946944216",
  appId: "1:34946944216:web:213de26f24b983d8a59bad",
  measurementId: "G-NM4SF8JWLP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
