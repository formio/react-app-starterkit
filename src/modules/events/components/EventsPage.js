import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FormView, getForm, useForm } from '../../forms/form';
import { FormsProvider } from '../../forms/form/formsContext';
import { SubmissionProvider, SubmissionsList, SubmissionsProvider } from '../../forms/submission';
import EventFormError from './EventFormError';
import EventPage from './EventPage';

const EventsPage = () => {
  const { dispatch: dispatchFormEvent } = useForm();

  useEffect(() => {
    getForm(dispatchFormEvent, null, 'event');
  }, [dispatchFormEvent]);

  return (
    <FormsProvider>
      <SubmissionsProvider>
        <Switch>
          <Route
            exact
            path="/event"
            render={(props) => (
              <SubmissionsList
                {...props}
                FormError={EventFormError}
                formName="event"
                getViewPath={(formId, submission) => `/event/${submission._id}`}
                getEditPath={(formId, submission) => `/event/${submission._id}/edit`}
                getDeletePath={(formId, submission) => `/event/${submission._id}/delete`}
                createSubmissionPath={`/event/create`}
              />
            )}
          />
          <Route
            exact
            path="/event/create"
            render={(props) => (
              <SubmissionProvider>
                <FormView {...props} name='event'/>
              </SubmissionProvider>
            )}
          />
          <Route
            path="/event/:eventId"
            render={(props) => (
              <SubmissionProvider>
                <EventPage {...props}/>
              </SubmissionProvider>
            )}
          />
        </Switch>
      </SubmissionsProvider>
    </FormsProvider>
  );
};

export default EventsPage;
