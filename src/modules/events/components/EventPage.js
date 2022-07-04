import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
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
        <Link className="nav-link" to={`/event`}>
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={``}>
          <i className="fa fa-eye"></i> View
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`edit`}>
          <i className="fa fa-edit"></i> Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`delete`}>
          <i className="fa fa-trash"></i> Delete
        </Link>
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
