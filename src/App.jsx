import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
