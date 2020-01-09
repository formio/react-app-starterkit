import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { initAuth, Formio as ReactFormio, Components } from 'react-formio';
import { AppConfig } from './config';
import { Formio } from 'formiojs';
import components from './components';
import App from './App'

import uswds from '@formio/uswds';
import vpat from '@formio/vpat';
import './styles.scss'

Formio.use(uswds);
Formio.use(vpat);

ReactFormio.setProjectUrl(AppConfig.projectUrl);
ReactFormio.setBaseUrl(AppConfig.apiUrl);
Components.setComponents(components);

// Initialize the current user
store.dispatch(initAuth());

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
