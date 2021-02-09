import { Link, Route, Switch, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSubmission, getSubmission } from '../submissionContext';
import SubmissionView from './SubmissionView';
import SubmissionDelete from './SubmissionDelete';

const SubmissionPage = () => {
  const { formId, submissionId } = useParams();
  const { dispatch } = useSubmission();

  useEffect(() => {
    getSubmission(dispatch, submissionId, formId);
  }, [dispatch, submissionId, formId]);

  const View = () => <SubmissionView readOnly={true} />; 
  const Edit = () => <SubmissionView readOnly={false} />; 

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/submission`}>
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}`}>
          <i className="fa fa-eye"></i> View
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}/edit`}>
          <i className="fa fa-edit"></i> Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}/delete`}>
          <i className="fa fa-trash"></i> Delete
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/form/:formId/submission/:submissionId"
          component={View}
        />
        <Route
          path="/form/:formId/submission/:submissionId/edit"
          component={Edit}
        />
        <Route
          path="/form/:formId/submission/:submissionId/delete"
          component={SubmissionDelete}
        />
      </Switch>
    </div>
  )
};

export default SubmissionPage;
