import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import {useNavigate} from 'react-router-dom'

import { Link } from 'react-router-dom'



function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', {
        email,
        password,
      });
      console.log('Response:', response.data);
      alert('Form submitted successfully');
      navigate('/login')

      // Clear the input fields
      setEmail('');
      setPassword('');
      
    } catch (error) {
      console.error('Error in ForgotPassword Form:', error);
      alert('Error in ForgotPassword Page');
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 my-sm-5 my-3 outer-form">
         
            <form onSubmit={handleSubmit}>
            <h2>ForgotPassword</h2>
              <label htmlFor="user">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                autoComplete='off'
                placeholder='Enter Your Email'
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name="pass"
                id="pass"
                value={password}
                autoComplete='off'
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              
              <p className="py-2">
            <Link to = "/login">Login Again</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
