import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
