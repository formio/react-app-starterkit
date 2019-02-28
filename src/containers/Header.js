import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {push} from "connected-react-router";
import FormioView from 'react-formio/lib/FormioView';
import NavLink from './NavLink';
import { selectRoot } from "../modules/selectors";
import { logout } from "../modules/auth";
import {AuthConfig} from "../config";

export default class HeaderView extends FormioView {
  component = class Header extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired
    };

    render() {
      const {auth, logout} = this.props;

      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="logo" alt="Form.io" src="https://portal.form.io/images/formio-logo.png" height="25px" />
            </Link>
            <ul className="nav navbar-nav mr-auto">
              <NavLink exact to="/" role="navigation button" className="nav-link">
                <span className="fa fa-home" />
              </NavLink>
              { (auth.is.hasOwnProperty('administrator') && auth.is.administrator) ? (
                <NavLink to="/form" role="navigation link" className="nav-link">
                  <i className="fa fa-wpforms"></i>
                  Forms
                </NavLink>
              ) : null }
              { auth.authenticated ? (
                <NavLink to="/user" role="navigation link" className="nav-link">
                  <i className="fa fa-users"></i>
                  Users
                </NavLink>
              ) : null }
            </ul>
            <ul className="nav navbar-nav ml-auto">
              { auth.authenticated ? (
                <li className="nav-item">
                  <span className="nav-link" role="navigation link" onClick={logout}>
                    <span className="fa fa-sign-out" />
                    Logout
                  </span>
                </li>
              ) : (
                <NavLink to="/auth" role="navigation link" className="nav-link">
                  Login | Register
                </NavLink>
              )}
            </ul>
          </div>
        </nav>
      );
    }
  }

  mapStateToProps = (state) => {
    return {
      auth: selectRoot('auth', state)
    };
  }

  mapDispatchToProps = (dispatch) => {
    return {
      logout: () => {
        dispatch(logout());
        dispatch(push(AuthConfig.anonState));
      }
    };
  }
}
