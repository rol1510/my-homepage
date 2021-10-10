import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import secrets from "./secrets";
import { init } from "./js/translation";

initializeApp(secrets.FIREBASE_CONFIG);
const analytics = getAnalytics();

const time = new Date().toDateString();
console.log(time);
logEvent(analytics, "page_view_time", {
  time: time,
});

// call after firebase init
init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
