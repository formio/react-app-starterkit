import React from 'react';
import { Form, Errors } from '@formio/react';
import { useHistory, useParams } from 'react-router';
import { Loading } from '../../../../common';
import { useForm } from '../formContext';
import {
  useSubmission,
  useSubmissions,
  saveSubmission,
  resetSubmissions
} from '../../submission';

const FormView = (props) => {
  const options = { noAlerts: true, template: 'bootstrap3', iconset: 'fa' };

  const {
    submission,
    hideComponents,
    name,
  } = props;

  const history = useHistory();
  const { state: formState } = useForm();
  const { formId } = useParams();
  const { dispatch: dispatchSubmissionAction, state: submissionState } = useSubmission();
  const { dispatch: dispatchSubmissionsAction } = useSubmissions();

  const {
    form,
    error: formError,
    isActive,
    url,
  } = formState;

  const onSubmit = (submission) => {
    saveSubmission(dispatchSubmissionAction, submission, formId, name, (err, submission) => {
      if (!err) {
        dispatchSubmissionsAction(resetSubmissions());
        history.push(`/${formId ? `form/${formId}/submission` : `${name}`}/${submission._id}`);
      }
    });
  };

  if (isActive) {
    return <Loading />;
  }

  return (
    <div>
      <h3>New { form.title }</h3>
      <Errors errors={[formError, submissionState.error]} />
      <Form
        form={form}
        submission={submission}
        url={url}
        options={options}
        hideComponents={hideComponents}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default FormView;
