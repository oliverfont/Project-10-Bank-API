import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/user/loginSlice';
import { Navigate } from 'react-router-dom';
import '../index.css';

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const error = useSelector(state => state.login.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Rediriger l'utilisateurice vers la page de profil s'iel est authentifié·e
  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <main className="main bg-custom">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* Afficher le message d'erreur si disponible */}
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
