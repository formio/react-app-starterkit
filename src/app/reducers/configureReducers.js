import {combineReducers} from 'redux';

export default function configureReducers(formio) {
  return combineReducers({
    [formio.auth.config.storeKey]: formio.auth.reducers.authReducer
  });
}
