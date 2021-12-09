import React from 'react';
import { Formio } from '@formio/react';

const FormContext = React.createContext();

const initialState = {
  id: '',
  isActive: false,
  lastUpdated: 0,
  form: {},
  url: '',
  error: '',
};

const formReducer = function(state, action) {
  switch (action.type) {
    case 'FORM_CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'FORM_REQUEST':
      return {
        ...state,
        isActive: true,
        id: action.id,
        form: {},
        url: action.url,
        error: '',
      };
    case 'FORM_SUCCESS':
      return {
        ...state,
        isActive: false,
        id: action.form._id,
        form: action.form,
        url: action.url || state.url,
        error: '',
      };
    case 'FORM_FAILURE':
      return {
        ...state,
        isActive: false,
        isInvalid: true,
        error: action.error,
      };
    case 'FORM_SAVE':
      return {
        ...state,
        isActive: true,
      };
    case 'FORM_RESET':
      return initialState;
    default:
      return state;
  }
}

export function FormProvider(props) {
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state, dispatch]);

  return <FormContext.Provider value={value} {...props} />;
}

export function useForm() {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  }
}

export const clearFormError = () => ({
  type: 'FORM_CLEAR_ERROR',
});

const requestForm = (id, url) => ({
  type: 'FORM_REQUEST',
  id,
  url,
});

const receiveForm = (form, url) => ({
  type: 'FORM_SUCCESS',
  form,
  url,
});

const failForm = (err) => ({
  type: 'FORM_FAILURE',
  error: err,
});

export const resetForm = () => ({
  type: 'FORM_RESET',
});

const sendForm = (form) => ({
  type: 'FORM_SAVE',
  form,
});

export const getForm = (dispatch, id, name, done = () => {}) => {
    const formPath = `/${id ? `form/${id}` : `${name}`}`;
    const path = `${Formio.getProjectUrl()}${formPath}`;
    const formio = new Formio(path);

    dispatch(requestForm(id, path));

    return formio.loadForm()
      .then((result) => {
        dispatch(receiveForm(result));
        done(null, result);
      })
      .catch((result) => {
        dispatch(failForm(result));
        done(result);
      });
};

export const saveForm = (dispatch, form, done = () => {}) => {
  dispatch(sendForm(form));

  const id = form._id;
  const path = `${Formio.getProjectUrl()}/form${id ? `/${id}` : ''}`;
  const formio = new Formio(path);

  formio.saveForm(form)
    .then((result) => {
      const url = `${Formio.getProjectUrl()}/form/${result._id}`;
      dispatch(receiveForm(result, url));
      done(null, result);
    })
    .catch((result) => {
      dispatch(failForm(result));
      done(result);
    });
};

export const deleteForm = (dispatch, id, name, done = () => {}) => {
  const formPath = `/${id ? `form/${id}` : `${name}`}`;
  const path = `${Formio.getProjectUrl()}${formPath}`;
  const formio = new Formio(path);

  return formio.deleteForm()
    .then(() => {
      dispatch(resetForm());
      done();
    })
    .catch((result) => {
      dispatch(failForm(result));
      done(result);
    });
};
