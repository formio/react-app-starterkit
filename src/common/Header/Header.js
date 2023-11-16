import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { logout } from '@formio/react';
import { useAuth } from '../../modules/auth';

const Header = () => {
  const navigate = useNavigate();
  const { state: authState, dispatch } = useAuth();

  const onLogout = () => {
    logout()(dispatch);
    navigate("/auth")
  };

  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="Form.io" src="https://portal.form.io/template/images/formio-logo-bg.svg" height="25px" />
          </Link>
          <ul className="nav navbar-nav mr-auto">
            { authState.authenticated ? (
              <NavLink to="/form/create" role="navigation link" className="nav-link">
                <i className="fa fa-plus"></i>&nbsp;
                Create Form
              </NavLink>
            ) : null }
            { authState.authenticated ? (
              <NavLink end to="/form" role="navigation link" className="nav-link">
                <i className="fa fa-list"></i>&nbsp;
                Forms
              </NavLink>
            ) : null }
            { authState.authenticated ? (
              <NavLink to="/event" role="navigation link" className="nav-link">
                <i className="fa fa-calendar"></i>&nbsp;
                Events
              </NavLink>
            ) : null }
          </ul>
          <ul className="nav navbar-nav ml-auto">
            { authState.authenticated ? (
              <li className="nav-item">
                <span className="nav-link" role="navigation link" onClick={onLogout}>
                  <span className="fa fa-sign-out" />&nbsp;
                  Logout
                </span>
              </li>
            ) : (
              <div className="d-flex">
                <NavLink to="/auth" role="navigation link" className="nav-link">
                  Login | Register
                </NavLink>
                <NavLink to="/settings" role="navigation link" className="nav-link">
                  <i className="fa fa-cog"></i>
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </nav>
  );
};

export default Header;
