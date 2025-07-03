import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LabSidebar from '../../Components/LabSidebar/LabSidebar'

import ServeDiagnosis from './ServedDiagnosis';
import ServetheDiagnosis from './ServedtheDiagnosis';




const LabProfile = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <LabSidebar/>
      </div>

      <div id="page-content-wrapper">
        <div className="container">
        
<Routes>
     <Route path="serve_diagnosis" element={<ServeDiagnosis />} />
            <Route path="serve_the_diagnosis" element={<ServetheDiagnosis />} />
            

          </Routes>
        
          
        </div>
      </div>
    </div>
  );
};

export default LabProfile;
