import React from 'react';
import { Errors } from '@formio/react';
import { useNavigate , useParams } from 'react-router';
import { Confirm } from '../../../../common';
import { useForm } from '../../form';
import { useSubmission, deleteSubmission } from '../submissionContext'
import { useSubmissions, resetSubmissions } from '../submissionsContext';

const SubmissionDelete = ({ formName }) => {
  const navigate = useNavigate ();
  const { formId, submissionId, eventId } = useParams();
  const { state: submissionState, dispatch: dispatchSubmissionAction } = useSubmission();
  const { dispatch: dispatchSubmissionsAction } = useSubmissions();
  const { state: formState } = useForm();

  const onYes = () => {
    deleteSubmission(dispatchSubmissionAction, submissionId || eventId, formId, formName, (err) => {
      if (!err) {
        dispatchSubmissionsAction(resetSubmissions());
        navigate(`/${formId ? `form/${formId}/submission` : `${formName}`}`);
      }
    });
  };

  const onNo = () => {
    navigate(-1)
  };

  const message = `Are you sure you wish to delete the submission '${submissionId || eventId}'?`;

  return (
    <div>
      <Errors errors={[submissionState.error, formState.error]} />
      <Confirm
        message={message}
        onYes={onYes}
        onNo={onNo}
      />
    </div>
  )
};

export default SubmissionDelete;
