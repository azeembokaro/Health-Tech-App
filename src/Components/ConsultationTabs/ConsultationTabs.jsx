import React from 'react';
import { NavLink } from 'react-router-dom';


const ConsultationTabs = () => {
  return (
    <div className="list-group ms-sm-5 ms-2">
      <NavLink
        to="/digital_consultation/doctor_observation"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        Doctor's Observation
      </NavLink>

      <NavLink
        to="/digital_consultation/doctors_symptoms "
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Doctor's symptoms
      </NavLink>


       <NavLink
        to="/digital_consultation/diagnosis_test"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Diagnosis Test
      </NavLink>


      <NavLink
        to="/digital_consultation/medicines_prescribed"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Medicines Prescribed
      </NavLink>


        <NavLink
        to="/digital_consultation/diagnosis"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Diagnosis
      </NavLink>


      <NavLink
        to="/digital_consultation/treatment_plan"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
       Treatment Plan
      </NavLink>


     

      
    </div>
  );
};

export default ConsultationTabs;
