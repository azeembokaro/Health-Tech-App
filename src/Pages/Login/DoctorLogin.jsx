import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DoctorsProfile from '../DoctorsProfile/DoctorsProfile'
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // Your own CSS

import {useDoctor } from '../../DoctorContext'

function DoctorLogin() {
  const { setDoctorId } = useDoctor()
  const [doctor_id, setDoctorid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/doctorapi/doctorsignin", {
        doctor_id,
        password,
      });

      setDoctorId(response.data.doctorID)

      console.log("Response:", response.data);
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/doctors_profile");
      }, 2500);

      setDoctorid("");
      setPassword("");
    } catch (error) {
      console.error("Error in Login Form:", error);
      toast.error("Login failed! Please check your credentials.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
       
        <div className="loginInfo">
          <div className="row">
            <div className="col-8 offset-2 my-sm-5 my-3 outerForm">
              <form onSubmit={handleSubmit} className="form">
                <h2>Doctor Login</h2>

                <label htmlFor="user">Doctor's Id</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  value={doctor_id}
                  autoComplete="off"
                  placeholder="Enter Doctor's Id"
                  required
                  onChange={(e) => setDoctorid(e.target.value)}
                />

                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  value={password}
                  autoComplete="off"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default DoctorLogin;
