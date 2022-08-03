import { Route, Routes } from 'react-router-dom';
import React from 'react';
import SubmissionsList from './SubmissionsList';
import { SubmissionsProvider } from '../submissionsContext';
import SubmissionPage from './SubmissionPage';
import { SubmissionProvider } from '../submissionContext';

console.log("Do NOT FORRGET")
const SubmissionsPage = () => (
  <SubmissionsProvider>
    <Routes>
      <Route
        index
        element={<SubmissionsList/>}
      />
      <Route
    
        path=":submissionId/*"
        element={<SubmissionProvider><SubmissionPage /></SubmissionProvider>}
      />
    </Routes>
  </SubmissionsProvider>
)

export default SubmissionsPage;
