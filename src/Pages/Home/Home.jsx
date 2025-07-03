import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeImg from "../../assets/images/home-img.png";
import { IoPerson } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";
// import "animate.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Function to redirect to business signup
  const handleBusinessSignup = () => {
    navigate("/buisnesssignup");
  };

  // Optional: Add a similar function for patient signup
  const handlePatientSignup = () => {
    navigate("/signuppatient"); // Only if you create this route
  };

  return (
    <div>
      <Header />

      <div className="container-fluid my-sm-5 my-3 ">
        <div className="row align-items-center">
          <h2 className="text-center" id="hero-heading">
              Welcome to AI powered health tech revolution
            </h2>
          <div className="col-sm-9 col-12 offset-sm-0 text-center animate__animated animate__backInDown animate__slower animate__delay-.8s">
            
            <ul className="hero-list">
              <li className="my-sm-3 my-2 p-3 ms-sm-0">
                <i class="bi bi-check-lg icon-bg"></i>
                <span>
                  The only Health-tech platform which gives unlimited & absolutely FREE ONLINE
                  Digital Consultation, Medical Advice and Opinions. Complete
                  Digitilization of medical records with tracing and tracking of
                  all medical lifecycle events captured.
                </span>
              </li>
              <li className="my-sm-3 my-2 p-3" id="secound_hero_card">
                <i className="bi bi-check-circle-fill icon-bg me-3"></i>
                <span>
                  Use of Artificial Intelligence to help patients as well as
                  platform doctors for efficient medical process, reporting and
                  treatment.
                </span>
              </li>
              <li className="my-sm-3 my-2 p-3 ms-sm-0">
                <i className="bi bi-check-circle-fill icon-bg me-3"></i>
                <span>
                  The only Health-tech platform which seamlessly integrates all
                  stakeholders in medical care, i.e Patients, Doctors, Pharmacy, Diagnostics lab etc
                  under 1 integrated digital umbrella.
                </span>
              </li>
            </ul>

           
          </div>

          <div className="col-sm-3 col-10 offset-sm-0 offset-1 text-center">
            <div className="hero-img-div">
              <img src={HomeImg} alt="home-img" className="home-img" />
            </div>
          </div>

           
        </div>

        <div class="row text-center">
          <div class="col-12">
<div className="sign-up py-sm-5 py-3">
              <button
                className="hero-button"
                onClick={handlePatientSignup}
              >
                Patient SignUP <IoPerson className="ms-3" size={28} />
              </button>

              <button
                className="hero-button ms-sm-5 ms-0 my-sm-0 my-4"
                onClick={handleBusinessSignup}
              >
                Business SignUp{" "}
                <RiHealthBookLine className="ms-3" size={28} />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
