import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DoctorSidebar from '../../Components/DoctorSidebar/DoctorSidebar';
import MyProfile from './MyProfile';
import MyQueue from './MyWatingQueue';
import MyDuty from './MyDuty';
import MyCases from './CasesHandled';



const DoctorProfile = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <DoctorSidebar />
      </div>

      <div id="page-content-wrapper">
        <div className="container">
        
<Routes>
            <Route path="my_profile" element={<MyProfile />} />
            
<Route path="my_queue" element={<MyQueue />} />

            
            <Route path="my_duty" element={<MyDuty />} />
            <Route path="my_cases" element={<MyCases />} />
          </Routes>
        
          
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
