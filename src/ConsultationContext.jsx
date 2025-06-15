// import React, { createContext, useContext, useState } from "react";

// const PrescriptionContext = createContext();
// export const usePrescription = () => useContext(PrescriptionContext);

// export const PrescriptionProvider = ({ children }) => {
//   const [digitalPrescptionID, setDigitalPrescptionID] = useState("");
//   const [doctorID, setDoctorID] = useState("");
//   const [patientId, setPatientId] = useState("");
//   const [patientLog, setPatientLog] = useState("");

//   const [prescripedMedicine, setPrescripedMedicine] = useState([]);
//   const [tests, setTests] = useState([]);
//   const [sym, setSym] = useState([]);
//   const [observation, setObservation] = useState([]);
//   const [diag, setDiag] = useState([]);
//   const [recommendations, setRecommendations] = useState("");

//   // Optional: Clear all fields on logout or reset
//   const resetPrescription = () => {
//     setDigitalPrescptionID("");
//     setDoctorID("");
//     setPatientId("");
//     setPatientLog("");
//     setPrescripedMedicine([]);
//     setTests([]);
//     setSym([]);
//     setObservation([]);
//     setDiag([]);
//     setRecommendations("");
//   };

//   return (
//     <PrescriptionContext.Provider
//       value={{
//         digitalPrescptionID, setDigitalPrescptionID,
//         doctorID, setDoctorID,
//         patientId, setPatientId,
//         patientLog, setPatientLog,
//         prescripedMedicine, setPrescripedMedicine,
//         tests, setTests,
//         sym, setSym,
//         observation, setObservation,
//         diag, setDiag,
//         recommendations, setRecommendations,
//         resetPrescription
//       }}
//     >
//       {children}
//     </PrescriptionContext.Provider>
//   );
// };
