import Main from '../Main';
import Home from './Home';

export default function configureRoutes(formio) {
  const routes = {
    path: '/',
    component: Main,
    indexRoute: {
      component: Home
    },
    childRoutes: []
  };

  const anonRoutes = [];
  const authRoutes = [];

  routes.childRoutes = routes.childRoutes.concat(formio.auth.routes(anonRoutes, authRoutes));

  return routes;
}
