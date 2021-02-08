import React, {} from 'react';
import Hero from '../Hero/Hero';
import { useAuth } from '../../../modules/auth';

const Home = (props) => {
  const { state: authState } = useAuth();

  return (
    <div>
      <Hero />
      <div className="container">
        { authState.authenticated ? (
          <div className="well text-center">
            { 
              authState.user && authState.user.data ?
                (
                  <h3>
                    You are logged in as&nbsp;<strong>{ authState.user.data.email }</strong>!
                  </h3>
                )
                : null
            }
          </div>)
          : null
        }
      </div>
    </div>
  );
};

export default Home;
