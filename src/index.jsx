import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FormioRoutes, FormioAuth } from 'react-formio';
import { Match } from 'react-router';

// Set up styling.
import 'react-widgets/dist/css/react-widgets.css';
import 'react-formio/formio.css';
import './assets/index.scss';

import Config from './config';
import Header from './components/Header';
import Router from './components/Router';
import HomePage from './containers/HomePage';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);

// Initialize Authentication.
new FormioAuth({
  appUrl: Config.appUrl,
  forceAuth: false
});

// Initialize all resources.
let resources = {};
Object.keys(Config.resources).forEach(resource => {
  resources[resource] = new Config.resources[resource].Resource(
    resource,
    Config.resources[resource].form,
    Config.resources[resource].options || {}
  );
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Match pattern="/" exactly render={HomePage} />
          <FormioRoutes />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('formio')
);
