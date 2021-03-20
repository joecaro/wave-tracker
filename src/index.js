import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

document.getElementById("root").style =
  "width: 100vw; height: 100vh; overflow: scroll: padding: 0; margin: 0";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
