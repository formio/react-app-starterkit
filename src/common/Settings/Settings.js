import React, { useState } from 'react';
import { useNavigate  } from 'react-router';
import { Form } from '@formio/react';
import _ from 'lodash';
import { useAlerts } from '../../modules/alerts';

const Settings = () => {
    const navigate = useNavigate ();
    const { addAlert } = useAlerts();
    const configFromLocalStorage = {
        projectUrl: JSON.parse(localStorage.getItem('formioAppConfig'))?.projectUrl || '',
        apiUrl: JSON.parse(localStorage.getItem('formioAppConfig'))?.apiUrl || ''
    };

    const [config] = useState({data: configFromLocalStorage});

    const settingsForm = {
        name: 'settings',
        components: [
            {
                "label": "Project URL",
                "applyMaskOn": "change",
                "key": "projectUrl",
                "type": "textfield",
                "input": true
            },
            {
                "label": "API URL",
                "applyMaskOn": "change",
                "key": "apiUrl",
                "type": "textfield",
                "input": true
            },
            {
                "type": "button",
                "label": "Save Settings",
                "action": "event",
                "key": "submit",
                "disableOnInvalid": true,
                "theme": "success",
                "input": true,
                "tableView": false,
                "event": "save"
              }
        ]
    }

    const onSaveSettings = (event) => {
        const { type, data } = event;
        if (!data.projectUrl || !data.apiUrl) {
            addAlert({ type: 'danger', content: 'Project URL and API URL are required' });
        } else if (type === 'save') {
            localStorage.setItem('formioAppConfig', JSON.stringify(_.omit(data, 'submit')));
            addAlert({ type: 'success', content: 'Form succesfully saved' });
            navigate('/auth');
            window.location.reload();
        }
    }

    return (
        <div>
            <Form
             form={settingsForm}
             submission={config}
             onCustomEvent={onSaveSettings}
             />
        </div>
    )
};

export default Settings;
