import { combineReducers } from 'redux'
import { auth } from './auth';
import { form } from './form';
import { forms } from './forms';

export default combineReducers({
  auth,
  form: form({name: 'form'}),
  forms: forms({name: 'forms', tag: 'common'})
})
