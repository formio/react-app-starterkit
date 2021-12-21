import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './config';
import { Form } from 'react-formio';


ReactDOM.render(
  <Form src="https://wnnngozsxpmqbnz.form.io/requestanappointment" />,
  document.getElementById('root')
);