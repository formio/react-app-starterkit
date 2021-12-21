<<<<<<< HEAD

import { Formio } from 'react-formio';
=======
import { Formio } from '@formio/react';
>>>>>>> d67d374d6e3d5d06fc20b956ae8b1e10c42b30f8

const getQuery = (query) => {
  window.location.search.substr(1).split('&').forEach(function(item) {
    query[item.split('=')[0]] = item.split('=')[1] && decodeURIComponent(item.split('=')[1]);
  });

  return query;
}

const query = getQuery({});
var PROJECT_URL = 'https://wnnngozsxpmqbnz.form.io';
const API_URL = query.apiUrl || 'https://api.form.io';

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
