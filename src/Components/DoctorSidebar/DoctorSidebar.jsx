import React from 'react';
import { Link } from 'react-router-dom';

const DoctorSidebar = () => {
  return (
    <div className="list-group">

      <Link to="/doctors_profile/my_profile" className="list-group-item list-group-item-action active my-3">
        My Profile
      </Link>

      <Link to="/doctors_profile/my_queue" className="list-group-item list-group-item-action my-3">
        My Waiting Queue
      </Link>

      <Link to="/doctors_profile/my_cases" className="list-group-item list-group-item-action my-3">
        Cases Handled
      </Link>

      <Link to="/doctors_profile/my_duty" className="list-group-item list-group-item-action my-3">
        My Duty
      </Link>

    </div>
  );
};

export default DoctorSidebar;
