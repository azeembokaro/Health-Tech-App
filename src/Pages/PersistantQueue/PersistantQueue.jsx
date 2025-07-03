import React, { useState } from 'react';
import axios from 'axios';
import { usePatient } from '../../PatientContext';
import { useNavigate } from 'react-router-dom';
import './PersistantQueue.css';

const MedicalConditions = [
  'Fever', 'Headache', 'Stomach Ache', 'Body Pain',
  'Throat Infection', 'Cough', 'Cold', 'Fatigue',
  'Nausea', 'Vomiting', 'Diarrhea', 'Chest Pain',
  'Shortness of Breath', 'Dizziness', 'Back Pain'
];

const QueryTypes = [
  'Medical Consultation', 'Expert Advice', '2nd Opinion'
];

function PersistantQueue() {
  const navigate = useNavigate();
  const { patient_id } = usePatient();
  
  const [queryType, setQueryType] = useState('');
  const [conditions, setConditions] = useState([{ conditionName: '', description: '', from: '', to: '', additionalNote: '' }]);
  const [files, setFiles] = useState([]);
  const [explanation, setExplanation] = useState('');

  const handleChange = (index, field, value) => {
    const updated = [...conditions];
    updated[index][field] = value;
    setConditions(updated);
  };

  const handleAdd = () => {
    setConditions([...conditions, { conditionName: '', description: '', from: '', to: '', additionalNote: '' }]);
  };

  const handleRemove = (index) => {
    const updated = [...conditions];
    updated.splice(index, 1);
    setConditions(updated);
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleNext = async () => {
    const payload = {
      queryId: '',
      patientId: patient_id,
      queryType: queryType || '',
      conditions: conditions,
      explanation: (queryType === 'Expert Advice' || queryType === '2nd Opinion') ? explanation : '',
      assigned: false,
      takenCare: false,
      createdAt: new Date().toISOString()
    };

    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(payload)], { type: "application/json" }));

    // Append first file only (assuming one prescription at a time for now)
    if (files.length > 0) {
      formData.append("file", files[0]);
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/submitConsistentQuery',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log("Submitted successfully:", response.data);
      alert("Query submitted successfully!");
      navigate('/some-success-page');

    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <h3 className="text-center text-primary my-3">
        Input Your Medical Conditions And Get Consulted By Esteemed Doctors
      </h3>
      

      {/* Query Type */}

     <select
  className="form-select mny-select my-5"
  value={queryType}
  onChange={(e) => setQueryType(e.target.value)}
>
  <option value="" disabled hidden>Select Query Type</option>
  {QueryTypes.map((type, i) => (
    <option key={i} value={type}>{type}</option>
  ))}
</select>


      {/* Condition Blocks */}
      {conditions.map((entry, idx) => (
        <div key={idx} className="p-3 mb-4 bg-info conditions">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Medical Condition</label>
              <select
                className="form-select my-slect"
                value={entry.conditionName}
                onChange={(e) => handleChange(idx, 'conditionName', e.target.value)}
              >
                <option value="">Select</option>
                {MedicalConditions.map((symptom, i) => (
                  <option key={i} value={symptom}>{symptom}</option>
                ))}
              </select>
            </div>
            <div className="col-md-8">
              <label className="form-label">Describe Condition</label>
              <textarea
                className="form-control"
                value={entry.description}
                onChange={(e) => handleChange(idx, 'description', e.target.value)}
                rows="2"
                placeholder="Symptoms, severity, duration..."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">From</label>
              <input
                type="date"
                className="form-control my-select"
                value={entry.from}
                onChange={(e) => handleChange(idx, 'from', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">To</label>
              <input
                type="date"
                className="form-control my-select"
                value={entry.to}
                onChange={(e) => handleChange(idx, 'to', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Additional Note</label>
              <input
                type="text"
                className="form-control my-select"
                placeholder="Context, triggers, medications..."
                value={entry.additionalNote}
                onChange={(e) => handleChange(idx, 'additionalNote', e.target.value)}
              />
            </div>
          </div>

          {conditions.length > 1 && (
            <div className="text-end">
              <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(idx)}>
                ✕ Remove Condition
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="text-center mb-4">
        <button className="btn btn-outline-primary" onClick={handleAdd}>
          + Add Another Condition
        </button>
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label className="form-label fw-bold">Upload Prescriptions</label>
        <input
          type="file"
          className="form-control my-select"
          multiple
          accept=".jpeg,.jpg,.png,.mpeg,.pdf"
          onChange={handleFileChange}
        />
        <small className="text-muted">Accepted formats: jpeg, png, mpeg, pdf</small>
      </div>

      {/* Explanation */}
      {(queryType === 'Expert Advice' || queryType === '2nd Opinion') && (
        <div className="mb-4 conditions bg-info">
         
          <textarea
            className="bg-info w-100 p-3"
            rows="4"
            placeholder="Describe the opinion you are seeking..."
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
      )}

      <div className="text-center">
        <button className="btn btn-success btn-lg" onClick={handleNext}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default PersistantQueue;
