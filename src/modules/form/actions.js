import Formiojs from 'formiojs';
import * as types from './constants';

function requestForm(name, id) {
  return {
    type: types.FORM_REQUEST,
    name,
    id
  };
}

function receiveForm(name, form) {
  return {
    type: types.FORM_SUCCESS,
    form,
    name
  };
}

function failForm(name, err) {
  return {
    type: types.FORM_FAILURE,
    error: err,
    name
  };
}

function createForm(name, form) {
  return {
    type: types.FORM_CREATE,
    form,
    name
  }
}

function saveForm(name, form) {
  return {
    type: types.FORM_SAVE,
    form,
    name
  }
}

export function formActions(form) {
  return {
    get: (id = '') => {
      return (dispatch, getState) => {
        // Check to see if the form is already loaded.
        const root = form.selectors.getForm(getState());
        if (root.form.components && root.form.id === id) {
          return;
        }

        dispatch(requestForm(form.config.name, id));

        const formPath = form.config.form || 'form/' + id;

        const formioForm = new Formiojs(form.config.projectUrl + '/' + formPath);

        return formioForm.loadForm()
          .then((result) => {
            dispatch(receiveForm(form.config.name, result));
          })
          .catch((result) => {
            dispatch(failForm(form.config.name, result));
          });
      };
    },
    save: (form) => {

    }
  };
}
