import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormsProvider } from '../formsContext';
import { FormProvider } from '../formContext';
import FormPage from './FormPage';
import FormsList from './FormsList';
import FormCreate from './FormCreate';

const FormsPage = () => (
  <FormsProvider>
    <Routes>
      <Route index element={<FormsList/>}/>

      <Route
        path="create"
        element={ <FormProvider><FormCreate  /></FormProvider> }
      />

      <Route
        path=":formId/*"
        element={ <FormProvider><FormPage/></FormProvider> }
      />
    </Routes>
  </FormsProvider>
)

export default FormsPage;
