// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const PatientContext = createContext();

// Custom hook to use the context
export const usePatient = () => useContext(PatientContext);

// Provider component
export const PatientProvider = ({ children }) => {
  const [patient_id, setPatientId] = useState("");

  return (
    <PatientContext.Provider value={{ patient_id, setPatientId }}>
      {children}
    </PatientContext.Provider>
  );
};
