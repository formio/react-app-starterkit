import Main from '../Main';
import Home from './Home';

export default function configureRoutes(store, formio) {
  const routes = {
    path: '/',
    component: Main,
    indexRoute: {
      component: Home
    },
    childRoutes: []
  };

  // Routes accessible to anon and auth users.
  let allRoutes = [];
  // Routes accessible to only anon users (like login and register).
  let anonRoutes = [];
  // Routes accessible to only auth users (protected pages that require login).
  let authRoutes = [];

  //for (const key of formio.resources) {
  //  authRoutes = [
  //    ...authRoutes,
  //    ...formio.resources[key].getRoutes(store)
  //  ];
  //}

  // The auth plugin will automatically protect the various routes to ensure authentication state.
  routes.childRoutes = [
    ...routes.childRoutes,
    ...formio.auth.getRoutes(store, allRoutes, anonRoutes, authRoutes)
  ];

  return routes;
}
