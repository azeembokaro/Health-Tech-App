import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home'

import Services from './Pages/Services/Services'

import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import PatientLogin from './Pages/PatientLogin/PatientLogin'

import Buisnesslog from './Pages/BuisnessLogin/BuisnessLogin';
import SignUpPatient from './Pages/SignUpPatient/SignUpPatient'
import SignUpbuisness from './Pages/SignUpbuisness/SignUpbuisness'

import SignUpRoutes from "./routes/SignUpRoutes";

import LoginRoutes from './routes/LoginRoutes'

import DoctorOneTwoOne from './Pages/DoctorOneTwoOne/DoctorOneTwoOne'

import DoctorsProfile from './Pages/DoctorsProfile/DoctorsProfile'

import { PatientProvider } from './PatientContext';


function App() {
  return (

    
    <div>
      <PatientProvider>
<Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
         

          <Route path="/services" element={<Services />} />

          <Route path="/patientlogin" element={<PatientLogin/>} />

          <Route path="/buisnesslogin" element={<Buisnesslog />} />

          <Route path="/buisnesssignup" element={<SignUpbuisness/>} />

         
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />

          <Route path="/signuppatient" element={<SignUpPatient/>} />

          <Route path="/signup/*" element={<SignUpRoutes />} />

           <Route path="/login/*" element={<LoginRoutes />} />

           

           <Route path="/doctors_profile/*" element={<DoctorsProfile />} />


           <Route path="/doctoronetwoone" element={<DoctorOneTwoOne/>} />

         

        </Routes>
      </main>
     
    </Router>
      </PatientProvider>

      
    </div>
  )
}

export default App
