import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/reactjs-icon.svg';
import { useAuth } from '../../modules/auth';

const Hero = () => {
  const { state: authState } = useAuth();

  const Title = () => (
    <>
      <h1 className="title">
        Welcome to your
        <span className="font-weight-bold"> Form.io </span>
        application!
      </h1>
      <h3>
        using <img alt="React" src={reactLogo} className="hero-image"/> React
      </h3>
    </>
  );

  return (
    <div className="text-center" >
      <Title/>
      { authState.authenticated ? (
          <div className="card-deck text-left mb-5 d-flex justify-content-center">
            <Link to="/form/create" className="card rounded border-dark shadow-sm" style={{maxWidth: "18rem"}}>
              <div className='card-body'>
                <h3 className="card-title"><i className="fa fa-plus" aria-hidden="true"></i> Create Form</h3>
                <p className="card-text">Creating a new Form using Form Builder.</p>
              </div>
            </Link>
            <Link to="/form" className="card rounded border-dark shadow-sm" style={{maxWidth: "18rem"}}>
              <div className="card-body">
                <h3 className="card-title"><i className="fa fa-list" aria-hidden="true"></i> Forms</h3>
                <p className="card-text">Displaying a list of forms, editing forms, viewing data.</p>
              </div>
            </Link>
          </div>)
          : null
      }

      <div className="row">
        <div className="col-sm-12 col-sm-offset-3 text-center">
          <p className="lead">
            You can easily embed your Forms and Resources into this application using.
          </p>

          <div>
            <pre><code>{'<Form src="https://examples.form.io/example" />'}</code></pre>
          </div>

          <p className="lead">Need Help?</p>

          <ul className="list-inline d-flex justify-content-center">
            <li className="mr-2">
              <a
                className="btn btn-lg btn-success rounded"
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/formio/react"
              >
                Embedding
              </a>
            </li>
            <li className="ml-2">
              <a
                className="btn btn-lg btn-success rounded"
                target="_blank" rel="noopener noreferrer"
                href="http://help.form.io"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
