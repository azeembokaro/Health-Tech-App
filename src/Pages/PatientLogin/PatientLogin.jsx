// src/Pages/PatientLogin/PatientLogin.jsx
import React, { useState } from "react";
import axios from "axios";
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
    <form onSubmit={handleSubmit}>
      <h2>Patient Login</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patient_id}
        onChange={(e) => setPatient_id(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default PatientLogin;
