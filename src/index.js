import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";
import secrets from "./secrets";

initializeApp(secrets.FIREBASE_CONFIG);
const analytics = getAnalytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
