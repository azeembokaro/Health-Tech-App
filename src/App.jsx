import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";

import Services from "./Pages/Services/Services";

import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import PatientLogin from "./Pages/PatientLogin/PatientLogin";

import Buisnesslog from "./Pages/BuisnessLogin/BuisnessLogin";
import SignUpPatient from "./Pages/SignUpPatient/SignUpPatient";
import SignUpbuisness from "./Pages/SignUpbuisness/SignUpbuisness";

import SignUpRoutes from "./routes/SignUpRoutes";

import LoginRoutes from "./routes/LoginRoutes";

import DoctorOneTwoOne from "./Pages/DoctorOneTwoOne/DoctorOneTwoOne";

import DoctorPatientChat from "./Pages/DoctorOneTwoOne/Patient_doctor"

import DoctorsProfile from "./Pages/DoctorsProfile/DoctorsProfile";
import PharmacyProfile from "./Pages/PharmacyProfile/PharmacyProfile";
import LabProfile from  "./Pages/LabProfile/LabProfile"

import DigitalConsultation from "./Pages/ConsultationMenu/DigitalConsultation";
import DashboardMenu from "./Pages/DashboardMenu/DashboardMenu";

import AskExpert from "./Pages/AskExpert/AskExpert";

import { PatientProvider } from "./PatientContext";

import { DoctorProvider } from "./DoctorContext";

import { PrescriptionProvider } from "./PrescriptionContext";

import {PharmacyProvider } from "./PharmacyContext"

import { LabProvider } from "./LabContext"

import PersistantQueue from "./Pages/PersistantQueue/PersistantQueue"

function App() {
  return (
    <div>
      <PatientProvider>
        <DoctorProvider>
          <PrescriptionProvider>
            <PharmacyProvider>
             <LabProvider>
 <Router>
              {/* <Header /> */}
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/services" element={<Services />} />

                  <Route path="/patientlogin" element={<PatientLogin />} />

                  <Route path="/buisnesslogin" element={<Buisnesslog />} />

                  <Route path="/buisnesssignup" element={<SignUpbuisness />} />

                  <Route path="/forgotpassword" element={<ForgotPassword />} />
                  <Route path="/resetpassword" element={<ResetPassword />} />

                  <Route path="/signuppatient" element={<SignUpPatient />} />

                  <Route path="/signup/*" element={<SignUpRoutes />} />

                  <Route path="/login/*" element={<LoginRoutes />} />

                  <Route
                    path="/doctors_profile/*"
                    element={<DoctorsProfile />}
                  />

                  <Route
                    path="/pharmacy_profile/*"
                    element={<PharmacyProfile/>}
                  />

                    <Route
                    path="/patient_dashboard/*"
                    element={<DashboardMenu/>}
                  />

                  <Route
                    path="/digital_consultation/*"
                    element={<DigitalConsultation />}
                  />

                   <Route
                    path="/lab_profile/*"
                    element={<LabProfile />}
                  />


                  <Route
                    path="/doctoronetwoone"
                    element={<DoctorOneTwoOne />}
                  />

                   <Route
                    path="/pat_doc_chat"
                    element={<DoctorPatientChat />}
                  />

                  


                  <Route path="/ask_expert" element={<AskExpert />} />

                  <Route path="/persistant_queue" element={<PersistantQueue />} />


                </Routes>
              </main>
            </Router>

             </LabProvider>

              
            </PharmacyProvider>
           
          </PrescriptionProvider>
        </DoctorProvider>
      </PatientProvider>
    </div>
  );
}

export default App;
