import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {initFirebase} from "./firebase/config";
import {getFirestore} from "firebase/firestore";

ReactDOM.createRoot(document.getElementById("root")).render(
  /*  <React.StrictMode> */
  <App />
  /* </React.StrictMode> */
);

initFirebase();
