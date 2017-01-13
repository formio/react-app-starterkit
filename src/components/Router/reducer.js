import createBrowserHistory from 'history/createBrowserHistory';
import { NAVIGATE } from './constants';

const history = createBrowserHistory();

const initialState = {
  location: history.location,
  action: history.action
};

export default (state = initialState, action) => {
  if (action.type === NAVIGATE) {
    return Object.assign({}, state, {
      location: action.location,
      action: action.action
    });
  }
  else {
    return state;
  }
};
