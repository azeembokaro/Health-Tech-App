import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ConsultationTabs from '../../Components/ConsultationTabs/ConsultationTabs';
import ConsultationInfo from '../../Components/ConsultationInfo/ConsultationInfo';

import DoctorObservation from '../../Pages/ConsultationMenu/DoctorObservation'
import DoctorsSymptoms from '../../Pages/ConsultationMenu/DoctorsSymptoms'
import DiagnosisTest from '../../Pages/ConsultationMenu/DiagnosisTest'
import MedicinesPrescribed from '../../Pages/ConsultationMenu/MedicinePrescriped'
import Recomendation from '../../Pages/ConsultationMenu/Recomendation';
import TreatmentPlan from '../../Pages/ConsultationMenu/TreatmentPlan';
import Diagnosis from '../../Pages/ConsultationMenu/Diagnosis'
import Submission from '../../Pages/ConsultationMenu/Submission'

// import { ConsultationProvider } from '../../ConsultationContext'



const DigitalConsultation = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <ConsultationTabs/>
      </div>

      <div id="page-content-wrapper">
        <div className="container">
         
           
             <ConsultationInfo/>
 <Routes>
            <Route path="doctor_observation" element={<DoctorObservation />} />
            <Route path="doctors_symptoms" element={<DoctorsSymptoms />} />
            <Route path="diagnosis_test" element={<DiagnosisTest />} />

             <Route path="medicines_prescribed" element={<MedicinesPrescribed />} />
              <Route path="treatment_plan" element={<TreatmentPlan/>} />
               <Route path="diagnosis" element={<Diagnosis />} />

               <Route path="recomendation" element={<Recomendation />} />
                <Route path="submission" element={<Submission />} />
                 
            
          </Routes>
          
         
        </div>
      </div>
    </div>
  );
};

export default DigitalConsultation;
