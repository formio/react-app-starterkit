import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Formio} from 'react-formio';
import FormioView from 'react-formio/lib/FormioView';
import Hero from '../containers/Hero';

export default class HomeView extends FormioView {
  component = class Home extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired
    };

    render() {
      const {auth} = this.props;
      return (
        <div>
          <Hero />
          <div className="container">
            { auth.authenticated ?
              <div className="well text-center">
                { (auth.user && auth.user.data) ?
                  <h3>You are logged in as <strong>{ auth.user.data.email }</strong>!</h3> :
                  null
                }
              </div> :
              <Formio src="https://examples.form.io/example" />
            }
          </div>
        </div>
      );
    }
  }

  mapStateToProps = (state) => {
    return {
      auth: this.formio.auth.selectors.getAuth(state)
    };
  }

  mapDispatchToProps = () => {
    return {};
  }
}
