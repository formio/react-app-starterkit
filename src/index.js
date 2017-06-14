import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import formiojs from 'formiojs';
import FormioProvider from 'react-formio/lib/FormioProvider';
import 'formiojs/dist/formio.full.css';

import configureStore from './app/store/configureStore';
import configureRoutes from './app/routes/configureRoutes';

import {AppConfig, AuthConfig} from './config';
import Auth from './app/auth';

import './index.scss';

formiojs.setProjectUrl(AppConfig.projectUrl);
formiojs.setBaseUrl(AppConfig.apiUrl);

const formio = {
  auth: new Auth(AuthConfig)
};

const store = configureStore({}, formio);
const routes = configureRoutes(formio);

ReactDOM.render(
  <Provider store={store}>
    <FormioProvider formio={formio}>
      <Router
        history={hashHistory}
        routes={routes}
      />
    </FormioProvider>
  </Provider>,
  document.getElementById('root')
);
