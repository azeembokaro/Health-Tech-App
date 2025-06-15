import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrescription } from '../../PrescriptionContext';
import './Consultation.css';

const diagnosticTypes = {
  'Blood Test': ['CBC', 'LFT', 'KFT', 'Thyroid Panel'],
  'Imaging': ['X-Ray', 'MRI', 'CT Scan', 'Ultrasound'],
  'Pathology': ['Urine Test', 'Pap Smear'],
  'Cardiology': ['ECG', 'ECHO'],
};

function DiagnosisTest() {
  const navigate = useNavigate();
  const { tests, setTests } = usePrescription();

  const [testEntries, setTestEntries] = useState(
    tests.length > 0 ? tests : [
      {
        type: '',
        subtype: '',
        methodOrOrgan: '',
        instructions: '',
        comment: ''
      }
    ]
  );

  const handleChange = (index, field, value) => {
    const updatedEntries = [...testEntries];
    updatedEntries[index][field] = value;
    setTestEntries(updatedEntries);
  };

  const addNewTest = () => {
    setTestEntries([
      ...testEntries,
      {
        type: '',
        subtype: '',
        methodOrOrgan: '',
        instructions: '',
        comment: ''
      }
    ]);
  };

  const removeTest = (index) => {
    const updatedEntries = [...testEntries];
    updatedEntries.splice(index, 1);
    setTestEntries(updatedEntries);
  };

  const handleNext = () => {
    setTests(testEntries);
    navigate('/digital_consultation/medicines_prescribed');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-dark mb-4">Diagnostic Test Entry</h2>

      {testEntries.map((entry, idx) => (
        <div key={idx} className="border rounded p-3 mb-4 shadow-sm">
          <div className="row mb-2">
            <div className="col-md-4">
              <label className="form-label">Diagnostic Type</label>
              <select
                className="form-select"
                value={entry.type}
                onChange={(e) => handleChange(idx, 'type', e.target.value)}
              >
                <option value="">Select</option>
                {Object.keys(diagnosticTypes).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Sub Type</label>
              <select
                className="form-select"
                value={entry.subtype}
                onChange={(e) => handleChange(idx, 'subtype', e.target.value)}
                disabled={!entry.type}
              >
                <option value="">Select</option>
                {diagnosticTypes[entry.type]?.map((subtype) => (
                  <option key={subtype} value={subtype}>{subtype}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Method / Organ / Parameter</label>
              <input
                type="text"
                className="form-control"
                value={entry.methodOrOrgan}
                onChange={(e) => handleChange(idx, 'methodOrOrgan', e.target.value)}
                placeholder="e.g., Liver, Brain, ALT/SGPT"
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <label className="form-label">Specific Instructions</label>
              <input
                type="text"
                className="form-control"
                value={entry.instructions}
                onChange={(e) => handleChange(idx, 'instructions', e.target.value)}
                placeholder="e.g., 12 hrs fasting"
              />
            </div>

            <div className="col-md-5">
              <label className="form-label">Comment</label>
              <input
                type="text"
                className="form-control"
                value={entry.comment}
                onChange={(e) => handleChange(idx, 'comment', e.target.value)}
                placeholder="Doctor's context or note"
              />
            </div>

            <div className="col-md-1 d-flex align-items-end">
              {testEntries.length > 1 && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeTest(idx)}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mb-4">
        <button className="btn btn-outline-primary" onClick={addNewTest}>
          + Add Another Test
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

export default DiagnosisTest;
