import React, { useState } from 'react';
import axios from 'axios';

function PharmacySignUp() {
  const [form, setForm] = useState({
    name: '',
    ownername: '',
    licenseNo: '',
    location: '',
    type: '',
    yearofestab: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
  });

  const [pharmacyLicenseDoc, setPharmacyLicenseDoc] = useState(null);
  const [proofOfEstablishment, setProofOfEstablishment] = useState(null);
  const [plogin, setPlogin] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pharmacyLicenseDoc || !proofOfEstablishment) {
      alert('Please upload both license and proof documents');
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('pharmacyLicenseDoc', pharmacyLicenseDoc);
    formData.append('proofofEstablishment', proofOfEstablishment);

    try {
      const response = await axios.post('http://localhost:8080/pharmacyapi/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Pharmacy registered successfully!');
      setPlogin(true);
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during pharmacy signup.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center py-3">Pharmacy SignUp</h2>

            <label>Name of Establishment</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} className="form-control mb-2" />

            <label>Owner's Name</label>
            <input type="text" name="ownername" required value={form.ownername} onChange={handleChange} className="form-control mb-2" />

            <label>Pharmacy License Number</label>
            <input type="text" name="licenseNo" required value={form.licenseNo} onChange={handleChange} className="form-control mb-2" />

            <label>Location</label>
            <input type="text" name="location" required value={form.location} onChange={handleChange} className="form-control mb-2" />

            <label>Service Type</label>
            <select name="type" required value={form.type} onChange={handleChange} className="form-select mb-2">
              <option value="">Select Service Type</option>
              <option value="Whole Saler">Whole Saler</option>
              <option value="Retail Shop">Retail Shop</option>
              <option value="Retail and Home Delivery">Retail and Home Delivery</option>
              <option value="In Store Pick Up">In Store Pick Up</option>
            </select>

            <label>Year of Establishment</label>
            <input type="number" name="yearofestab" required value={form.yearofestab} onChange={handleChange} className="form-control mb-2" />

            <label>Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} className="form-control mb-2" />

            <label>Mobile Number</label>
            <input type="text" name="mobileNo" required value={form.mobileNo} onChange={handleChange} className="form-control mb-2" />

            <label>Password</label>
            <input type="password" name="password" required value={form.password} onChange={handleChange} className="form-control mb-2" />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange} className="form-control mb-2" />

            <label>Upload Pharmacy License</label>
            <input type="file" accept="image/*,.pdf" required onChange={(e) => setPharmacyLicenseDoc(e.target.files[0])} className="form-control mb-2" />

            <label>Upload Proof of Establishment</label>
            <input type="file" accept="image/*,.pdf" required onChange={(e) => setProofOfEstablishment(e.target.files[0])} className="form-control mb-3" />

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PharmacySignUp;
