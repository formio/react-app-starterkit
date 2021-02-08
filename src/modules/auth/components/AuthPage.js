import React from 'react';
import Login from './Login';
import Register from './Register';
import { AppConfig } from '../../../config';

const AuthPage = () => {
  return (
    <div className="row">
      { AppConfig.projectUrl !== 'https://reactstarter.form.io' ?
        <div className="col-md-12">
          <div className="alert alert-warning">You can register a regular user here. To register an Admin user, go to your project in the form.io portal, navigate to the Admin resource and create an Admin.</div>
        </div>
        : null
      }

      <div className="col-lg-6 col-md-6">
        <div className="panel panel-primary login-container card">
          <div className="panel-heading panel-heading-primary card-header">
            Login
          </div>
          <div className="panel-body card-body">
            <Login />
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6">
        <div className="panel panel-primary register-container card">
          <div className="panel-heading card-header">
            Register
          </div>
          <div className="panel-body card-body">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
