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
        <div className="row align-items-center">
          <div className="col-sm-7 col-10 offset-sm-0 offset-1 text-center">
            <h2 className="py-sm-5 py-3" id = "hero-heading">
              Welcome to AI powered health tech revolution
            </h2>
            <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio eligendi incidunt quae molestias quos minus. Possimus quo amet vel sit maiores. Quaerat culpa accusamus exercitationem quo, rem enim corporis doloribus iure esse, earum iusto numquam magni magnam ex ipsa, autem pariatur optio incidunt! Saepe praesentium fugit eius voluptatum illum?
            </p>

            <div className="sign-up py-sm-5 py-3 d-sm-flex justify-content-sm-between align-items-center">
              <button
                className="d-sm-inline-block w-sm-50 w-100"
                onClick={handlePatientSignup}
              >
                SignUp as a Patient <IoPerson className='ms-3' size={28}/>
              </button>

              <button
                className="d-inline-block w-sm-50 w-100 ms-sm-3 mt-sm-0 mt-3"
                onClick={handleBusinessSignup}
              >
                SignUp for Business Entity <RiHealthBookLine className='ms-3' size = {28}/>
              </button>
            </div>
          </div>

          <div className="col-sm-5 col-10 offset-sm-0 offset-1 text-center">
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
