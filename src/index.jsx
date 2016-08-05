const React = require('react');
const ReactDOM = require('react-dom');
const Formio = require('react-formio');

require('react-widgets/dist/css/react-widgets.css');
require('react-formio/formio.css');

/* eslint-disable no-console */
const formChange = function(submission, key, value) {
  console.log('change', submission.data, key, value);
};

const formSubmit = function(submission) {
  console.log('submit', submission.data);
};
/* eslint-enable no-console */

ReactDOM.render(
  <Formio src="https://examples.form.io/components" onChange={formChange} onFormSubmit={formSubmit} />, document.getElementById('formio')
);
