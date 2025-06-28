
import { Routes, Route } from 'react-router-dom';

import PharmacySidebar from '../../Components/PharmacySidebar/PharmacySidebar';
import ServedPrescription from './ServedPrescriptions';
import ServedthePrescription from './ServethePrescription';
import AddtheMedicine from './AddtheMedicine';

const PharmacyProfile = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <PharmacySidebar />
      </div>

      <div id="page-content-wrapper">
        <div className="container">
          <Routes>
            <Route path="served_prescription" element={<ServedPrescription />} />
            <Route path="served_the_prescription" element={<ServedthePrescription />} />
            <Route path="add_the_medicine" element={<AddtheMedicine/>} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProfile;
