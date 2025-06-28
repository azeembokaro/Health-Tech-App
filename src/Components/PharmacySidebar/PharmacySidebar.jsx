import React from 'react';
import { NavLink } from 'react-router-dom';
import './PharmacySidebar.css'

const PharmacySidebar = () => {
  return (
    <div className="list-group mx-3 my-2 py-sm-5 py-2">
      <NavLink
        to="/pharmacy_profile/served_prescription"
        className={({ isActive }) =>
          `list-group-item list-group-item-action list_button my-sm-3 my-1  ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        Served Prescription
      </NavLink>

      <NavLink
        to="/pharmacy_profile/served_the_prescription"
        className={({ isActive }) =>
          `list-group-item list-group-item-action list_button my-sm-3 my-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
      Served The Prescription
      </NavLink>

     <NavLink
        to="/pharmacy_profile/add_the_medicine"
        className={({ isActive }) =>
          `list-group-item list-group-item-action list_button 
        my-sm-3 my-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
     Add The Medicine
      </NavLink>

     





      
    </div>
  );
};

export default PharmacySidebar;
