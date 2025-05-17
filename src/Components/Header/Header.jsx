import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Ensure NavLink is imported
import { IoPerson } from "react-icons/io5";
import { RiMentalHealthLine } from "react-icons/ri";

import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-sm navigation_wrap">
        <div className="container">
          <a className="navbar-brand" href="#">
            HealthTech App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/patientlogin">
                  Login as Patient
                  <IoPerson className='ms-sm-3 ms-5' size={30} />
                </NavLink>
              </li>
              <li className="nav-item ms-sm-5">
                <NavLink className="nav-link " to="/buisnesslogin">
                  Login For Business
                  <RiMentalHealthLine  className='ms-sm-3 ms-5' size={30} />
                </NavLink>
              </li>
            </ul>

            <div>
              {/* Commented-out button code for future use */}
              {/* <button className="sign" onClick={() => navigate('/signup')}>
                Signup/Login
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
