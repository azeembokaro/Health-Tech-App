import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrescription } from '../../PrescriptionContext';
import './Consultation.css';

function TreatmentPlan() {
  const navigate = useNavigate();
  const { plan, setPlan } = usePrescription();

  const [form, setForm] = useState({
    presenttype: '',
    presentsubtype: '',
    noofDays: '',
    nextConsultationDate: '',
    nextconsultationtype: ''
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const addTreatment = () => {
    setPlan([...plan, form]);
    setForm({
      presenttype: '',
      presentsubtype: '',
      noofDays: '',
      nextConsultationDate: '',
      nextconsultationtype: ''
    });
  };

  const removeTreatment = (index) => {
    const updated = plan.filter((_, i) => i !== index);
    setPlan(updated);
  };

  const handleNext = () => {
    navigate('/digital_consultation/submission');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Treatment Plan</h2>

      {/* Input Fields */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Treatment Type</label>
          <input
            type="text"
            className="form-control"
            value={form.presenttype}
            onChange={(e) => handleChange('presenttype', e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Treatment Subtype</label>
          <input
            type="text"
            className="form-control"
            value={form.presentsubtype}
            onChange={(e) => handleChange('presentsubtype', e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">No. of Days</label>
          <input
            type="number"
            className="form-control"
            value={form.noofDays}
            onChange={(e) => handleChange('noofDays', e.target.value)}
            min="0"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Next Consultation Date</label>
          <input
            type="date"
            className="form-control"
            value={form.nextConsultationDate}
            onChange={(e) => handleChange('nextConsultationDate', e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Next Consultation Type</label>
          <input
            type="text"
            className="form-control"
            value={form.nextconsultationtype}
            onChange={(e) => handleChange('nextconsultationtype', e.target.value)}
          />
        </div>
      </div>

      <div className="text-end">
        <button className="btn btn-success mb-3" onClick={addTreatment}>
          + Add Treatment Plan
        </button>
      </div>

      {/* Display Added Plans */}
      {plan.length > 0 && (
        <div className="card p-3 mb-4">
          <h5 className="mb-3">Added Treatment Plans:</h5>
          {plan.map((p, idx) => (
            <div
              key={idx}
              className="border p-2 mb-2 d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{p.presenttype || 'N/A'}</strong> → {p.presentsubtype || 'N/A'}, Days: {p.noofDays || 'N/A'}, Next Visit: {p.nextConsultationDate || 'N/A'} ({p.nextconsultationtype || 'N/A'})
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => removeTreatment(idx)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TreatmentPlan;
