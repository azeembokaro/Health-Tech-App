import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrescription } from '../../PrescriptionContext';
import './Consultation.css';

const diseaseOptions = [
  'Fever', 'High Blood Pressure', 'Low Blood Pressure', 'Migraine', 'Respiratory Infection',
  'Anemia', 'Asthma', 'Diabetes', 'Arthritis', 'Tuberculosis'
];

function Diagnosis() {
  const navigate = useNavigate();
  const { diag, setDiag } = usePrescription();

  const [entries, setEntries] = useState(
    diag.length > 0 ? diag : [
      { diseasename: '', notes: '' }
    ]
  );

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const handleAdd = () => {
    setEntries([...entries, { diseasename: '', notes: '' }]);
  };

  const handleRemove = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  const handleNext = () => {
    setDiag(entries); // Save to context
    navigate('/digital_consultation/treatment_plan');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-dark mb-4">Diseases Diagnosed</h2>

      {entries.map((entry, idx) => (
        <div key={idx} className="border rounded p-3 mb-4 shadow-sm">
          <div className="row mb-2">
            <div className="col-md-5">
              <label className="form-label">Disease Name</label>
              <select
                className="form-select"
                value={entry.diseasename}
                onChange={(e) => handleChange(idx, 'diseasename', e.target.value)}
              >
                <option value="">Select</option>
                {diseaseOptions.map((disease, i) => (
                  <option key={i} value={disease}>{disease}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Notes / Observations</label>
              <input
                type="text"
                className="form-control"
                value={entry.notes}
                onChange={(e) => handleChange(idx, 'notes', e.target.value)}
                placeholder="E.g., chronic, borderline, post-viral"
              />
            </div>

            <div className="col-md-1 d-flex align-items-end">
              {entries.length > 1 && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(idx)}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mb-4">
        <button className="btn btn-outline-primary" onClick={handleAdd}>
          + Add Another Diagnosis
        </button>
      </div>

      <div className="text-center">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Diagnosis;
