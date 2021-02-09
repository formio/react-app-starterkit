import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FormsProvider } from '../formsContext';
import { FormProvider } from '../formContext';
import FormPage from './FormPage';
import FormsList from './FormsList';
import FormCreate from './FormCreate';

const FormsPage = () => (
  <FormsProvider>
    <Switch>
      <Route exact path="/form" component={FormsList}/>
      <Route
        exact
        path="/form/create"
        render={ (props) => <FormProvider><FormCreate {...props} /></FormProvider> }
      />
      <Route
        path="/form/:formId"
        render={ (props) => <FormProvider><FormPage {...props} /></FormProvider> }
      />
    </Switch>
  </FormsProvider>
)

export default FormsPage;
