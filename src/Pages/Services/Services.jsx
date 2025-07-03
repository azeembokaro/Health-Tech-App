import React from "react";

import Footer from "../../Components/Footer/Footer";
import DoctorCard from "../../assets/images/doctor-card.png";
import ConsultExpert from "../../assets/images/consult-expert.png";
import MedicalInfo from "../../assets/images/medical-info.png";
import MedicalRecord from "../../assets/images/medical.jpeg";
import HealthcareService from "../../assets/images/healthcare-service.png";
import DoctorOneTwoOne from "../DoctorOneTwoOne/DoctorOneTwoOne";
import PersistantQueue from "../PersistantQueue/PersistantQueue";
import "./Services.css";
import "../Home/Home.css";
import { Link } from "react-router-dom";

import { usePatient } from "../../PatientContext";

function Services() {
  const { patient_id } = usePatient(); // ✅ Get patient_id from context
  return (
    <div>
      

      <div class="service-banner align-items-center justify-content-center my-sm-3 my-2 py-sm-4 py-2">
        <h3 className="text-center pt-3 pb-1">
          Avail Our Plethora of Services
        </h3>
        <div class="pt-1 pb-3">
          {patient_id ? (
            <h3>Hello, Patient ID: {patient_id}</h3>
          ) : (
            <h3>No patient logged in.</h3>
          )}
        </div>
      </div>

      <div className="container services">
        <div className="row mt-sm-5 mt-3 my-0">
          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={DoctorCard} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title ">Exclusive 1 to 1 Free Digital Consultation</h6>
                <p>
                 Report your medical conditions, assisted by AI for Free Digital Consultatiom by our platform doctors in matters of secounds.
                </p>
                <Link to="/DoctorOneTwoOne" className="btn btn-primary w-sm-25 w-75 mx-auto my-3">
                  Avail Service
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={MedicalRecord} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title">Free Consultation </h6>
                <p>
                  Get in touch with Expert Consultant Doctors for Medical Ailments, 2nd Opinion or Expert Advice within 24-48 hours, ABSOLUTELY FREE.{" "}
                </p>
                <Link to="/persistant_queue" className="btn  w-sm-25 w-75 mx-auto my-3">
                  Avail Service
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={MedicalInfo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title">Health Dashboard</h6>
                <p>
                  View, Trace and Track all your Digital Prescriptions, Medical Cases, Medical Reports, Doctors Notifications, Health Statistics etc
                </p>
                <Link to="/patient_dashboard" className="btn w-sm-50 w-75 mx-auto my-3">
                  Avail Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row  my-sm-5 my-2">
          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={ConsultExpert} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title">Consult With Expert</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora nam possimus quis quibusdam vel tempore recusandae
                  explicabo assumenda vitae repellendus! Nemo quaerat corporis
                  excepturi
                </p>
                <Link to="/ask_expert" className="btn w-sm-50 w-75 mx-auto my-3">
                  Avail Service
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 offset-sm-0 mb-sm-0 mb-3 offset-1">
            <div className="card pt-4 pb-2">
              <img src={HealthcareService} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title">Find Healthcare Service</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  dolorem corrupti quasi ab voluptates sapiente numquam tempore,
                  aspernatur, rem quo consectetur temporibus adipisci
                </p>
                <a href="#" className="btn w-sm-50 w-75 mx-auto my-3">
                  Avail Service
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 mb-sm-0 mb-3  offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={HealthcareService} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className=" text-center card-title">Find Healthcare Service</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  dolorem corrupti quasi ab voluptates sapiente numquam tempore,
                  aspernatur, rem quo consectetur temporibus adipisci
                </p>
                <a href="#" className="btn w-sm-50 w-75 mx-auto my-3">
                  Avail Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
