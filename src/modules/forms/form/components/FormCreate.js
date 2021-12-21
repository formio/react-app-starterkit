import React from 'react';
import { FormEdit, Errors } from '@formio/react';
import { useHistory } from 'react-router';
import { useForm, saveForm } from '../formContext';

const FormCreate = () => {
  const history = useHistory();
  const { state: formState, dispatch: dispatchFormAction } = useForm();

  const onSaveForm = (form) => saveForm(dispatchFormAction, form, (err, form) => {
      if (!err) {
        history.push(`/form/${form._id}`);
        // TODO: Show success alert
      }
    });

  const form = { display: 'form' };
  
  return (
    <div>
      <h2>Create Form</h2>
      <hr />
      <Errors errors={[formState.error]} />
      <FormEdit saveForm={onSaveForm} form={form} saveText='Create Form' />
    </div>
  );
};

export default FormCreate;
