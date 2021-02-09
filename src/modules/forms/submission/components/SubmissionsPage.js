import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SubmissionsList from './SubmissionsList';
import { SubmissionsProvider } from '../submissionsContext';
import SubmissionPage from './SubmissionPage';
import { SubmissionProvider } from '../submissionContext';

const SubmissionsPage = () => (
  <SubmissionsProvider>
    <Switch>
      <Route
        exact
        path="/form/:formId/submission"
        component={SubmissionsList}
      />
      <Route
        path="/form/:formId/submission/:submissionId"
        render={(props) => <SubmissionProvider><SubmissionPage {...props} /></SubmissionProvider>}
      />
    </Switch>
  </SubmissionsProvider>
)

export default SubmissionsPage;
