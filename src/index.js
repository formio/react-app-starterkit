import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import formiojs from 'formiojs';
import FormioProvider from 'react-formio/lib/FormioProvider';
import 'formiojs/dist/formio.full.css';

import configureStore from './app/store/configureStore';
import configureRoutes from './app/routes/configureRoutes';
import resources from './app/resources';

import {AppConfig, AuthConfig} from './config';
import Auth from './app/auth';

import './index.scss';

formiojs.setProjectUrl(AppConfig.projectUrl);
formiojs.setBaseUrl(AppConfig.apiUrl);

const formio = {
  config: AppConfig,
  auth: new Auth(AuthConfig),
  resources: resources
};

const store = configureStore({}, formio);
const routes = configureRoutes(formio);

// Initialize the current user
store.dispatch(formio.auth.actions.init());

ReactDOM.render(
  <Provider store={store}>
    <FormioProvider formio={formio}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </FormioProvider>
  </Provider>,
  document.getElementById('root')
);
