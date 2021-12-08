import React from 'react';
import { Formio } from '@formio/react';

const SubmissionsContext = React.createContext();

const initialState = {
  error: '',
  formId: '',
  formName: '',
  isActive: false,
  pagination: {
    numPages: 0,
    page: 1,
    total: 0,
  },
  submissions: [],
};

const SubmissionsReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMISSIONS_RESET':
      return initialState;
    case 'SUBMISSIONS_REQUEST':
      return {
        ...state,
        error: '',
        formId: action.formId,
        formName: action.formName,
        isActive: true,
        pagination: {
          ...state.pagination,
          page: action.page,
        },
        submissions: [],
      };
    case 'SUBMISSIONS_SUCCESS': {
      const total = action.submissions.serverCount;

      return {
        ...state,
        isActive: false,
        pagination: {
          ...state.pagination,
          numPages: Math.ceil(total / action.limit),
          total,
        },
        submissions: action.submissions,
      };
    }
    case 'SUBMISSIONS_FAILURE':
      return {
        ...state,
        error: action.error,
        isActive: false,
      };
    default:
      return state;
  }
};

export function SubmissionsProvider(props) {
  const [state, dispatch] = React.useReducer(SubmissionsReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <SubmissionsContext.Provider value={value} {...props} />;
}

export function useSubmissions() {
  const context = React.useContext(SubmissionsContext);
  if (!context) {
    throw new Error('useSubmissions must be used within a SubmissionsProvider');
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  }
}

export const resetSubmissions = () => ({
  type: 'SUBMISSIONS_RESET',
});

const requestSubmissions = (page, params, formId, formName) => ({
  type: 'SUBMISSIONS_REQUEST',
  page,
  params,
  formId,
  formName
});

const receiveSubmissions = (submissions, limit) => ({
  type: 'SUBMISSIONS_SUCCESS',
  submissions,
  limit
});

const failSubmissions = (error) => ({
  type: 'SUBMISSIONS_FAILURE',
  error,
});

const getRequestParams = (limit, query, sort, params, select, page) => {
  const requestParams = {...query, ...params};

  // Ten is the default so if set to 10, don't send.
  if (limit !== 10) {
    requestParams.limit = limit;
  }
  else {
    delete requestParams.limit;
  }

  if (page !== 1) {
    requestParams.skip = (page - 1) * limit;
  }
  else {
    delete requestParams.skip;
  }

  if (select) {
    requestParams.select = select;
  }
  else {
    delete requestParams.select;
  }

  if (sort) {
    requestParams.sort = sort;
  }
  else {
    delete requestParams.sort;
  }

  return requestParams;
}

export const indexSubmissions = (dispatch, page = 0, { limit, query, select, sort },  params = {}, formId, formName, done = () => {}) => {
  dispatch(requestSubmissions(page, params, formId), formName);
  const formPath = `/${formId ? `form/${formId}` : `${formName}`}`;
  const formio = new Formio(`${Formio.getProjectUrl()}${formPath}/submission`);
  const requestParams = getRequestParams(limit, query, sort, params, select, page);

  return formio.loadSubmissions({params: requestParams})
    .then((result) => {
      dispatch(receiveSubmissions(result, limit));
      done(null, result);
    })
    .catch((error) => {
      dispatch(failSubmissions(error));
      done(error);
    });
};
