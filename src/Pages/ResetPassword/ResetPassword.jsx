import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css'; // Assuming a separate CSS file for styling
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPass, setNewPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/resetpassword', {
        password: newPass,
      });
      console.log('Response:', response.data);
      alert('Password reset successfully');
      navigate('/services');

      // Clear the password input field
      setNewPass('');
      
    } catch (error) {
      console.error('Error in Resetting Password:', error);
      alert('Error in Resetting Password');
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 my-sm-5 my-3 outer-form">
            <form onSubmit={handleSubmit}>
              <h2>Reset Password</h2>
              <label htmlFor="newpass">Enter New Password</label>
              <input
                type="password"
                name="newpass"
                id="newpass"
                value={newPass}
                autoComplete="off"
                placeholder="Enter New Password"
                onChange={(e) => setNewPass(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
