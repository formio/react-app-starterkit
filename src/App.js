import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { initAuth } from '@formio/react';
import { useAuth, AuthPage } from './modules/auth';
import { FormProvider, FormsPage } from './modules/forms/form';
import { Footer, Header, Home, Loading, Modal } from './common';
import { AppConfig } from './config';
import './App.scss';
import EventsPage from './modules/events/components/EventsPage';
import { Alerts, AlertsProvider } from './modules/alerts';

function App() {
  const { dispatch, state: { isActive } } = useAuth();

  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  return (
    <>
      { isActive ?
          (
            <Modal className="alert alert-info">
              <div className="d-flex flex-column align-items-center">
                <Loading style={{ marginBottom: ' 10px' }}/>
                Logging In...
              </div>
            </Modal>
          )
          : null
      }
      <div className="App">
        <Header/>
        <AlertsProvider>
          <Alerts/>
          <div className="container" id="main">
            { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
                <div className="alert alert-warning">
                  This app is still configured to use the default project.
                  Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js
                </div>
                : null
              }
            <Route exact path="/" component={Home} />
            <Route path="/form" component={FormsPage} />
            <Route path="/event" render={(props) => <FormProvider><EventsPage {...props} /></FormProvider>} />
            <Route path="/auth" component={AuthPage} />
          </div>
        </AlertsProvider>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
