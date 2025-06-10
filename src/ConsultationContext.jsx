import React, { createContext, useState } from 'react';

export const ConsultationContext = createContext();

export const ConsultationProvider = ({ children }) => {
  const [observation, setObservation] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [disease, setDisease] = useState([]);
  const [medicines, setMedicines] = useState('');
  const [treatment, setTreatment] = useState('');

  return (
    <ConsultationContext.Provider
      value={{
        observation,
        setObservation,
        symptoms,
        setSymptoms,
        disease,
        setDisease,
        medicines,
        setMedicines,
        treatment,
        setTreatment
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};
