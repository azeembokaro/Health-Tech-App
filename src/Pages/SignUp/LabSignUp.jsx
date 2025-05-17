import React, { useState } from 'react';
import axios from 'axios';

function LabSignUp() {
  const [formData, setFormData] = useState({
    labName: '',
    yearEstablished: '',
    location: '',
    email: '',
    contact: '',
    ownerName: '',
    registrationNumber: '',
    registrationProof: null,
    licenseCertificate: null,
    labType: '',
    services: '',
    password: '',
    confirmPassword: ''
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
      await axios.post('https://jsonplaceholder.typicode.com/posts', data); // Replace with actual API
      alert('Diagnosis Lab registered successfully!');
      setFormData({
        labName: '',
        yearEstablished: '',
        location: '',
        email: '',
        contact: '',
        ownerName: '',
        registrationNumber: '',
        registrationProof: null,
        licenseCertificate: null,
        labType: '',
        services: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Diagnosis Lab Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Name of Lab</label>
            <input type="text" name="labName" required className="form-control" value={formData.labName} onChange={handleChange} />
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
            <label>Email</label>
            <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Contact Number</label>
            <input type="text" name="contact" required className="form-control" value={formData.contact} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Owner/Manager Name</label>
            <input type="text" name="ownerName" required className="form-control" value={formData.ownerName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Lab Registration Number</label>
            <input type="text" name="registrationNumber" required className="form-control" value={formData.registrationNumber} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Upload Registration Proof</label>
            <input type="file" name="registrationProof" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Upload License Certificate</label>
            <input type="file" name="licenseCertificate" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Type of Lab</label>
            <select name="labType" required className="form-control" value={formData.labType} onChange={handleChange}>
              <option value="">-- Select Lab Type --</option>
              <option value="Pathology">Pathology</option>
              <option value="Radiology">Radiology</option>
              <option value="Microbiology">Microbiology</option>
              <option value="Biochemistry">Biochemistry</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="col-md-12 mb-3">
            <label>Available Services</label>
            <textarea name="services" className="form-control" rows="3" value={formData.services} onChange={handleChange}></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label>Password</label>
            <input type="password" name="password" required className="form-control" value={formData.password} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required className="form-control" value={formData.confirmPassword} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100">Register Lab</button>
      </form>
    </div>
  );
}

export default LabSignUp;
