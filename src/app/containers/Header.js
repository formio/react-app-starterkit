import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

class Header extends Component {
  render() {
    const {auth, navigate} = this.props;
    return (
      <nav className="navbar navbar-default navbar-static-top">
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
            <a className="navbar-brand"><img className="logo" alt="Form.io" src="https://form.io/assets/images/formio-logo.png" /></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a role="navigation button" onClick={navigate('home')}>
                  <span className="glyphicon glyphicon-home" />
                </a>
              </li>
              { auth.is.administrator ?
                <li>
                  <a role="navigation link" nClick={navigate('user')}>
                    <span className="glyphicon glyphicon-users" /> Users
                  </a>
                </li> : null
              }
              { auth.authenticated ?
                <li>
                  <a role="navigation link" onClick={navigate('event')}>
                    <span className="glyphicon glyphicon-calendar" /> Events
                  </a>
                </li> : null
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              { auth.authenticated ?
                <li>
                  <a role="navigation link" onClick={navigate('home')}>
                    <span className="glyphicon glyphicon-off" /> Logout
                  </a>
                </li> :
                <li>
                  <a role="navigation link" onClick={navigate('auth')}>Login | Register</a>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {
    auth: {authenticate: false, is: {administrator: false}}
  };
}

function mapDispatchToProps() {
  return {
    // actions: bindActionCreators(TodoActions, dispatch),
    navigate: () => {}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
