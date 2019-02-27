import Formiojs from 'formiojs';
import * as types from './constants';
import { AppConfig } from "../../config";

function requestSubmissions(name, page, formId) {
  return {
    type: types.SUBMISSIONS_REQUEST,
    name,
    page,
    formId
  };
}

function receiveSubmissions(name, submissions) {
  return {
    type: types.SUBMISSIONS_SUCCESS,
    submissions,
    name
  };
}

function failSubmissions(name, err) {
  return {
    type: types.SUBMISSIONS_FAILURE,
    error: err,
    name
  };
}

export const index = (name, page = 0, params = {}, formId = '') => {
  return (dispatch, getState) => {
    dispatch(requestSubmissions(name, page, formId));
    const submissions = form.selectors.getSubmissions(getState());

    if (parseInt(submissions.limit) !== 10) {
      params.limit = submissions.limit;
    }
    if (page !== 0) {
      params.skip = ((parseInt(page)) * parseInt(submissions.limit));
      params.limit = parseInt(submissions.limit);
    }
    else {
      delete params.skip;
    }
    const formio = new Formiojs(AppConfig.projectUrl + '/' + (formId ? 'form/' + formId : name) + '/submission');

    return formio.loadSubmissions({params})
      .then((result) => {
        dispatch(receiveSubmissions(name, result));
      })
      .catch((result) => {
        dispatch(failSubmissions(name, result));
      });
  };
};
