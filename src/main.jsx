import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApodInitializer } from "./components/ApodInitializer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApodInitializer>
      <App />
    </ApodInitializer>
  </React.StrictMode>,
);
