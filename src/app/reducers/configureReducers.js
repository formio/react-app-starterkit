import {combineReducers} from 'redux';

export default function configureReducers(formio) {
  // Add in reducers from various formio components.
  const reducers = {};

  reducers[formio.auth.config.storeKey] = formio.auth.reducers.authReducer();

  for (let key of Object.keys(formio.resources)) {
    reducers[key] = formio.resources[key].reducers;
  }

  return combineReducers(reducers);
}
