import { Formio } from '@formio/react';

const getQuery = (query) => {
  window.location.search.substr(1).split('&').forEach(function(item) {
    query[item.split('=')[0]] = item.split('=')[1] && decodeURIComponent(item.split('=')[1]);
  });

  return query;
}

const configFromLocalStorage = localStorage.getItem('formioAppConfig') || null;

const query = getQuery({});
const PROJECT_URL = query.projectUrl || JSON.parse(configFromLocalStorage)?.projectUrl || 'https://reactstarter.form.io';
const API_URL = query.apiUrl || JSON.parse(configFromLocalStorage)?.apiUrl || 'https://api.form.io';


export const AppConfig = {
  projectUrl: PROJECT_URL,
  apiUrl: API_URL
};

export const AuthConfig = {
  anonState: '/auth',
  authState: '/',
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};

Formio.setProjectUrl(AppConfig.projectUrl);
Formio.setBaseUrl(AppConfig.apiUrl);
