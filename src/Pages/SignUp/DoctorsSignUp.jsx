import React, { useState } from 'react';

import axios from 'axios';

function DoctorsSignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    practitionerId: '',
    email: '',
    mobile: '',
    location: '',
    speciality: 'Cardiology',
    experience: '',
    qualification: '',
    password: '',
    confirmPassword: '',
    certificate: null
  });

  const specialities = ['Cardiology', 'Neurology', 'Nephrology', 'Orthopedics', 'Dermatology', 'Pediatrics', 'ENT', 'Oncology'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'certificate') {
      setFormData({ ...formData, certificate: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare form data for API
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', data); // replace with real endpoint
      alert('Doctor registered successfully!');
      setFormData({
        fullName: '',
        practitionerId: '',
        email: '',
        mobile: '',
        location: '',
        speciality: 'Cardiology',
        experience: '',
        qualification: '',
        password: '',
        confirmPassword: '',
        certificate: null
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to register doctor');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Doctor Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input type="text" name="fullName" required className="form-control" value={formData.fullName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Practitioner ID</label>
            <input type="text" name="practitionerId" required className="form-control" value={formData.practitionerId} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Mobile Number</label>
            <input type="text" name="mobile" required className="form-control" value={formData.mobile} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Location</label>
            <input type="text" name="location" required className="form-control" value={formData.location} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Speciality</label>
            <select name="speciality" className="form-control" value={formData.speciality} onChange={handleChange}>
              {specialities.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Years of Experience</label>
            <input type="number" name="experience" required className="form-control" value={formData.experience} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Qualification</label>
            <input type="text" name="qualification" required className="form-control" value={formData.qualification} onChange={handleChange} />
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
            <label>Upload Certification (PDF or Image)</label>
            <input type="file" name="certificate" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default DoctorsSignUp;
