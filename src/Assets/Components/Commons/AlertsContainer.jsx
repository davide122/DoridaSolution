import React from 'react';
import { useAlert } from '../../Hooks/AlertContext';

const AlertsContainer = () => {
  const { alerts } = useAlert();

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1050 }}>
      {alerts.map(({ id, message, category }) => (
        <div key={id} className={`alert alert-${category}`} role="alert">
          {message}
        </div>
      ))}
    </div>
  );
};

export default AlertsContainer;
