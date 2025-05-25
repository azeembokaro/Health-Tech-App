import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorLogin from "../Pages/Login/DoctorLogin";
import Pharmacylogin from "../Pages/Login/PharmacyLogin";
import Lablogin from "../Pages/Login/LabLogin";
import Cliniclogin from "../Pages/Login/ClinicLogin";



function LoginRoutes() {
  return (
    <Routes>
      <Route path="doctorlogin" element={<DoctorLogin />} />
      <Route path="pharmacylogin" element={<Pharmacylogin />} />
      <Route path="lablogin" element={<Lablogin />} />
      <Route path="cliniclogin" element={<Cliniclogin/>} />
      
    </Routes>
  );
}

export default LoginRoutes;
