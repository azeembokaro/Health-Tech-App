// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const PharmacyContext = createContext();

// Custom hook to use the context
export const usePharmacy = () => useContext(PharmacyContext);

// Provider component
export const PharmacyProvider = ({ children }) => {
  const [pharmacyId, setPharmacyId] = useState("");

  return (
    <PharmacyContext.Provider value={{ pharmacyId, setPharmacyId }}>
      {children}
    </PharmacyContext.Provider>
  );
};
