import React from 'react';
import { Formio } from '@formio/react';

const SubmissionContext = React.createContext();

const initialState = {
  formId: '',
  id: '',
  isActive: false,
  lastUpdated: 0,
  submission: {},
  url: '',
  error: '',
};

const submissionReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMISSION_CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'SUBMISSION_REQUEST':
      return {
        ...state,
        formId: action.formId,
        id: action.id,
        url: action.url,
        submission: {},
        isActive: true,
      };
    case 'SUBMISSION_SAVE':
      return {
        ...state,
        formId: action.formId,
        id: action.id,
        url: action.url || state.url,
        submission: {},
        isActive: true,
      };
    case 'SUBMISSION_SUCCESS':
      return {
        ...state,
        id: action.submission._id,
        submission: action.submission,
        isActive: false,
        error: '',
      };
    case 'SUBMISSION_FAILURE':
      return {
        ...state,
        isActive: false,
        isInvalid: true,
        error: action.error,
      };
    case 'SUBMISSION_RESET':
      return initialState;
    default:
      return state;
  }
};

export function SubmissionProvider(props) {
  const [state, dispatch] = React.useReducer(submissionReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <SubmissionContext.Provider value={value} {...props} />;
}

export function useSubmission() {
  const context = React.useContext(SubmissionContext);
  if (!context) {
    throw new Error('useSubmission must be used within a SubmissionProvider');
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  }
}

export const clearSubmissionError = () => ({
  type: 'SUBMISSION_CLEAR_ERROR',
});

const requestSubmission = (id, formId,  url) => ({
  type: 'SUBMISSION_REQUEST',
  id,
  formId,
  url,
});

const sendSubmission = (data) => ({
  type: 'SUBMISSION_SAVE',
});

const receiveSubmission = (submission, url) => ({
  type: 'SUBMISSION_SUCCESS',
  submission,
  url,
});

const failSubmission = (error) => ({
  type: 'SUBMISSION_FAILURE',
  error,
});

export const resetSubmission = () => ({
  type: 'SUBMISSION_RESET',
});

export const getSubmission = (dispatch, id, formId, formName, done = () => {}) => {
  const formPath = `/${formId ? `form/${formId}` : `${formName}`}`;
  const url = `${Formio.getProjectUrl()}${formPath}/submission${id ? `/${id}` : ''}`;
  const formio = new Formio(url);

  dispatch(requestSubmission(id, formId, url));

  formio.loadSubmission()
    .then((result) => {
      dispatch(receiveSubmission(result));
      done(null, result);
    })
    .catch((error) => {
      dispatch(failSubmission(error));
      done(error);
    });
};

export const saveSubmission = (dispatch, data, formId, formName, done = () => {}) => {
  console.log(5555)
  dispatch(sendSubmission(data));

  const id = data._id;
  const projectUrl = Formio.getProjectUrl();
  const formPath = `/${formId ? `form/${formId}` : `${formName}`}`;
  const submissionPath = `/submission${id ? `/${id}` : ''}`;
  const url = `${projectUrl}${formPath}${submissionPath}`;

  const formio = new Formio(url);

  formio.saveSubmission(data)
    .then((result) => {
      const url = `${projectUrl}${formPath}/submission/${result._id}`;
      dispatch(receiveSubmission(result, url));
      done(null, result);
    })
    .catch((error) => {
      dispatch(failSubmission(error));
      done(error);
    });
};

export const deleteSubmission = (dispatch, id, formId, formName, done = () => {}) => {
  const formPath = `/${formId ? `form/${formId}` : `${formName}`}`;
  const formio = new Formio(`${Formio.getProjectUrl()}${formPath}/submission/${id}`);

  return formio.deleteSubmission()
    .then(() => {
      dispatch(resetSubmission());
      done(null, true);
    })
    .catch((error) => {
      dispatch(failSubmission(error));
      done(error);
    });
};
