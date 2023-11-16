import React, { useEffect } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useSubmission, getSubmission, SubmissionView, SubmissionDelete } from '../../forms/submission';

const EventPage = (props) => {
  const { eventId } = useParams();

  const { dispatch: dispatchSubmissionEvent } = useSubmission();

  useEffect(() => {
    getSubmission(dispatchSubmissionEvent, eventId, null, 'event');
  }, [eventId, dispatchSubmissionEvent]);

  const View = () => <SubmissionView readOnly={true} formName="event"/>; 
  const Edit = () => <SubmissionView readOnly={false} formName="event"/>;

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" end to={`/event`}>
          <i className="fa fa-chevron-left"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" end to={``}>
          <i className="fa fa-eye"></i> View
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`edit`}>
          <i className="fa fa-edit"></i> Edit
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`delete`}>
          <i className="fa fa-trash"></i> Delete
        </NavLink>
      </li>
    </ul>
  );

return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<View />}/>
        <Route path="edit" element={<Edit />}/>
        <Route
          path="delete"
          element={(<SubmissionDelete formName={'event'} />)}
        />
      </Routes>
    </div>
  );
};

export default EventPage;
