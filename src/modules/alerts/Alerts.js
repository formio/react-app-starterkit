import React from 'react';
import { useAlerts } from './alertsContext';

const DefaultAlert = ({ type, content }) => (
  <div className={`mr-2 alert alert-${type}`}>{content}</div>
);

export const Alerts = (props) => {
  const { Alert = DefaultAlert } = props;
  const { alerts } = useAlerts(); 

  const style = {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  };

  return (
    <div style={style}>
      {alerts.map((alert) => <Alert {...alert} key={alert.key}/>)}
    </div>
  )
};
