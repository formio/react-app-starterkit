import { combineReducers } from 'redux'
import { auth, form, forms, submission, submissions } from 'react-formio';

export default combineReducers({
  auth: auth(),
  form: form({name: 'form'}),
  forms: forms({name: 'forms', query: {type: 'form'}}),
  submission: submission({name: 'submission'}),
  submissions: submissions({name: 'submissions'})
})
