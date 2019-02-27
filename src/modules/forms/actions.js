import Formiojs from "formiojs/Formio";
import * as types from "./constants";
import { getRoot } from "../selectors";
import { AppConfig } from "../../config";

function requestForms(name) {
  return {
    type: types.FORMS_REQUEST,
    name
  };
}

function receiveForms(name, forms) {
  return {
    type: types.FORMS_SUCCESS,
    forms,
    name
  };
}

function failForms(name, err) {
  return {
    type: types.FORMS_FAILURE,
    error: err,
    name
  };
}

export const index = (name, page = 1, params = {}) => {
  return (dispatch, getState) => {
    dispatch(requestForms(name, page));
    const forms = getRoot('forms', getState());

    if (parseInt(forms.limit) !== 10) {
      params.limit = forms.limit;
    }
    if (page !== 1) {
      params.skip = ((parseInt(page) - 1) * parseInt(forms.limit));
      params.limit = parseInt(forms.limit);
    }
    const formio = new Formiojs(AppConfig.projectUrl + '/form');

    return formio.loadForms({params})
      .then((result) => {
        dispatch(receiveForms(name, result));
      })
      .catch((result) => {
        dispatch(failForms(name, result));
      });
  };
}
