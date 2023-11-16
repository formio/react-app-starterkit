import React from 'react';
import { FormEdit, Errors } from '@formio/react';
import { useNavigate } from 'react-router';
import _ from 'lodash';
import { useForm, saveForm } from '../formContext';
import { useAlerts } from '../../../alerts';

const FormCreate = () => {
  const navigate = useNavigate ();
  const { state: formState, dispatch: dispatchFormAction } = useForm();
  const { addAlert } = useAlerts();

  const onSaveForm = (form) => {
    if (!form.tags || _.isEmpty(form.tags)) {
      form.tags = ['common'];
    }
    saveForm(dispatchFormAction, form, (err, form) => {
      if (!err) {
        addAlert({ type: 'success', content: 'Form succesfully creaed' });
        navigate(`/form/${form._id}`,{replace:true});
      }
    })
  };

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
