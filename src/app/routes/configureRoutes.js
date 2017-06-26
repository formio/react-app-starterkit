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

  // Do a first pass to build all child routes. (This won't work for 2 layers deep. Need better solution.)
  let dependentRoutes = {};
  for (let key of Object.keys(formio.resources)) {
    const resource = formio.resources[key];
    if (resource.config.parents.length) {
      const parent = resource.config.parents[resource.config.parents.length - 1];
      dependentRoutes[parent] = dependentRoutes[parent] || [];
      dependentRoutes[parent] = dependentRoutes[parent].concat(resource.getRoutes());
    }
  }

  // Build all root level routes.
  for (let key of Object.keys(formio.resources)) {
    const resource = formio.resources[key];
    if (resource.config.parents.length === 0) {
      authRoutes = [
        ...authRoutes,
        ...resource.getRoutes(dependentRoutes[key])
      ];
    }
  }

  // The auth plugin will automatically protect the various routes to ensure authentication state.
  routes.childRoutes = [
    ...routes.childRoutes,
    ...formio.auth.getRoutes(allRoutes, anonRoutes, authRoutes)
  ];

  return routes;
}
