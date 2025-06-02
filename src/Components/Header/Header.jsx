import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Ensure NavLink is imported
import { IoPerson } from "react-icons/io5";
import { RiMentalHealthLine } from "react-icons/ri";

import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
   
      <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navigation_wrap navbar-dark">
        <div className='logo'>
<a className="navbar-brand ms-sm-4" href="#">
            HealthTech App
          </a>
        </div>
          

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
            <ul className="navbar-nav ms-sm-5">
              <li className="nav-item mt-sm-0 mt-5">
                <NavLink className="nav-link " to="/patientlogin">
                  Login as Patient
                  <IoPerson className='ms-sm-3 ms-3' size={30} />
                </NavLink>
              </li>
              <li className="nav-item ms-sm-5 mt-sm-0 mt-4 mb-sm-0 mb-5">
                <NavLink className="nav-link " to="/buisnesslogin">
                  Login For Business
                  <RiMentalHealthLine  className='ms-sm-3 ms-3' size={30} />
                </NavLink>
              </li>
            </ul>

           
          </div>
       
      </nav>
       </div>
    
  );
}

export default Header;
