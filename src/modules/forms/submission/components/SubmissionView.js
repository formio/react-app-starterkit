import React from 'react';
import { Form, Errors } from 'react-formio';
import { Loading } from '../../../../common/components';
import { useSubmission, saveSubmission } from '../submissionContext';
import { useSubmissions, resetSubmissions } from '../submissionsContext';
import { useForm } from '../../form/formContext';
import { useHistory, useParams } from 'react-router';

const SubmissionView = ({ hideComponents, readOnly }) => {
  const { formId } = useParams();
  const history = useHistory();
  const { state: formState } = useForm();
  const { state: submissionState, dispatch: dispatchSubmissionAction } = useSubmission();
  const { dispatch: dispatchSubmissionsAction } = useSubmissions();

  const onSubmit = (submission) => {
    saveSubmission(dispatchSubmissionAction, submission, formId, (err, submission) => {
      if (!err) {
        dispatchSubmissionsAction(resetSubmissions('submission'));
        history.push(`/form/${formId}/submission/${submission._id}`);
      }
    });
  }

  const isLoading = formState.isActive || submissionState.isActive;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3>View { formState.form?.title } Submission</h3>
      <Errors errors={[formState.error, submissionState.error]} />
      <Form
        form={formState.form}
        submission={submissionState.submission}
        url={submissionState.url}
        hideComponents={hideComponents}
        onSubmit={onSubmit}
        options={{ template: 'bootstrap3', iconset: 'fa', readOnly }}
      />
    </div>
  );
};

export default SubmissionView;
