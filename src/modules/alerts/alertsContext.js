import React from 'react';

const AlertsContext = React.createContext();

const initialState = [];

export function AlertsProvider(props) {
  const [alerts, setAlerts] = React.useState(initialState);
  const value = React.useMemo(() => [alerts, setAlerts], [alerts]);

  return <AlertsContext.Provider value={value} {...props} />;
}

export function useAlerts() {
  const context = React.useContext(AlertsContext);

  if (!context) {
    throw new Error('useAlerts must be used within a AlertsProvider');
  }

  const [alerts, setAlerts] = context;

  const removeAlert = (index) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    setAlerts(newAlerts);
  };

  const removeAfter = (index, timeout) => {
    setTimeout(() => {
      removeAlert(index);
    }, timeout);
  };

  const addAlert = (alert, remove = true, timeout = 2000) => {
    const index = alerts.length;
    setAlerts([...alerts, { ...alert, key: index }]);

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

