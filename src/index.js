import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './App'

import {Formio as formiojs} from 'formiojs';
import {AppConfig} from './config';

import './styles.scss'

formiojs.setProjectUrl(AppConfig.projectUrl);
formiojs.setBaseUrl(AppConfig.apiUrl);

// Initialize the current user
// store.dispatch(formio.authactions.init());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
