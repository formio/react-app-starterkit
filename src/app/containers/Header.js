import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  };

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
            <IndexLink className="navbar-brand" to="/"><img className="logo" alt="Form.io" src="https://form.io/assets/images/formio-logo.png" /></IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <IndexLink role="navigation button" to="/">
                  <span className="glyphicon glyphicon-home" />
                </IndexLink>
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
                  <Link to="/auth/login">Login | Register</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

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
