import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ConsultationTabs from '../../Components/ConsultationTabs/ConsultationTabs';

import DoctorObservation from '../../Pages/ConsultationMenu/DoctorObservation'
import DoctorsSymptoms from '../../Pages/ConsultationMenu/DoctorsSymptoms'
import DiagnosisTest from '../../Pages/ConsultationMenu/DiagnosisTest'

const DigitalConsultation = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <ConsultationTabs/>
      </div>

      <div id="page-content-wrapper">
        <div className="container">
          <Routes>
            <Route path="doctor_observation" element={<DoctorObservation />} />
            <Route path="doctors_symptoms" element={<DoctorsSymptoms />} />
            <Route path="diagnosis" element={<DiagnosisTest />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DigitalConsultation;
