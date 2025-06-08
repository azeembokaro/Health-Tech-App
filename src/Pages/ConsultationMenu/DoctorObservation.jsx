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
      <h1 className="text-center py-5 text-success">Doctor's Observation</h1>

        <div className="mt-sm-5 mt-3 text-center">
          <textarea name="" id="" className="doc_obs" rows = "6">

          </textarea>

           <button className="btn btn-info mt-sm-5 mt-3" onClick={handleNextone}>
          Next
        </button>

        </div>

       
    </>
  );
}

export default DoctorObservation;
