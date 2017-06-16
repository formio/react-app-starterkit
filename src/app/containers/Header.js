import React, {Component} from 'react';
import {formioConnect as connect} from 'react-formio/lib/formioConnect';
import {PropTypes} from 'prop-types';
import {IndexLink} from 'react-router';
import NavLink from '../components/NavLink';

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
              <NavLink exact to="/" role="navigation button">
                <span className="glyphicon glyphicon-home" />
              </NavLink>
              { auth.is.administrator ?
                <NavLink to="/user" role="navigation link">
                  <span className="glyphicon glyphicon-users" /> Users
                </NavLink> : null
              }
              { auth.authenticated ?
                <NavLink to="/event" role="navigation link">
                  <span className="glyphicon glyphicon-calendar" /> Events
                </NavLink> : null
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              { auth.authenticated ?
                <li>
                  <a role="navigation link" onClick={navigate('home')}>
                    <span className="glyphicon glyphicon-off" /> Logout
                  </a>
                </li> :
                <NavLink to="/auth" role="navigation link">
                  Login | Register
                </NavLink>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    auth: ownProps.formio.auth.selectors.getUser(state)
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
