import React, { useEffect } from 'react';
import { usePrescription } from '../../PrescriptionContext';
import { useDoctor } from '../../DoctorContext';
import { usePatient } from '../../PatientContext';

function ConsultationInfo() {
  const { digitalPrescptionID } = usePrescription();
  const { doctorID } = useDoctor();
  const { patient_id } = usePatient();

  // Log Prescription ID whenever it changes (for debugging)
  useEffect(() => {
    console.log("Prescription ID in ConsultationInfo:", digitalPrescptionID);
  }, [digitalPrescptionID]);

  return (
    <div className="d-flex justify-content-between bg-primary text-light p-3">
      {/* Defensive rendering: If digitalPrescptionID is undefined or empty, show fallback text */}
      <p>Prescription ID: {digitalPrescptionID || "Not Available"}</p>
      <p>Doctor ID: {doctorID || "Not Available"}</p>
      <p>Patient ID: {patient_id || "Not Available"}</p>
      <p>Case ID</p>
    </div>
  );
}

export default ConsultationInfo;
