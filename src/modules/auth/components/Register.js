import React, { useState } from 'react';
import { Form, setUser } from '@formio/react';
import { Loading } from '../../../common';
import { AppConfig, AuthConfig } from '../../../config';
import { useAuth } from '../authContext';

const Register = (props) => {
  const { dispatch } = useAuth();
  const [isReady, setIsReady] = useState(false);
  const registerFormUrl = `${AppConfig.projectUrl}/${AuthConfig.register.form}`;

  const onSubmitDone = (submission) => {
    setUser(submission)(dispatch);
  };

  const onFormReady = () => setIsReady(true);

  return (
    <>
      <Form
        {...props}
        src={registerFormUrl}
        onSubmitDone={onSubmitDone}
        formReady={onFormReady}
      />
      { isReady ? null : <Loading /> }
    </>
  );
};

export default Register;
