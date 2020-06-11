import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from '@formio/react';
import { push } from 'connected-react-router'
import {AppConfig, AuthConfig} from '../../config';
import { setUser } from '@formio/react';

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
      dispatch(push(AuthConfig.authState));
      dispatch(setUser(submission));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
