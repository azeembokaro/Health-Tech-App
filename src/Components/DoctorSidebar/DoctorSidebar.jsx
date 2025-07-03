import React from 'react';
import { NavLink } from 'react-router-dom';
import './DoctorSidebar.css';

const DoctorSidebar = () => {
  return (
    <div className="list-group ms-sm-5 ms-1 doc_sidebar" >
      <NavLink
        to="/doctors_profile/my_profile"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        My Profile
      </NavLink>

      <NavLink
        to="/doctors_profile/my_queue"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        My Waiting Queue
      </NavLink>

      <NavLink
        to="/doctors_profile/my_cases"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        Cases Handled
      </NavLink>

      <NavLink
        to="/doctors_profile/my_duty"
        className={({ isActive }) =>
          `list-group-item list-group-item-action my-sm-3 my-1 p-1 ${
            isActive ? 'active-link' : ''
          }`
        }
      >
        My Duty
      </NavLink>
    </div>
  );
};

export default DoctorSidebar;
