import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HomeImg from '../../assets/images/home-img.png';
import { IoPerson } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";

import './Home.css';

function Home() {
  const navigate = useNavigate();

  // Function to redirect to business signup
  const handleBusinessSignup = () => {
    navigate('/buisnesssignup');
  };

  // Optional: Add a similar function for patient signup
  const handlePatientSignup = () => {
    navigate('/signuppatient'); // Only if you create this route
  };

  return (
    <div>
      <Header />

      <div className="container my-sm-5 my-3">
        <div className="row">
          <div className="col-sm-6 col-10">
            <h2 className="text-center py-sm-5 py-3">
              Welcome to AI powered health tech revolution
            </h2>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam incidunt, reiciendis quia veniam perferendis maxime hic natus. Minus, vero!
            </p>

            <div className="sign-up py-sm-5 py-3 d-sm-flex justify-content-sm-between">
              <button
                className="d-sm-inline-block w-sm-25 w-75"
                onClick={handlePatientSignup}
              >
                SignUp as a Patient <IoPerson />
              </button>

              <button
                className="d-inline-block w-sm-25 w-75 ms-sm-3 mt-sm-0 mt-3"
                onClick={handleBusinessSignup}
              >
                SignUp for Business Entity <RiHealthBookLine />
              </button>
            </div>
          </div>

          <div className="col-sm-6 col-10 text-center">
            <div className="hero-img-div">
              <img src={HomeImg} alt="home-img" className="home-img" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
