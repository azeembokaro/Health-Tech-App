import React from "react";
import { useNavigate } from 'react-router-dom'

import './Consultation.css'

function DoctorObservation() {

  const navigate = useNavigate();

  const handleNextone = () => {
     navigate('/digital_consultation/doctors_symptoms');
  }

  return (
    <>
    
      <h3 className="text-center py-2 text-success w-75 mx-auto">Doctor's Observation</h3>

        <div className="mt-sm-2 mt-2 text-center">
          <textarea name="" id="" className="doc_obs w-100" rows = "6">

          </textarea>

           <button className="btn btn-info mt-sm-5 mt-3" onClick={handleNextone}>
          Next
        </button>

        </div>

       
    </>
  );
}

export default DoctorObservation;
