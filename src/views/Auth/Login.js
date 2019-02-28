import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import {AppConfig, AuthConfig} from "../../config";

const Login = class  extends Component {
  render() {
    return (
      <Form {...this.props} />
    );
  }
}

const mapStateToProps = () => {
  return {
    src: AppConfig.projectUrl + '/' + AuthConfig.login.form
  };
}

const mapDispatchToProps = (dispatch) => {
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
)(Login)
