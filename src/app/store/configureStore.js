import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import configureReducers from '../reducers/configureReducers';

const devtools = window.devToolsExtension || (() => (noop) => noop);

export default function configureStore(initialState, formio) {
  const rootReducer = configureReducers(formio);

  const middlewares = [
    thunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools()
  ];

  const store = createStore(rootReducer, initialState, compose(...enhancers));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
