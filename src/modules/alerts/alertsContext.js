import React, { useEffect } from 'react';

const AlertsContext = React.createContext();
const TimeoutsContext = React.createContext();

const initialState = [];

export function TimeoutsProvider(props) {
  const [timeouts, setTimeouts] = React.useState([]);
  const value = React.useMemo(() => [timeouts, setTimeouts], [timeouts]);

  useEffect(() => {
    return () => timeouts.forEach((id) => clearTimeout(id));
  }, [timeouts]);

  return <TimeoutsContext.Provider value={value} {...props} />;
}

export function AlertsProvider(props) {
  const [alerts, setAlerts] = React.useState(initialState);
  const value = React.useMemo(() => [alerts, setAlerts], [alerts]);

  return <TimeoutsProvider><AlertsContext.Provider value={value} {...props} /></TimeoutsProvider>;
}

export function useAlerts() {
  const context = React.useContext(AlertsContext);
  const timeoutsContext = React.useContext(TimeoutsContext);

  if (!context || !timeoutsContext) {
    throw new Error('useAlerts must be used within a AlertsProvider');
  }

  const [alerts, setAlerts] = context;
  const [timeouts, setTimeouts] = timeoutsContext;

  const removeAlert = (index) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    setAlerts(newAlerts);
  };

  const addTimeout = (timeoutId) => {
    setTimeouts([...timeouts, timeoutId]);
  };

  const removeAfter = (index, timeout) => {
    const timeoutId = setTimeout(() => {
      removeAlert(index);
    }, timeout);
    addTimeout(timeoutId);
  };

  const addAlert = (alert, remove = true, timeout = 2000) => {
    setAlerts([...alerts, alert]);
    const index = alerts.length - 1;

    if (remove) {
      removeAfter(index, timeout);
    }

    return index;
  };

  return {
    alerts,
    setAlerts,
    addAlert,
    removeAlert,
    removeAfter,
  };
}

