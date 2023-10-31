import ReactDOM from "react-dom";
import { App } from "./App.js";
import React from "react";

const root = ReactDOM.render(App(), document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
