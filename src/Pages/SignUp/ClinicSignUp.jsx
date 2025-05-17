import React, { useState } from 'react';
import axios from 'axios';

function ClinicRegistration() {
  const [formData, setFormData] = useState({
    clinicName: '',
    clinicType: '',
    ownerName: '',
    yearEstablished: '',
    location: '',
    registrationNumber: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    registrationFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', data); // Replace with real API
      alert('Clinic registered successfully!');
      setFormData({
        clinicName: '',
        clinicType: '',
        ownerName: '',
        yearEstablished: '',
        location: '',
        registrationNumber: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
        registrationFile: null,
      });
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Clinic Registration Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Clinic Name</label>
            <input type="text" name="clinicName" required className="form-control" value={formData.clinicName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Clinic Type</label>
            <input type="text" name="clinicType" required className="form-control" value={formData.clinicType} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Owner's Name</label>
            <input type="text" name="ownerName" required className="form-control" value={formData.ownerName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Year of Establishment</label>
            <input type="number" name="yearEstablished" required className="form-control" value={formData.yearEstablished} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Location</label>
            <input type="text" name="location" required className="form-control" value={formData.location} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Registration Number</label>
            <input type="text" name="registrationNumber" required className="form-control" value={formData.registrationNumber} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Contact Number</label>
            <input type="text" name="contact" required className="form-control" value={formData.contact} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Password</label>
            <input type="password" name="password" required className="form-control" value={formData.password} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required className="form-control" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="col-md-12 mb-3">
            <label>Upload Proof of Registration (PDF/Image)</label>
            <input type="file" name="registrationFile" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Register Clinic</button>
      </form>
    </div>
  );
}

export default ClinicRegistration;
