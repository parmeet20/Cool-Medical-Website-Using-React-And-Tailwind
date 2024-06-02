import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div >
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </div>
);
