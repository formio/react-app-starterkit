import React from 'react';
import { connect } from 'react-redux';
import { ControlledBrowserRouter as Router } from 'react-router-addons-controlled';
import createBrowserHistory from 'history/createBrowserHistory';

import { NAVIGATE } from './constants';

const history = createBrowserHistory();

const mapStateToProps = (state) => {
  return state.router;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (location, action) => {
      switch (action) {
        case 'SYNC':
        case 'REPLACE':
        case 'PUSH':
        case 'POP':
          dispatch({
            type: NAVIGATE,
            location,
            action
          });
          break;
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ children, location, action, onChange }) => {
  return (
    <Router
      history={history}
      location={location}
      action={action}
      onChange={onChange}
    >
      {children}
    </Router>
  );
});
