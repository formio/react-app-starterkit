import { combineReducers } from 'redux'
import { auth } from './auth';
import { form } from './form';
import { forms } from './forms';
import { submission } from './submission';
import { submissions } from './submissions';

export default combineReducers({
  auth,
  form: form({name: 'form'}),
  forms: forms({name: 'forms', tag: 'common'}),
  submission: submission({name: 'submission'}),
  submissions: submissions({name: 'submissions'})
})
