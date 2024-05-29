import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/PrivateRoute';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
