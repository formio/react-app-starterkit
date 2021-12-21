import React from 'react';
import { FormEdit as FormEditComponent, Errors } from '@formio/react';
import { useForm, saveForm } from '../formContext';
import { useAlerts } from '../../../alerts';
import _ from 'lodash';

const FormEdit = (props) => {
  const { state: formState, dispatch } = useForm();
  const { addAlert } = useAlerts();

  const onSaveForm = (form) => saveForm(dispatch, form, (err, form) => {
    if (!err) {
      addAlert({ type: 'success', content: 'Form succesfully updated' });
    }
  });

  return (
    <div>
      <h2>Edit {formState.form?.title} Form</h2>
      <hr />
      <Errors errors={[formState.error]} />
      <FormEditComponent form={_.cloneDeep(formState.form)} saveText="Save Form" saveForm={onSaveForm} />
    </div>
  )
};

export default FormEdit;