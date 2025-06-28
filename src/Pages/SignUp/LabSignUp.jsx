//Lab signup code should be written here


import React, { useState } from 'react';
import axios from 'axios';

function LabSignUp() {
  const [form, setForm] = useState({
    name: '',
    ownername: '',
    location: '',
    yearofestab: '',
    labregno: '',
    gstin: '',
    password: '',
    confirmPassword: '',
  });

  const [establishmentProof, setEstablishmentProof] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!establishmentProof) {
      alert("Please upload establishment proof.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("establishmentProof", establishmentProof);

    try {
      const response = await axios.post('http://localhost:8080/labapi/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("Diagnostic Lab registered successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error during diagnostic lab signup.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center py-3">Diagnostic Lab SignUp</h2>

            <label>Name of Lab</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} className="form-control mb-2" />

            <label>Owner's Name</label>
            <input type="text" name="ownername" required value={form.ownername} onChange={handleChange} className="form-control mb-2" />

            <label>Location</label>
            <input type="text" name="location" required value={form.location} onChange={handleChange} className="form-control mb-2" />

            <label>Year of Establishment</label>
            <input type="number" name="yearofestab" required value={form.yearofestab} onChange={handleChange} className="form-control mb-2" />

            <label>Lab Registration Number</label>
            <input type="text" name="labregno" required value={form.labregno} onChange={handleChange} className="form-control mb-2" />

            <label>GSTIN</label>
            <input type="text" name="gstin" required value={form.gstin} onChange={handleChange} className="form-control mb-2" />

            <label>Password</label>
            <input type="password" name="password" required value={form.password} onChange={handleChange} className="form-control mb-2" />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange} className="form-control mb-2" />

            <label>Upload Establishment Proof</label>
            <input type="file" accept="image/*,.pdf" required onChange={(e) => setEstablishmentProof(e.target.files[0])} className="form-control mb-3" />

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LabSignUp;
