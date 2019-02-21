import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import FormioView from 'react-formio/lib/FormioView';
import NavLink from '../components/NavLink';

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
              { auth.is.administrator ? (
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
                <li>
                  {/* eslint-disable-next-line */}
                  <a role="navigation link" onClick={logout}>
                    <span className="fa fa-sign-out" />
                    Logout
                  </a>
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
      auth: {
        authenticated: true,
        is: {
          administrator: true
        }
      }
    };
  }

  mapDispatchToProps = (dispatch) => {
    return {
      logout: () => {
        dispatch(this.formio.auth.actions.logout());
        this.router.push('/' + this.formio.auth.config.anonState);
      }
    };
  }
}
