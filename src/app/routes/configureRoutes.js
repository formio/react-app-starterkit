import Main from '../Main';
import Home from '../views/Home';

export default function configureRoutes(formio) {
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

  for (let key of Object.keys(formio.resources)) {
    authRoutes = [
      ...authRoutes,
      ...formio.resources[key].getRoutes()
    ];
  }

  // The auth plugin will automatically protect the various routes to ensure authentication state.
  routes.childRoutes = [
    ...routes.childRoutes,
    ...formio.auth.getRoutes(allRoutes, anonRoutes, authRoutes)
  ];

  return routes;
}
