import React, { useEffect, useCallback, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import { SubmissionGrid, Errors } from 'react-formio';
import { Loading } from '../../../../common/components';
import { useForm } from '../../form';
import { useSubmissions, indexSubmissions } from '../submissionsContext';

const SubmissionsList = (props) => {
  const {
    FormError,
    formName,
    getViewPath,
    getEditPath,
    getDeletePath,
    createSubmissionPath,
  } = props;
  const history = useHistory();
  const { formId } = useParams();
  const [requestParams, setRequestParams] = useState({
    limit: 10,
    query: {},
    select: '',
    sort: '',
  });
  const { state: submissionsState, dispatch: dispatchSubmissionsAction } = useSubmissions();
  const { state: formState } = useForm();
  
  const onAction = (submission, action) => {
    switch(action) {
      case 'view':
      case 'row':
        history.push(getViewPath ? getViewPath(formId, submission) : `/form/${formId}/submission/${submission._id}`);
        break;
      case 'edit':
        history.push(getEditPath ? getEditPath(formId, submission) : `/form/${formId}/submission/${submission._id}/edit`);
        break;
      case 'delete':
        history.push(getDeletePath ? getDeletePath(formId, submission) : `/form/${formId}/submission/${submission._id}/delete`);
        break;
      default:
    }
  };

  const getSubmissions = useCallback(
    (page, query) => indexSubmissions(dispatchSubmissionsAction, page, requestParams, query, formId, formName),
    [dispatchSubmissionsAction, formId, formName, requestParams],
  );

  const onPageSizeChanged = (pageSize) => {
    setRequestParams({ ...requestParams, limit: pageSize });
  };

  useEffect(() => {
   getSubmissions(1);
  }, [formId, getSubmissions]);

  const isLoading = formState.isActive || submissionsState.isActive;

  if (isLoading) {
    return (
      <Loading />
    );
  }

  const MainContent = () =>  (
    <div className='form-index'>
      <Errors errors={[formState.error, submissionsState.error]} />
      <SubmissionGrid
        submissions={{ ...submissionsState, ...requestParams }}
        form={formState.form}
        onAction={onAction}
        getSubmissions={getSubmissions}
        onPageSizeChanged={onPageSizeChanged}
      />
      <Link className='btn btn-primary' to={createSubmissionPath || `/form/${formId || formState.id}`}>
        <i className='glyphicon glyphicon-plus fa fa-plus' aria-hidden='true'></i>
        New {formState.form?.title}
      </Link>
    </div>
  );

  if (formState.error && FormError) {
    return( 
      <FormError error={formState.error}>
        <MainContent />
      </FormError>
    );
  }

  return <MainContent />;
}

export default SubmissionsList;
