import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import { AppConfig, AuthConfig } from "../../config";

const Register = class extends Component {
  render() {
    return (
      <Form {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    src: AppConfig.projectUrl + '/' + AuthConfig.register.form
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitDone: (submission) => {
      this.router.push('/' + this.formio.auth.config.authState);
      dispatch(this.formio.auth.actions.setUser(submission));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
