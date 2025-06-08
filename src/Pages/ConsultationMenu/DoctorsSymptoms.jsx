import React, { useState } from 'react';
import './Consultation.css';

const symptomOptions = [
  'Fever', 'Headache', 'Stomach Ache', 'Body Pain',
  'Throat Infection', 'Cough', 'Cold', 'Fatigue',
  'Nausea', 'Vomiting', 'Diarrhea', 'Chest Pain',
  'Shortness of Breath', 'Dizziness', 'Back Pain'
];

function DoctorsSymptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <div className="container my-5">
      <div className="symptoms-page">
        <h2 className="text-center mb-4 text-primary">Doctor's Symptoms</h2>

        <label htmlFor="symptom-list" className="form-label">Click to select symptoms:</label>
        <div className="symptom-select p-3">
          <ul className="list-group">
            {symptomOptions.map((symptom, idx) => (
              <li
                key={idx}
                className={`list-group-item ${selectedSymptoms.includes(symptom) ? 'active-link' : ''}`}
                onClick={() => toggleSymptom(symptom)}
              >
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className="selected-symptoms-box mt-4 p-3">
          <h5 className="mb-3">Selected Symptoms:</h5>
          {selectedSymptoms.length === 0 ? (
            <p className="form-text">No symptoms selected yet.</p>
          ) : (
            <div className="selected-tags">
              {selectedSymptoms.map((symptom, idx) => (
                <span key={idx} className="symptom-pill">{symptom}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorsSymptoms;
