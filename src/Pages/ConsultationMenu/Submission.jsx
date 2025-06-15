import React from 'react';
import './Consultation.css';

import { usePrescription } from '../../PrescriptionContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SubmitPrescription() {
  const navigate = useNavigate();

  const {
    digitalPrescptionID, // keep variable name consistent with context
    doctorID,
    patientId,
    prescripedMedicine,
    tests,
    sym,
    observation,
    diag,
    plan,
    recommendations,
    resetPrescription,
  } = usePrescription();

  const handleSubmit = async () => {
    if (!digitalPrescptionID || digitalPrescptionID.trim() === "") {
      alert("❌ Digital Prescription ID is missing. Please go back and select a patient first.");
      return;
    }

    const payload = {
      PrescripedMedicine: prescripedMedicine,
      tests: tests,
      sym: sym,
      observation: observation,
      diag: diag,
      plan: plan,
      Recommendations: [recommendations], // Backend expects List<Suggestions>
    };

    console.log("📦 Payload:", JSON.stringify(payload, null, 2));
    console.log("🧑‍⚕️ Submitting with digitalPrescriptionID (did):", digitalPrescptionID);

    try {
      const response = await axios.post(
        `http://localhost:8080/doctorapi/write-digitalPrescription?did=${digitalPrescptionID}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("✅ Prescription Submitted:", response.data);
      alert("✅ Prescription successfully submitted!");

      resetPrescription();
      navigate('/dashboard');
    } catch (error) {
      console.error("❌ Error submitting prescription:", error);
      alert("❌ Failed to submit prescription. Check browser console for more info.");
    }
  };

  const renderPreview = (label, data) => (
    <div className="mb-4">
      <h5 className="text-dark">{label}</h5>
      <pre className="bg-light border p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Submit Prescription</h2>
      <p className="text-muted text-center">Review all prescription data before submission.</p>

      <div className="border rounded p-4 bg-white shadow-sm">
        <div><strong>Digital Prescription ID:</strong> {digitalPrescptionID || <span className="text-danger">Not Set</span>}</div>
        <div><strong>Doctor ID:</strong> {doctorID || <span className="text-danger">Not Set</span>}</div>
        <div><strong>Patient ID:</strong> {patientId || <span className="text-danger">Not Set</span>}</div>

        {renderPreview("Prescribed Medicines", prescripedMedicine)}
        {renderPreview("Diagnostic Tests", tests)}
        {renderPreview("Symptoms", sym)}
        {renderPreview("Observations", observation)}
        {renderPreview("Diagnoses", diag)}
        {renderPreview("Treatment Plan", plan)}
        {renderPreview("Recommendations", recommendations)}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg" onClick={handleSubmit}>
          ✅ Submit to Backend
        </button>
      </div>
    </div>
  );
}

export default SubmitPrescription;
