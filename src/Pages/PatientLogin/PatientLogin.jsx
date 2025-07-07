// src/Pages/PatientLogin/PatientLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import  './patientLogin.css'
import { useNavigate } from "react-router-dom";
import { usePatient } from "../../PatientContext";

function PatientLogin() {
  const { setPatientId } = usePatient(); // ✅ Use context setter
  const [patient_id, setPatient_id] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/patientsignin", {
        patient_id,
        password,
      });

      // Save patient ID to context
      setPatientId(response.data.patient_id);

      // Redirect to services page
      navigate("/services");
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
<>

 <div className="container mt-sm-5 mt-3">
  <div className="row">
    <div className="col-sm-6 col-8 offset-sm-3 offset-2">
<form onSubmit={handleSubmit} className="login p-sm-5 p-3">
      <h3 className="text-center">Patient Login</h3>
      <label for="" className="py-2">Enter Your Patient ID</label>
      <input
        type="text"
        placeholder="Patient ID"
        value={patient_id}
        onChange={(e) => setPatient_id(e.target.value)}
        required
      />
      <label for="" className="py-2">Enter Your Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="my-sm-4 my-2 text-center">
 <button type="submit" className="btn btn-lg btn-primary text-center w-75">Login</button>
      </div>
     
    </form>
    </div>
  </div>

    </div>
    

</>
   
  );
}

export default PatientLogin;
