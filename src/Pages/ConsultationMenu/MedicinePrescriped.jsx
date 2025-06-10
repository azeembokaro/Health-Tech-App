import React, { useContext } from 'react';
import { ConsultationContext } from '../../ConsultationContext';
import { useNavigate } from 'react-router-dom';
import './Consultation.css';

function MedicinesPrescribed() {
  const { medicines, setMedicines } = useContext(ConsultationContext);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/digital_consultation/diagnosis');
  };

  return (
    <div>
      <h1 className="text-center py-5">Medicines Prescribed</h1>

      <textarea
        className="w-100 my-sm-5 my-3"
        rows="6"
        value={medicines}
        onChange={(e) => setMedicines(e.target.value)}
        placeholder="Write prescribed medicines here..."
      ></textarea>

      <div className="text-center py-3">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MedicinesPrescribed;
