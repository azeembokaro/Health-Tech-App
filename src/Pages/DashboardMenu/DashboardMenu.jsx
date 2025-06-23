import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCases from '../../Pages/DashboardMenu/MyCases'
import MyDiagnosticReport from '../../Pages/DashboardMenu/MyDiagnosticReport'
import MyPrescribedMedicine  from '../../Pages/DashboardMenu/MyPrescribedMedicine'
import MyNextConsultation from '../../Pages/DashboardMenu/MyNextConsultation'
import MyDocAlerts from '../../Pages/DashboardMenu/MyDocAlerts';
import MyLabAlerts from '../../Pages/DashboardMenu/MyLabAlerts'
import PatientDashboard from '../../Components/PatientDashboard/PatientDashboard'

const DashboardMenu = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
       <PatientDashboard/>
      </div>

      <div id="page-content-wrapper">
        <div className="container">
        
             <Routes>
          <Route path="my_cases" element={<MyCases />} />
          <Route path="my_diagnostic_report" element={<MyDiagnosticReport />} />
          <Route path="my_prescribed_medicine" element={<MyPrescribedMedicine />} />
          <Route path="my_doc_alerts" element={<MyDocAlerts/>} />
          <Route path="my_lab_alerts" element={<MyLabAlerts/>} />
           <Route path="my_next_consultation" element={<MyNextConsultation/>} />
            
          </Routes>
         
         
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
