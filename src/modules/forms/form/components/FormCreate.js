import React from 'react';
import { FormEdit, Errors } from '@formio/react';
import { useNavigate  } from 'react-router';
import { useForm, saveForm } from '../formContext';

const FormCreate = () => {
  const navigate = useNavigate ();
  const { state: formState, dispatch: dispatchFormAction } = useForm();

  const onSaveForm = (form) => saveForm(dispatchFormAction, form, (err, form) => {
      if (!err) {
        navigate(`/form/${form._id}`,{replace:true});
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
