import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import ProtectAnon from './ProtectAnon';
import ProtectAuth from './ProtectAuth';

export default (config, allRoutes = [], anonRoutes = [], authRoutes = []) => [
  ...allRoutes,
  {
    component: ProtectAnon,
    childRoutes: [
      ...anonRoutes,
      {
        path: config.path,
        component: config.Auth || Auth,
        indexRoute: {
          component: Login
        },
        childRoutes: [
          {
            path: 'login',
            component: config.Login || Login
          },
          {
            path: 'register',
            component: config.Register || Register
          }
        ]
      }
    ]
  },
  {
    component: ProtectAuth,
    childRoutes: authRoutes
  }
];
