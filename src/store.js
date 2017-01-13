import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createInjectStore } from 'redux-injector';

import { default as routerReducer } from './components/Router/reducer';

const devtools = window.devToolsExtension || (() => (noop) => noop);

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools()
  ];

  const store = createInjectStore(
    {
      router: routerReducer
    },
    initialState,
    compose(...enhancers)
  );

  return store;
}
