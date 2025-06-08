// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const PrescriptionContext = createContext();

// Custom hook to use the context
export const usePrescription = () => useContext(PrescriptionContext);

// Provider component
export const PrescriptionProvider = ({ children }) => {
  const [presID, setPresID] = useState("");

  return (
    <PrescriptionContext.Provider value={{ presID, setPresID }}>
      {children}
    </PrescriptionContext.Provider>
  );
};
