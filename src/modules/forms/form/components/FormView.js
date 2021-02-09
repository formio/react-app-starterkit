import React from 'react';
import { Form, Errors } from 'react-formio';
import { useHistory, useParams } from 'react-router';
import { Loading } from '../../../../common/components';
import { useForm } from '../formContext';
import { 
  useSubmission,
  useSubmissions,
  saveSubmission,
  resetSubmissions
} from '../../submission';

const FormView = (props) => {
  const options = { noAlerts: true, template: 'bootstrap3', iconset: 'fa' };

  const history = useHistory();
  const { state: formState } = useForm();
  const { formId } = useParams();
  const { dispatch: dispatchSubmissionAction } = useSubmission();
  const { dispatch: dispatchSubmissionsAction } = useSubmissions();

  const { 
    form,
    error: formError,
    isActive,
    url,
  } = formState;

  const {
    submission,
    hideComponents,
  } = props;

  const onSubmit = (submission) => {
    saveSubmission(dispatchSubmissionAction, submission, formId, (err, submission) => {
      if (!err) {
        dispatchSubmissionsAction(resetSubmissions());
        history.push(`/form/${formId}/submission/${submission._id}`);
      }
    });
  };

  if (isActive) {
    return <Loading />;
  }

  return (
    <div>
      <h3>New { form.title }</h3>
      <Errors errors={[formError]} />
      <Form
        form={form}
        submission={submission}
        url={url}
        options={{options}}
        hideComponents={hideComponents}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default FormView;
