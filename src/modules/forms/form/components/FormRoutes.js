import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FormProvider } from '../formContext';
import { FormsProvider } from '../formsContext';
import FormPage from './FormPage';
import FormsList from './FormsList';
import FormCreate from './FormCreate';

const FormRoutes = () => (
  <FormsProvider>
    <Switch>
      <Route exact path="/form" component={FormsList} />
      <Route exact path="/form/create">
        <FormProvider>
          <FormCreate />
        </FormProvider>
      </Route>
      <Route path="/form/:formId">
        <FormProvider>
          <FormPage />
        </FormProvider>
      </Route>
    </Switch>
  </FormsProvider>
)

export default FormRoutes;
