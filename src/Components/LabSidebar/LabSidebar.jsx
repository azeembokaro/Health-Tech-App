import React from 'react';
import { NavLink } from 'react-router-dom';
import './LabSidebar.css'

const LabSidebar = () => {
  return (
    <div className="list-group ms-sm-5 ms-2">
      <NavLink
        to="/lab_profile/serve_diagnosis"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        Serve Diagnosis
      </NavLink>

      <NavLink
        to="/lab_profile/serve_the_diagnosis"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 py-2 px-5 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        Serve The Diagnosis
       
      </NavLink>

    

     
    </div>
  );
};

export default LabSidebar;
