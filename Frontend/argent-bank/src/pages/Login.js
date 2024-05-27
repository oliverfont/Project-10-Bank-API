import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/user/loginSlice';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(state => state.login.isLoading);
  const error = useSelector(state => state.login.error);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Sign In</title>
        <link rel="stylesheet" href="./css/main.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="sign-in-button" disabled={isLoading}>Sign In</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </section>
        </main>
      </body>
    </html>
  );
}

export default Login;
