import React from 'react';
import { auth } from '@formio/react';

const AuthContext = React.createContext();

const initialState = {
  init: false,
  isActive: false,
  user: null,
  authenticated: false,
  submissionAccess: {},
  formAccess: {},
  projectAccess: {},
  roles: {},
  is: {},
  error: '',
};

const authReducer = auth();

export function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  }
}
