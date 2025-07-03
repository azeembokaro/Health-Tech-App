import React from 'react';
import { NavLink } from 'react-router-dom';
import './PatientDashboard.css'

const PatientDashboard = () => {
  return (
    <div className="list-group ms-2 patient_sidebar">
      <NavLink
        to="/patient_dashboard/my_cases"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        My Cases
      </NavLink>

      <NavLink
        to="/patient_dashboard/my_diagnostic_report"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        My Diagnostic Report
      </NavLink>


       <NavLink
        to="/patient_dashboard/my_prescribed_medicine"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       My Prescribed Medicines
      </NavLink>


      <NavLink
        to="/patient_dashboard/my_next_consultation"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Next Consultation
      </NavLink>


        <NavLink
        to="/patient_dashboard/my_doc_alerts"
     className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Alert From Doctors
      </NavLink>


      <NavLink
        to="/patient_dashboard/my_lab_alerts"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Alert From Labs
      </NavLink>


     

      
    </div>
  );
};

export default PatientDashboard;
