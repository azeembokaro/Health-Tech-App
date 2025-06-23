import React, { createContext, useContext, useState } from "react";

const PrescriptionContext = createContext();
export const usePrescription = () => useContext(PrescriptionContext);

export const PrescriptionProvider = ({ children }) => {
  const [digitalPrescptionIDState, _setDigitalPrescptionID] = useState("");

  const setDigitalPrescptionID = (value) => {
    console.log("📘 [PrescriptionContext] Setting digitalPrescptionID:", value);
    _setDigitalPrescptionID(value);
  };

  const [doctorID, setDoctorID] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientLog, setPatientLog] = useState("");

  const [prescripedMedicine, setPrescripedMedicine] = useState([]);
  const [tests, setTests] = useState([]);
  const [sym, setSym] = useState([]);
  const [observation, setObservation] = useState([]);
  const [diag, setDiag] = useState([]);
  const [plan, setPlan] = useState([]);
  const [recommendations, setRecommendations] = useState("");

  // Optional: Clear all fields on logout or reset
  const resetPrescription = () => {
    console.log("🔄 [PrescriptionContext] Resetting context to default values.");
    setDigitalPrescptionID("");
    setDoctorID("");
    setPatientId("");
    setPatientLog("");
    setPrescripedMedicine([]);
    setTests([]);
    setSym([]);
    setObservation([]);
    setDiag([]);
    setPlan([]);
    setRecommendations("");
  };

  return (
    <PrescriptionContext.Provider
      value={{
        digitalPrescptionID: digitalPrescptionIDState,
        setDigitalPrescptionID,
        doctorID, setDoctorID,
        patientId, setPatientId,
        patientLog, setPatientLog,
        prescripedMedicine, setPrescripedMedicine,
        tests, setTests,
        sym, setSym,
        observation, setObservation,
        diag, setDiag,
        plan, setPlan,
        recommendations, setRecommendations,
        resetPrescription
      }}
    >
      {children}
    </PrescriptionContext.Provider>
  );
};
