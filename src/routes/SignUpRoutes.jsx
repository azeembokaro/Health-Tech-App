import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorSignUp from "../Pages/SignUp/DoctorsSignUp";
import PharmacySignUp from "../Pages/SignUp/PharmacySignUp";
import LabSignUp from "../Pages/SignUp/LabSignUp";
import ClinicSignUp from "../Pages/SignUp/ClinicSignUp";



function SignUpRoutes() {
  return (
    <Routes>
      <Route path="doctors" element={<DoctorSignUp />} />
      <Route path="pharmacy" element={<PharmacySignUp />} />
      <Route path="labs" element={<LabSignUp />} />
      <Route path="clinic" element={<ClinicSignUp/>} />
      
    </Routes>
  );
}

export default SignUpRoutes;
