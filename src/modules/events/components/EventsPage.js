import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route
            index
            element={ (
              <SubmissionsList
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
            path="create"
            element={(
              <SubmissionProvider>
                <FormView name='event'/>
              </SubmissionProvider>
            )}
          />
          <Route
            path=":eventId"
            element={(
              <SubmissionProvider>
                <EventPage />
              </SubmissionProvider>
            )}
          />
        </Routes>
      </SubmissionsProvider>
    </FormsProvider>
  );
};

export default EventsPage;
