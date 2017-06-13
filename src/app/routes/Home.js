import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {Formio} from 'react-formio';
import Hero from '../containers/Hero';

class Home extends Component {
  render() {
    const {auth, navigate} = this.props;
    navigate();
    return (
      <div>
        <Hero />
        <div className="container">
          { auth.authenticated ?
            <div className="well text-center">
              { auth.user.data ? <h3>You are logged in as <strong>{ auth.user.data.email }</strong>!</h3> : null }
            </div> :
            <Formio src="https://examples.form.io/example" />
          }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
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
)(Home);
