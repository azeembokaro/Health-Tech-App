// src/PatientContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const DoctorContext = createContext();

// Custom hook to use the context
export const useDoctor = () => useContext(DoctorContext);

// Provider component
export const DoctorProvider = ({ children }) => {
  const [doctorID, setDoctorId] = useState("");
  const  [type,setType]=useState("");

  return (
    <DoctorContext.Provider value={{ doctorID, setDoctorId,type,setType }}>
      {children}
    </DoctorContext.Provider>
  );
};
