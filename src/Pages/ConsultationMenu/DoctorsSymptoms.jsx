import React, { useState } from 'react';
import { usePrescription } from "../../PrescriptionContext";
import { useNavigate } from 'react-router-dom';
import './Consultation.css';

const symptomOptions = [
  'Fever', 'Headache', 'Stomach Ache', 'Body Pain',
  'Throat Infection', 'Cough', 'Cold', 'Fatigue',
  'Nausea', 'Vomiting', 'Diarrhea', 'Chest Pain',
  'Shortness of Breath', 'Dizziness', 'Back Pain'
];

function DoctorsSymptoms() {
  const navigate = useNavigate();
  const { sym, setSym } = usePrescription(); // use context

  const [conditions, setConditions] = useState(
    sym.length > 0 ? sym : [{ conditionName: '', from: '', to: '', additionalNote: '' }]
  );

  const handleChange = (index, field, value) => {
    const updated = [...conditions];
    updated[index][field] = value;
    setConditions(updated);
  };

  const handleAdd = () => {
    setConditions([...conditions, { conditionName: '', from: '', to: '', additionalNote: '' }]);
  };

  const handleRemove = (index) => {
    const updated = [...conditions];
    updated.splice(index, 1);
    setConditions(updated);
  };

  const handleNext = () => {
    setSym(conditions); // Save to context
    navigate('/digital_consultation/diagnosis_test');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Medical Conditions Observed</h2>

      {conditions.map((entry, idx) => (
        <div key={idx} className="border rounded p-3 mb-4 shadow-sm">
          <div className="row mb-2">
            <div className="col-md-4">
              <label className="form-label">Condition Name</label>
              <select
                className="form-select"
                value={entry.conditionName}
                onChange={(e) => handleChange(idx, 'conditionName', e.target.value)}
              >
                <option value="">Select</option>
                {symptomOptions.map((symptom, i) => (
                  <option key={i} value={symptom}>{symptom}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">From</label>
              <input
                type="datetime-local"
                className="form-control"
                value={entry.from}
                onChange={(e) => handleChange(idx, 'from', e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">To</label>
              <input
                type="datetime-local"
                className="form-control"
                value={entry.to}
                onChange={(e) => handleChange(idx, 'to', e.target.value)}
              />
            </div>

            <div className="col-md-1 d-flex align-items-end">
              {conditions.length > 1 && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(idx)}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Additional Note</label>
            <textarea
              className="form-control"
              rows="2"
              value={entry.additionalNote}
              onChange={(e) => handleChange(idx, 'additionalNote', e.target.value)}
              placeholder="Optional observations, causes, context..."
            ></textarea>
          </div>
        </div>
      ))}

      <div className="text-center mb-4">
        <button className="btn btn-outline-primary" onClick={handleAdd}>
          + Add Another Condition
        </button>
      </div>

      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DoctorsSymptoms;
