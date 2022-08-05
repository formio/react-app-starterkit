import React, { useState } from 'react';
import { Form, setUser } from '@formio/react';
import { Loading } from '../../../common';
import { AppConfig, AuthConfig } from '../../../config';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router';

const Login = (props) => {
  const { dispatch } = useAuth();
  const [isReady, setIsReady] = useState(false);

  const navigate = useNavigate()

  const loginFormUrl = `${AppConfig.projectUrl}/${AuthConfig.login.form}`;

  const onSubmitDone = (submission) => {
    setUser(submission)(dispatch);
    navigate('/')
  };

  const onFormReady = () => setIsReady(true);

  return (
    <>
      <Form
        {...props}
        src={loginFormUrl}
        onSubmitDone={onSubmitDone}
        formReady={onFormReady}
      />
      { isReady ? null : <Loading /> }
    </>
  );
};

export default Login;
