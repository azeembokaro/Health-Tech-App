import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeImg from "../../assets/images/home-img.png";
import { IoPerson } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";
import "animate.css";
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
          <div className="col-sm-7 col-10 offset-sm-0 offset-1 text-center animate__animated animate__backInDown animate__slower animate__delay-.8s">
            <h2 className="text-center" id="hero-heading">
              Welcome to AI powered health tech revolution
            </h2>
            <ul className="hero-list">
              <li className="my-sm-3 my-2 p-3 d-flex align-items-center ">
                <i class="bi bi-check-lg icon-bg"></i>
                <span>
                  The only Health-tech platform which gives unlimited & absolutely FREE ONLINE
                  Digital Consultation, Medical Advice and Opinions. Complete
                  Digitilization of medical records with tracing and tracking of
                  all medical lifecycle events captured.
                </span>
              </li>
              <li className="my-sm-3 my-2 p-3 d-flex align-items-center ms-sm-5">
                <i className="bi bi-check-circle-fill icon-bg me-3"></i>
                <span>
                  Use of Artificial Intelligence to help patients as well as
                  platform doctors for efficient medical process, reporting and
                  treatment.
                </span>
              </li>
              <li className="my-sm-3 my-2 p-3 d-flex align-items-center me-sm-5">
                <i className="bi bi-check-circle-fill icon-bg me-3"></i>
                <span>
                  The only Health-tech platform which seamlessly integrates all
                  stakeholders in medical care, i.e Patients, Doctors, Pharmacy, Diagnostics lab etc
                  under 1 integrated digital umbrella.
                </span>
              </li>
            </ul>

            <div className="sign-up py-3 d-sm-flex justify-content-sm-between align-items-center">
              <button
                className="d-sm-inline-block w-sm-50 w-100"
                onClick={handlePatientSignup}
              >
                SignUp as a Patient <IoPerson className="ms-3" size={28} />
              </button>

              <button
                className="d-inline-block w-sm-50 w-100 ms-sm-3 mt-sm-0 mt-3"
                onClick={handleBusinessSignup}
              >
                SignUp for Business Entity{" "}
                <RiHealthBookLine className="ms-3" size={28} />
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
