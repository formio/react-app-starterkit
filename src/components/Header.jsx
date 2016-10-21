import React from 'react';
import { Link } from 'react-router';
import { FormioLogout } from 'react-formio';

export default () => {
  return (
    <div className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#/">StarterKit</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/forms" >Forms</Link>
            </li>
            <li>
              <Link to="/user" >Users</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <FormioLogout>Logout</FormioLogout>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
