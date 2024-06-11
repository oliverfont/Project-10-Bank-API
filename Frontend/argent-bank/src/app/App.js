import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Transactions from '../pages/Transactions';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
