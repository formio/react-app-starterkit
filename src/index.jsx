import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router';
import { Formio, formioReducers, FormioRoutes } from 'react-formio';

import 'react-widgets/dist/css/react-widgets.css';
import 'react-formio/formio.css';
import './assets/index.scss';

import Config from './config';
import Header from './components/Header.jsx';

const store = createStore(
  combineReducers({
    formio: formioReducers()
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="slash">
      <div className="app">
        <Header />
        <div className="container">
          <FormioRoutes />
        </div>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('formio')
);
