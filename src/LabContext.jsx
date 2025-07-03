// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const LabContext = createContext();

// Custom hook to use the context
export const useLab = () => useContext(LabContext);

// Provider component
export const LabProvider = ({ children }) => {
  const [diagnosticsId, setdiagnosticsId] = useState("");

  return (
    <LabContext.Provider value={{ diagnosticsId, setdiagnosticsId }}>
      {children}
    </LabContext.Provider>
  );
};
