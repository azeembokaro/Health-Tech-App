import React from 'react'
import { usePrescription } from '../../PrescriptionContext'
import { useDoctor } from '../../DoctorContext'
import { usePatient } from '../../PatientContext'

function ConsultationInfo() {
  const { digitalPrescptionID } = usePrescription()
  const { doctorID } = useDoctor()
  const { patient_id } = usePatient()

  return (
    <div className="d-flex justify-content-between bg-primary text-light p-3">
      <p>Prescription ID: {digitalPrescptionID}</p>
      <p>Doctor ID: {doctorID}</p>
      <p>Patient ID: {patient_id}</p>
      <p>Case ID</p>
    </div>
  )
}

export default ConsultationInfo
