import React, { useState } from 'react';
import axios from 'axios';

function PharmacySignUp() {
  const [formData, setFormData] = useState({
    establishmentName: '',
    yearEstablished: '',
    location: '',
    email: '',
    mobile: '',
    ownerName: '',
    licenseNumber: '',
    proofOfEstablishment: null,
    pharmacyLicense: null,
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'proofOfEstablishment' || name === 'pharmacyLicense') {
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
      await axios.post('https://jsonplaceholder.typicode.com/posts', data); // replace with actual backend
      alert('Pharmacy registered successfully!');
      setFormData({
        establishmentName: '',
        yearEstablished: '',
        location: '',
        email: '',
        mobile: '',
        ownerName: '',
        licenseNumber: '',
        proofOfEstablishment: null,
        pharmacyLicense: null,
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to register pharmacy');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Pharmacy Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Name of Establishment</label>
            <input type="text" name="establishmentName" required className="form-control" value={formData.establishmentName} onChange={handleChange} />
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
            <label>Mobile Number</label>
            <input type="text" name="mobile" required className="form-control" value={formData.mobile} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Owner's Name</label>
            <input type="text" name="ownerName" required className="form-control" value={formData.ownerName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Pharmacy License Number</label>
            <input type="text" name="licenseNumber" required className="form-control" value={formData.licenseNumber} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Upload Pharmacy License</label>
            <input type="file" name="pharmacyLicense" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Upload Proof of Establishment</label>
            <input type="file" name="proofOfEstablishment" accept=".pdf,.jpg,.jpeg,.png" className="form-control" onChange={handleChange} />
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
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default PharmacySignUp;
