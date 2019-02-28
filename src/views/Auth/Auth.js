import React, {Component} from 'react';
import NavLink from '../../containers/NavLink';
import Login from './Login';
import Register from './Register';
import {Route} from "react-router-dom";

const Auth = class extends Component {
  render() {
    const {location} = this.props;
    return (location.pathname === '/auth') ?
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="panel panel-default login-container">
            <div className="panel-heading">
              Login
            </div>
            <div className="panel-body">
              <Login />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="panel panel-default register-container">
            <div className="panel-heading">
              Register
            </div>
            <div className="panel-body">
              <Register />
            </div>
          </div>
        </div>
      </div> :
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading" style={{paddingBottom: 0, borderBottom: 'none'}}>
              <ul className="nav nav-tabs" style={{borderBottom: 'none'}}>
                <NavLink to={'/auth/login'}>Login</NavLink>
                <NavLink to={'/auth/register'}>Register</NavLink>
              </ul>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <Route path="/auth/login" component={Login} />
                  <Route path="/auth/register" component={Register} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Auth
