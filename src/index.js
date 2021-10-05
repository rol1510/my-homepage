import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRIjkCsgI3iiWYJurXmDGy5bcS9Y4VBtc",
  authDomain: "personalpage-10c9d.firebaseapp.com",
  databaseURL:
    "https://personalpage-10c9d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personalpage-10c9d",
  storageBucket: "personalpage-10c9d.appspot.com",
  messagingSenderId: "251640634883",
  appId: "1:251640634883:web:83768947f60cb03a363836",
  measurementId: "G-YML59MPLP5",
};

initializeApp(firebaseConfig);
const analytics = getAnalytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
