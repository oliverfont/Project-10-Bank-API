import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/loginSlice';
import logo from '../../assets/img/argentBankLogo.png';
import '../../index.css'; 

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const profile = useSelector(state => state.profile.profile);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="main-nav navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="main-nav-logo navbar-brand">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link main-nav-item" to="/profile">
                    <i className="fa fa-user-circle"></i> {profile ? profile.firstName : 'Profile'}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn nav-link main-nav-item" onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i> Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link main-nav-item" to="/login">
                  <i className="fa fa-user-circle"></i> Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
