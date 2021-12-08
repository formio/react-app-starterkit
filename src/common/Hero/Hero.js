import React from 'react';
import reactLogo from '../../assets/reactjs-icon.svg';

const Hero = () => {
  const Title = () => (
    <>
      <h2 className="title">
        Welcome to your &lt;
        <span className="text-blue">form</span>.<span className="text-green">io</span>
        &gt; application!
      </h2>
      <h3>
        using <img alt="React" src={reactLogo} className="hero-image"/> React
      </h3>
    </>
  );

  return (
    <div className="jumbotron text-center" style={{marginTop: '-40px'}}>
      <Title/>

      <div className="row">
        <div className="col-sm-12 col-sm-offset-3 text-center">
          <p className="lead">
            You can easily embed your Forms and Resources into this application using.
          </p>

          <div>
            <pre><code>{'<Form src="https://examples.form.io/example" />'}</code></pre>
          </div>

          <p className="lead">Need Help?</p>

          <ul className="list-inline">
            <li className="mt-2">
              <a
                className="btn btn-lg btn-success"
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/formio/react"
              >
                Embedding
              </a>
            </li>
            <li className="mt-2">
              <a
                className="btn btn-lg btn-success"
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
