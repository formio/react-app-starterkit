import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { initAuth, Formio, Components } from 'react-formio';
import App from './App'
import FormioPluginOffline from 'formio-plugin-offline';

import components from './components';
import {AppConfig} from './config';

import './styles.scss'

Formio.setProjectUrl(AppConfig.projectUrl);
Formio.setBaseUrl(AppConfig.apiUrl);
Formio.registerPlugin(new FormioPluginOffline('https://kdwqzwfrxqlzsju.form.io', 'https://kdwqzwfrxqlzsju.form.io/'),
  'offline-project');
Components.setComponents(components);

// Initialize the current user
store.dispatch(initAuth());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// Formio.createForm(document.getElementById('formio'), {
//   "_id": "5e4cebcf9c888826480af679",
//   "type": "form",
//   "tags": [
//
//   ],
//   "owner": "5e41117dcf167d1a98e88de7",
//   "components": [
//     {
//       "title": "Page 1",
//       "label": "Page 1",
//       "type": "panel",
//       "key": "page1",
//       "components": [
//         {
//           "label": "Text Field",
//           "spellcheck": true,
//           "tableView": true,
//           "calculateServer": false,
//           "validate": {
//             "minLength": 4,
//             "required": false,
//             "custom": "",
//             "customPrivate": false,
//             "strictDateValidation": false,
//             "multiple": false,
//             "unique": false,
//             "maxLength": "",
//             "pattern": ""
//           },
//           "key": "textField",
//           "type": "textfield",
//           "input": true,
//           "placeholder": "",
//           "prefix": "",
//           "customClass": "",
//           "suffix": "",
//           "multiple": false,
//           "defaultValue": null,
//           "protected": false,
//           "unique": false,
//           "persistent": true,
//           "hidden": false,
//           "clearOnHide": true,
//           "refreshOn": "",
//           "redrawOn": "",
//           "modalEdit": false,
//           "labelPosition": "top",
//           "description": "",
//           "errorLabel": "",
//           "tooltip": "",
//           "hideLabel": false,
//           "tabindex": "",
//           "disabled": false,
//           "autofocus": false,
//           "dbIndex": false,
//           "customDefaultValue": "",
//           "calculateValue": "",
//           "widget": {
//             "type": "input"
//           },
//           "attributes": {
//
//           },
//           "validateOn": "change",
//           "conditional": {
//             "show": null,
//             "when": null,
//             "eq": ""
//           },
//           "overlay": {
//             "style": "",
//             "left": "",
//             "top": "",
//             "width": "",
//             "height": ""
//           },
//           "allowCalculateOverride": false,
//           "encrypted": false,
//           "showCharCount": false,
//           "showWordCount": false,
//           "properties": {
//
//           },
//           "allowMultipleMasks": false,
//           "mask": false,
//           "inputType": "text",
//           "inputFormat": "plain",
//           "inputMask": "",
//           "id": "e9a4f6k"
//         }
//       ],
//       "input": false,
//       "tableView": false,
//       "placeholder": "",
//       "prefix": "",
//       "customClass": "",
//       "suffix": "",
//       "multiple": false,
//       "defaultValue": null,
//       "protected": false,
//       "unique": false,
//       "persistent": false,
//       "hidden": false,
//       "clearOnHide": false,
//       "refreshOn": "",
//       "redrawOn": "",
//       "modalEdit": false,
//       "labelPosition": "top",
//       "description": "",
//       "errorLabel": "",
//       "tooltip": "",
//       "hideLabel": false,
//       "tabindex": "",
//       "disabled": false,
//       "autofocus": false,
//       "dbIndex": false,
//       "customDefaultValue": "",
//       "calculateValue": "",
//       "widget": null,
//       "attributes": {
//
//       },
//       "validateOn": "change",
//       "validate": {
//         "required": false,
//         "custom": "",
//         "customPrivate": false,
//         "strictDateValidation": false,
//         "multiple": false,
//         "unique": false
//       },
//       "conditional": {
//         "show": null,
//         "when": null,
//         "eq": ""
//       },
//       "overlay": {
//         "style": "",
//         "left": "",
//         "top": "",
//         "width": "",
//         "height": ""
//       },
//       "allowCalculateOverride": false,
//       "encrypted": false,
//       "showCharCount": false,
//       "showWordCount": false,
//       "properties": {
//
//       },
//       "allowMultipleMasks": false,
//       "tree": false,
//       "theme": "default",
//       "breadcrumb": "default",
//       "id": "eaqw4t3"
//     },
//     {
//       "title": "Page 2",
//       "label": "Page 2",
//       "type": "panel",
//       "key": "page2",
//       "components": [
//         {
//           "label": "Number",
//           "mask": false,
//           "spellcheck": true,
//           "tableView": false,
//           "delimiter": false,
//           "requireDecimal": false,
//           "inputFormat": "plain",
//           "calculateServer": false,
//           "key": "number",
//           "type": "number",
//           "input": true,
//           "placeholder": "",
//           "prefix": "",
//           "customClass": "",
//           "suffix": "",
//           "multiple": false,
//           "defaultValue": null,
//           "protected": false,
//           "unique": false,
//           "persistent": true,
//           "hidden": false,
//           "clearOnHide": true,
//           "refreshOn": "",
//           "redrawOn": "",
//           "modalEdit": false,
//           "labelPosition": "top",
//           "description": "",
//           "errorLabel": "",
//           "tooltip": "",
//           "hideLabel": false,
//           "tabindex": "",
//           "disabled": false,
//           "autofocus": false,
//           "dbIndex": false,
//           "customDefaultValue": "",
//           "calculateValue": "",
//           "widget": {
//             "type": "input"
//           },
//           "attributes": {
//
//           },
//           "validateOn": "change",
//           "validate": {
//             "required": false,
//             "custom": "",
//             "customPrivate": false,
//             "strictDateValidation": false,
//             "multiple": false,
//             "unique": false,
//             "min": "",
//             "max": "",
//             "step": "any",
//             "integer": ""
//           },
//           "conditional": {
//             "show": null,
//             "when": null,
//             "eq": ""
//           },
//           "overlay": {
//             "style": "",
//             "left": "",
//             "top": "",
//             "width": "",
//             "height": ""
//           },
//           "allowCalculateOverride": false,
//           "encrypted": false,
//           "showCharCount": false,
//           "showWordCount": false,
//           "properties": {
//
//           },
//           "allowMultipleMasks": false,
//           "id": "e8b7brx"
//         }
//       ],
//       "input": false,
//       "tableView": false
//     },
//     {
//       "title": "Page 3",
//       "label": "Page 3",
//       "type": "panel",
//       "key": "page3",
//       "components": [
//         {
//           "label": "Text Field",
//           "spellcheck": true,
//           "tableView": true,
//           "calculateServer": false,
//           "validate": {
//             "minLength": 2,
//             "required": false,
//             "custom": "",
//             "customPrivate": false,
//             "strictDateValidation": false,
//             "multiple": false,
//             "unique": false,
//             "maxLength": "",
//             "pattern": ""
//           },
//           "key": "textField1",
//           "type": "textfield",
//           "input": true,
//           "placeholder": "",
//           "prefix": "",
//           "customClass": "",
//           "suffix": "",
//           "multiple": false,
//           "defaultValue": null,
//           "protected": false,
//           "unique": false,
//           "persistent": true,
//           "hidden": false,
//           "clearOnHide": true,
//           "refreshOn": "",
//           "redrawOn": "",
//           "modalEdit": false,
//           "labelPosition": "top",
//           "description": "",
//           "errorLabel": "",
//           "tooltip": "",
//           "hideLabel": false,
//           "tabindex": "",
//           "disabled": false,
//           "autofocus": false,
//           "dbIndex": false,
//           "customDefaultValue": "",
//           "calculateValue": "",
//           "widget": {
//             "type": "input"
//           },
//           "attributes": {
//
//           },
//           "validateOn": "change",
//           "conditional": {
//             "show": null,
//             "when": null,
//             "eq": ""
//           },
//           "overlay": {
//             "style": "",
//             "left": "",
//             "top": "",
//             "width": "",
//             "height": ""
//           },
//           "allowCalculateOverride": false,
//           "encrypted": false,
//           "showCharCount": false,
//           "showWordCount": false,
//           "properties": {
//
//           },
//           "allowMultipleMasks": false,
//           "mask": false,
//           "inputType": "text",
//           "inputFormat": "plain",
//           "inputMask": "",
//           "id": "ebb1o"
//         }
//       ],
//       "input": false,
//       "tableView": false
//     }
//   ],
//   "controller": "",
//   "revisions": "",
//   "_vid": 0,
//   "title": "tegPadMigration",
//   "display": "wizard",
//   "access": [
//     {
//       "roles": [
//         "5e41154fcf167d1a98e88e1a",
//         "5e41154fcf167d1a98e88e1b",
//         "5e41154fcf167d1a98e88e1c"
//       ],
//       "type": "read_all"
//     }
//   ],
//   "submissionAccess": [
//
//   ],
//   "settings": {
//
//   },
//   "properties": {
//
//   },
//   "name": "tegPadMigration",
//   "path": "tegpadmigration",
//   "project": "5e41154fcf167d1a98e88e19",
//   "created": "2020-02-19T08:03:27.945Z",
//   "modified": "2020-03-02T16:06:46.973Z",
//   "machineName": "lmcsublqvfpwmjd:tegPadMigration"
// }, { readOnly: false }).then((form) => {
//   form.submission = {
//     data: {
//       textField: "1",
//       textFields1: "111",
//       number: "2",
//   }};
//
//   form.on('submit', (submission) => console.log({submission}));
// });
