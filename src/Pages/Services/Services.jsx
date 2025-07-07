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
      

      <div class="service-banner align-items-center justify-content-center my-sm-2 my-4">
        
        <div class="py-1">
          {patient_id ? (
            <h5 className="text-start text-info">Hello, Patient ID: {patient_id}</h5>
          ) : (
            <h5 className="text-start text-info">No patient logged in.</h5>
          )}
        </div>
      </div>

      <div className="container services">
        <div className="row mt-sm-1 mt-3 my-0">
          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={DoctorCard} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className=" text-center card-title pb-2 ">Exclusive 1 to 1 Free Digital Consultation</h5>
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
                <h5 className=" text-center card-title pb-2">Free Consultation </h5>
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
                <h5 className=" text-center card-title pb-2">Health Dashboard</h5>
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
                <h5 className=" text-center card-title pb-2">Consult With Expert</h5>
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
                <h5 className=" text-center card-title pb-2">Find Healthcare Service</h5>
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
                <h5 className=" text-center card-title pb-2">Find Healthcare Service</h5>
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
