import React from 'react';
import Hero from '../Hero/Hero';
import { useAuth } from '../../modules/auth';

const Home = () => {
  const { state: authState } = useAuth();

  const Greeting = () => {
    if (authState.user && authState.user.data) {
      return (
        <h3>
          You are logged in as&nbsp;<strong>{ authState.user.data.email }</strong>!
        </h3>
      );
    }
  };

  return (
    <div>
      <Hero/>
      <div className="container">
        { authState.authenticated ? (
          <div className="well text-center">
            <Greeting/>
          </div>)
          : null
        }
      </div>
    </div>
  );
};

export default Home;
