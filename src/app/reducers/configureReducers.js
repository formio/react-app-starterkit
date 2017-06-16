import {combineReducers} from 'redux';

export default function configureReducers(formio) {
  // Add in reducers from various formio components.
  return combineReducers({
    [formio.auth.config.storeKey]: formio.auth.reducers.authReducer
  });
}
