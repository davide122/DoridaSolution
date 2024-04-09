import React, { createContext, useContext, useState } from 'react';

// Crea il contesto
const AlertContext = createContext();

// Crea un hook personalizzato per utilizzare il contesto
export const useAlert = () => useContext(AlertContext);

// Definisce il provider
export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (message, category = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setAlerts((currentAlerts) => [...currentAlerts, { id, message, category }]);

    // Rimuovi l'alert dopo un certo tempo
    setTimeout(() => {
      setAlerts((currentAlerts) => currentAlerts.filter(alert => alert.id !== id));
    }, 3000); // Regola la durata dell'alert qui
  };

  return (
    <AlertContext.Provider value={{ addAlert, alerts }}>
      {children}
    </AlertContext.Provider>
  );
};
