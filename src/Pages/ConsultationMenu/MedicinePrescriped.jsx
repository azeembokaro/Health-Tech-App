import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrescription } from '../../PrescriptionContext';
import './Consultation.css';

const frequencyOptions = [
  'Once in a day Before meal', 'Twice in a day Before meal', 'Thrice in a day Before meal',
  'Once in a day After meal', 'Twice in a day After meal', 'Thrice in a day After meal',
  'Once in a week', 'Once in a month'
];

function MedicinesPrescribed() {
  const { prescripedMedicine, setPrescripedMedicine } = usePrescription();
  const navigate = useNavigate();

  const [newMedicine, setNewMedicine] = useState({
    type: 'Medicine',
    name: '',
    fromDate: '',
    endDate: '',
    frequency: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine({ ...newMedicine, [name]: value });
  };

  const handleAddMedicine = () => {
    // Prevent adding incomplete entries
    if (!newMedicine.name || !newMedicine.fromDate || !newMedicine.endDate || !newMedicine.frequency) {
      alert("Please fill all required fields (name, date, frequency)");
      return;
    }
    setPrescripedMedicine([...prescripedMedicine, newMedicine]);
    // Reset new medicine input
    setNewMedicine({
      type: 'Medicine',
      name: '',
      fromDate: '',
      endDate: '',
      frequency: '',
      comments: ''
    });
  };

  const handleNext = () => {
    navigate('/digital_consultation/diagnosis');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Medicines Prescribed</h2>

      <div className="card p-4 mb-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select name="type" value={newMedicine.type} onChange={handleChange} className="form-select">
            <option>Medicine</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Medicine Name</label>
          <input
            type="text"
            name="name"
            value={newMedicine.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter medicine name"
          />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">From Date</label>
            <input
              type="date"
              name="fromDate"
              value={newMedicine.fromDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">End Date</label>
            <input
              type="date"
              name="endDate"
              value={newMedicine.endDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Frequency</label>
          <select
            name="frequency"
            value={newMedicine.frequency}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select Frequency --</option>
            {frequencyOptions.map((freq, idx) => (
              <option key={idx} value={freq}>{freq}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Comments</label>
          <input
            type="text"
            name="comments"
            value={newMedicine.comments}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter any comments (optional)"
          />
        </div>

        <button className="btn btn-success" onClick={handleAddMedicine}>
          Add Medicine
        </button>
      </div>

      <h5>Added Medicines:</h5>
      {prescripedMedicine.length === 0 ? (
        <p>No medicines added yet.</p>
      ) : (
        <ul className="list-group mb-4">
          {prescripedMedicine.map((med, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{med.name}</strong> from <em>{med.fromDate}</em> to <em>{med.endDate}</em> - <u>{med.frequency}</u>
              {med.comments && ` | Comments: ${med.comments}`}
            </li>
          ))}
        </ul>
      )}

      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MedicinesPrescribed;
