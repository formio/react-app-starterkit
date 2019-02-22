import Formiojs from "formiojs";
import * as types from "./constants";

function requestForms(name, tag) {
  return {
    type: types.FORMS_REQUEST,
    name,
    tag
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

export function formsActions(form) {
  return {
    index: (tag, page = 1) => {
      return (dispatch, getState) => {
        dispatch(requestForms(form.config.name, tag, page));
        const forms = form.selectors.getForms(getState());

        let params = {};
        if (tag) {
          params.tags = tag;
        }
        if (parseInt(forms.limit) !== 10) {
          params.limit = forms.limit;
        }
        if (page !== 1) {
          params.skip = ((parseInt(page) - 1) * parseInt(forms.limit));
          params.limit = parseInt(forms.limit);
        }
        const formio = new Formiojs(form.config.projectUrl + '/form');

        return formio.loadForms({params})
          .then((result) => {
            dispatch(receiveForms(form.config.name, result));
          })
          .catch((result) => {
            dispatch(failForms(form.config.name, result));
          });
      };
    }
  };
}
