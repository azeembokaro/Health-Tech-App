import React, { useState } from 'react';
import axios from 'axios';
import styles from './pharmacysignup.module.css'; // Importing the CSS module

import PharmacyLogin from '../PharmacyLogin/PharmacyLogin';

function PharmacySignUp({ blogin, clogin }) {
  // Define state variables for each form field
  const [pharmacyName, setPharmacyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [documents, setDocuments] = useState(null);
  const [plogin, setPlogin] = useState(false);

  const cplogin = () => {
    setPlogin(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace '' with your API endpoint URL
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        pharmacyName,
        ownerName,
        registrationNo,
        address,
        serviceType,
      });
      console.log('Response:', response.data);
      alert('Pharmacy Signed Up successfully');

      // Clear the input fields
      setPharmacyName('');
      setOwnerName('');
      setRegistrationNo('');
      setAddress('');
      setServiceType('');
      setDocuments(null);
      setPlogin(true);
    } catch (error) {
      console.error('Error in Login Form:', error);
      alert('Error in Login Page');
    }
  };

  return (
    <>
      {!plogin ? (
        blogin && (
          <div className={styles.loginInfo}>
            <div className="row">
              <div className={`col-8 offset-2 my-sm-5 my-3 ${styles.outerForm}`}>
               

                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className="text-center py-4">Pharmacy SignUp</h2>

                  <label htmlFor="pname">Pharmacy Name</label>
                  <input
                    type="text"
                    id="pname"
                    value={pharmacyName}
                    autoComplete="off"
                    placeholder="Enter Name of Pharmacy"
                    required
                    onChange={(e) => setPharmacyName(e.target.value)}
                  />

                  <label htmlFor="oname">Owner's Name</label>
                  <input
                    type="text"
                    id="oname"
                    value={ownerName}
                    autoComplete="off"
                    placeholder="Enter Owner's Name"
                    required
                    onChange={(e) => setOwnerName(e.target.value)}
                  />

                  <label htmlFor="rno">Registration No</label>
                  <input
                    type="number"
                    id="rno"
                    value={registrationNo}
                    autoComplete="off"
                    placeholder="Enter Registration No"
                    required
                    onChange={(e) => setRegistrationNo(e.target.value)}
                  />

                  <label htmlFor="add">Address</label>
                  <input
                    type="text"
                    id="add"
                    value={address}
                    autoComplete="off"
                    placeholder="Enter Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <label htmlFor="stype">Service Type</label>
                  <select
                    id="stype"
                    value={serviceType}
                    required
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option value="">Select Service Type</option>
                    <option value="Whole Saler">Whole Saler</option>
                    <option value="Retail Shop">Retail Shop</option>
                    <option value="Retail and Home Delivery">Retail and Home Delivery</option>
                    <option value="In Store Pick Up">In Store Pick Up</option>
                  </select>

                  <label htmlFor="docs">Upload Supporting Documents</label>
                  <input
                    type="file"
                    id="docs"
                    multiple
                    accept="image/png, image/jpeg"
                    onChange={(e) => setDocuments(e.target.files)}
                  />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        )
      ) : (
        <PharmacyLogin plogin={plogin} cplogin={cplogin} />
      )}
    </>
  );
}

export default PharmacySignUp;
