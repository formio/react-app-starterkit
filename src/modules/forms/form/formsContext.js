import React from 'react';
import { Formio } from '@formio/react';

const FormsContext = React.createContext();

const initialState = {
  error: '',
  forms: [],
  isActive: false,
  pagination: {
    numPages: 0,
    page: 1,
    total: 0,
  },
};

function formsReducer(state, action) {
  switch (action.type) {
    case 'FORMS_RESET':
      return initialState;
    case 'FORMS_REQUEST':
      return {
        ...state,
        error: '',
        forms: [],
        isActive: true,
        pagination: {
          ...state.pagination,
          page: action.page,
        },
      };
    case 'FORMS_SUCCESS': {
      const total = action.forms.serverCount;

      return {
        ...state,
        forms: action.forms,
        isActive: false,
        pagination: {
          ...state.pagination,
          numPages: Math.ceil(total / action.limit),
          total,
        },
      };
    }
    case 'FORMS_FAILURE':
      return {
        ...state,
        error: action.error,
        isActive: false,
      };
    default:
      return state;
  }
}

export function FormsProvider(props) {
  const [state, dispatch] = React.useReducer(formsReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <FormsContext.Provider value={value} {...props} />;
}

export function useForms() {
  const context = React.useContext(FormsContext);
  if (!context) {
    throw new Error('useForms must be used within a FormsProvider');
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  }
}

export const resetForms = () => ({
  type: 'FORMS_RESET',
});

const requestForms = (page, params) => ({
  type: 'FORMS_REQUEST',
  page,
  params,
});

const receiveForms = (forms, limit) => ({
  type: 'FORMS_SUCCESS',
  forms,
  limit,
});

const failForms = (error) => ({
  type: 'FORMS_FAILURE',
  error,
});

const getRequestParams = (limit, query, sort, params, select, page) => {
  const requestParams = { ...query, ...params };

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

export const indexForms = (dispatch, { limit, query, select, sort }, page = 1, params = {}, done = () => {}) => {
  dispatch(requestForms(page, params));

  const formio = new Formio(`${Formio.getProjectUrl()}/form`);
  const requestParams = getRequestParams(limit, query, sort, params, select, page);

  return formio.loadForms({ params: requestParams })
    .then((result) => {
      dispatch(receiveForms(result, limit));
      done(null, result);
    })
    .catch((error) => {
      dispatch(failForms(error));
      done(error);
    });
};
