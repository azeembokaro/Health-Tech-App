import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Consultation.css';

const testOptions = [
  'Blood Test', 'X-Ray', 'MRI Scan', 'CT Scan', 'ECG',
  'Urine Test', 'Ultrasound', 'Liver Function Test',
  'Kidney Function Test', 'Thyroid Test', 'CBC', 'Glucose Test',
  'Allergy Test', 'COVID-19 Test', 'Pap Smear'
];

function DiagnosisTest() {
  const navigate = useNavigate();
  const [selectedTests, setSelectedTests] = useState([]);

  const toggleTest = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter(t => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleNext = () => {
    // You can pass selectedTests via state or context if needed
    navigate('/digital_consultation/medicines_prescribed');
  };

  return (
    <div className="container my-5">
      <div className="diagnosis-page">
        <h2 className="text-center mb-4 text-dark">Diagnostic Test</h2>

        <label htmlFor="test-list" className="form-label">Click to select diagnostic tests:</label>
        <div className="test-select p-3">
          <ul className="list-group">
            {testOptions.map((test, idx) => (
              <li
                key={idx}
                className={`list-group-item ${selectedTests.includes(test) ? 'active-link' : ''}`}
                onClick={() => toggleTest(test)}
              >
                {test}
              </li>
            ))}
          </ul>
        </div>

        <div className="selected-tests-box mt-4 p-3">
          <h5 className="mb-3">Selected Tests:</h5>
          {selectedTests.length === 0 ? (
            <p className="form-text">No diagnostic tests selected yet.</p>
          ) : (
            <div className="selected-tags">
              {selectedTests.map((test, idx) => (
                <span key={idx} className="symptom-pill">{test}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DiagnosisTest;
