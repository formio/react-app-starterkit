import Formiojs from 'formiojs';
import * as types from './constants';
import { AppConfig } from "../../config";

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

export const get = (name, id = '') => {
  return (dispatch, getState) => {
    // Check to see if the form is already loaded.
    const root = form.selectors.getForm(getState());
    if (root.form.components && root.form.id === id) {
      return;
    }

    dispatch(requestForm(name, id));

    const formPath = id ? `${AppConfig.projectUrl}/form/${id}` : `${AppConfig.projectUrl}/${name}`;

    const formioForm = new Formiojs(AppConfig.projectUrl + '/' + formPath);

    return formioForm.loadForm()
      .then((result) => {
        dispatch(receiveForm(name, result));
      })
      .catch((result) => {
        dispatch(failForm(name, result));
      });
  };
};
