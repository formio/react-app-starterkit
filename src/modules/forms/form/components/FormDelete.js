import React from 'react';
import { Errors } from 'react-formio';
import { useHistory, useParams } from 'react-router';
import { Confirm } from '../../../../common';
import { useForm, deleteForm } from '../formContext';
import { useForms, resetForms } from '../formsContext';

const FormDelete = () => {
  const history = useHistory();
  const { state: formState, dispatch: dispatchFormAction } = useForm();
  const { dispatch: dispatchFormsAction } = useForms();
  const { formId } = useParams();

  const message = `Are you sure you wish to delete the form '${formState.form.title}'?`;

  const onYes = () => {
    deleteForm(dispatchFormAction, formId, (err) => {
      if (!err) {
        dispatchFormsAction(resetForms());
        history.push('/form');
      }
    });
  };

  const onNo = () => {
    const prevState = history[history.length - 2];
    if (prevState) {
      history.push(prevState);
    }
  };

  return (
    <div>
      <Errors errors={[formState.error]} />
      <Confirm message={message} onYes={onYes} onNo={onNo} />
    </div>
  )
};

export default FormDelete;
