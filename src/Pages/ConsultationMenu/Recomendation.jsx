import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrescription } from '../../PrescriptionContext';
import './Consultation.css';

// These lists would ideally be fetched from your backend, but hardcoded here for now
const hospitalList = [
  { id: 'H001', name: 'City Hospital' },
  { id: 'H002', name: 'Green Care Hospital' },
  { id: 'H003', name: 'Metro Health Center' }
];

const pharmacyList = [
  { id: 'P001', name: 'HealthPlus Pharmacy' },
  { id: 'P002', name: 'MediCare Store' },
  { id: 'P003', name: 'Wellness Drugs' }
];

const diagnosticsList = [
  { id: 'D001', name: 'LabX Diagnostics' },
  { id: 'D002', name: 'PathCare Labs' },
  { id: 'D003', name: 'AccuLabs' }
];

function Recommendation() {
  const navigate = useNavigate();
  const {recommendations,setRecommendations } = usePrescription(); // from context

  // Use local state to allow updates before setting to context
  const [hospitalIds, setHospitalIds] = useState(recommendations?.hospitalIds || []);
  const [pharmacyIds, setPharmacyIds] = useState(recommendations?.pharamacyIds || []);
  const [diagnosticsLabIds, setDiagnosticsLabIds] = useState(recommendations?.diagnosticsLabIds || []);

  const toggleSelection = (id, list, setter) => {
    if (list.includes(id)) {
      setter(list.filter(item => item !== id));
    } else {
      setter([...list, id]);
    }
  };

  const handleSubmit = () => {
    navigate('/digital_consultation/submission')
    // Save selections to context
    setRecommendations({
      hospitalIds,
      pharamacyIds: pharmacyIds,
      diagnosticsLabIds
    });
    navigate('/digital_consultation/submission'); // next step
  };

  const renderChecklist = (items, selected, setter) => (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className={`list-group-item ${selected.includes(item.id) ? 'active-link' : ''}`}
          onClick={() => toggleSelection(item.id, selected, setter)}
          style={{ cursor: 'pointer' }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Recommendations</h2>

      <div className="mb-4">
        <h5 className="text-dark">Select Hospitals</h5>
        {renderChecklist(hospitalList, hospitalIds, setHospitalIds)}
      </div>

      <div className="mb-4">
        <h5 className="text-dark">Select Pharmacies</h5>
        {renderChecklist(pharmacyList, pharmacyIds, setPharmacyIds)}
      </div>

      <div className="mb-4">
        <h5 className="text-dark">Select Diagnostic Labs</h5>
        {renderChecklist(diagnosticsList, diagnosticsLabIds, setDiagnosticsLabIds)}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleSubmit}>Save & Continue</button>
      </div>
    </div>
  );
}

export default Recommendation;
