import React, { useContext } from 'react';
import { ConsultationContext } from '../../ConsultationContext';
import { useNavigate } from 'react-router-dom';
import './Consultation.css';

const diseaseOptions = [
  'Fever', 'High Blood Pressure', 'Low Blood Pressure', 'Migrane', 'Respiratory Infection',
  
];

function Diagnosis() {
  const { disease, setDisease } = useContext(ConsultationContext);
  const navigate = useNavigate();

  const toggleDisease = (item) => {
    if (disease.includes(item)) {
      setDisease(disease.filter((d) => d !== item));
    } else {
      setDisease([...disease, item]);
    }
  };

  const handleNext = () => {
    navigate('/digital_consultation/treatment_plan');
  };

  return (
    <div className="container my-5">
      <div className="diagnosis-page">
        <h2 className="text-center mb-4 text-dark">
          Diseases Diagnosed
        </h2>

        <label htmlFor="test-list" className="form-label">Click to select the diseases diagnosed</label>
        <div className="test-select p-3">
          <ul className="list-group">
            {diseaseOptions.map((item, idx) => (
              <li
                key={idx}
                className={`list-group-item ${disease.includes(item) ? 'active-link' : ''}`}
                onClick={() => toggleDisease(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="selected-tests-box mt-4 p-3">
          <h5 className="mb-3">Selected Tests:</h5>
          {disease.length === 0 ? (
            <p className="form-text">No diagnostic tests selected yet.</p>
          ) : (
            <div className="selected-tags">
              {disease.map((item, idx) => (
                <span key={idx} className="symptom-pill">{item}</span>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Diagnosis;
