import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { initAuth } from 'react-formio';
import { useAuth, AuthPage } from './modules/auth';
import { FormsPage } from './modules/forms/form';
import { Footer, Header, Home } from './common/components';
import { AppConfig } from './config';
import './App.scss';

function App() {
  const { dispatch } = useAuth();
  
  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>

      <div className="container" id="main">
        { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
          <div className="alert alert-warning">This app is still configured to use the default project. Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js</div>
          : null
        }
        <Route exact path="/" component={Home} />
        <Route path="/form" component={FormsPage} />
        {/*<Route path="/event" component={Event} /> */}
        <Route path="/auth" component={AuthPage} />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
