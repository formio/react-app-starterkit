import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSubmission, getSubmission } from '../submissionContext';
import SubmissionView from './SubmissionView';
import SubmissionDelete from './SubmissionDelete';
import { useForm } from '../../form/formContext';

const SubmissionPage = () => {
  const { formId, submissionId } = useParams();
  const { dispatch } = useSubmission();
  const { state: formState } = useForm();

  useEffect(() => {
    getSubmission(dispatch, submissionId, formId);
  }, [dispatch, submissionId, formId]);

  const View = () => <SubmissionView readOnly={true} />; 
  const Edit = () => <SubmissionView readOnly={false} />; 

  const Navbar = () => (
    <ul className="nav nav-tabs mb-3 mt-3">
      <li className="nav-item">
        <NavLink className="nav-link" end to={`/form/${formId}/submission`}>
          <i className="fa fa-chevron-left"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" end to={`/form/${formId}/submission/${submissionId}`}>
          <i className="fa fa-eye"></i> View
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`/form/${formId}/submission/${submissionId}/edit`}>
          <i className="fa fa-edit"></i> Edit
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`/form/${formId}/submission/${submissionId}/delete`}>
          <i className="fa fa-trash"></i> Delete
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <h3>{ formState.form?.title } › Submission</h3>
      <Navbar />
      <Routes>
        <Route
         index
          element={<View/>}
        />
        <Route
          path="edit"
          element={<Edit/>}
        />
        <Route
          path="delete"
          element={<SubmissionDelete/>}
        />
      </Routes>
    </div>
  )
};

export default SubmissionPage;
