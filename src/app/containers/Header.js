import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {IndexLink} from 'react-router';
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
                    <a role="navigation link" onClick={logout}>
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

  mapStateToProps = (state) => {
    return {
      auth: this.formio.auth.selectors.getAuth(state)
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
