import React, { useEffect } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
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
        <Link className="nav-link" to={`/event/${eventId}`}>
          <i className="fa fa-eye"></i> View
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/event/${eventId}/edit`}>
          <i className="fa fa-edit"></i> Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/event/${eventId}/delete`}>
          <i className="fa fa-trash"></i> Delete
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/event/:eventId" component={View}/>
        <Route path="/event/:eventId/edit" component={Edit}/>
        <Route
          path="/event/:eventId/delete"
          render={(props) => <SubmissionDelete {...props} formName="event"/>}
        />
      </Switch>
    </div>
  );
};

export default EventPage;
