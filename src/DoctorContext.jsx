// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const DoctorContext = createContext();

// Custom hook to use the context
export const useDoctor = () => useContext(DoctorContext);

// Provider component
export const DoctorProvider = ({ children }) => {
  const [doctorID, setDoctorId] = useState("");

  return (
    <DoctorContext.Provider value={{ doctorID, setDoctorId }}>
      {children}
    </DoctorContext.Provider>
  );
};
