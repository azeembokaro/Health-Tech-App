import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import DoctorCard from '../../assets/images/doctor-card.png';
import ConsultExpert from '../../assets/images/consult-expert.png';
import MedicalInfo from '../../assets/images/medical-info.png';
import MedicalRecord from '../../assets/images/medical.jpeg';
import HealthcareService from '../../assets/images/healthcare-service.png';
import DoctorOneTwoOne from '../DoctorOneTwoOne/DoctorOneTwoOne';
import './Services.css'
import '../Home/Home.css'
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div>
      <Header/>
      
       
      <div className="container services">
        <div className="row">
          <h3 className="text-center py-3 text-dark">Avail Our Plethora of Services</h3>
          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={DoctorCard} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">One To One With Doctor</p>
                 <Link to="/DoctorOneTwoOne" className="btn btn-primary">
          Avail Service
        </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={ConsultExpert} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">Consult With Expert</p>
                <a href="#" className="btn btn-primary">Avail Service</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-10 mb-sm-0 mb-3 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={MedicalInfo} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">Medical Info Sharing</p>
                <a href="#" className="btn btn-primary">Avail Service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row services">
          <div className="col-sm-4 col-10 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={MedicalRecord} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">Medical Records</p>
                <a href="" className="btn btn-primary w-50 mx-auto">Avail Service</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-10 offset-sm-0 offset-1">
            <div className="card pt-4 pb-2">
              <img src={HealthcareService} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">Find Healthcare Service</p>
                <a href="#" className="btn btn-primary">Avail Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
