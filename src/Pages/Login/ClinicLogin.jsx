import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // Your own CSS

function ClinicLogin() {
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
        navigate("/services");
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

      <div className="container  mt-sm-5 mt-3">
        <div className="row">
          <div className="col-sm-6 col-8 offset-sm-3 offset-2">
<form onSubmit={handleSubmit} className="login p-sm-5 p-3">
               <h3 className="text-center">Clinic Login</h3>

                <label htmlFor="user" className="mb-3">Enter Your Clinic's Id</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  value={doctor_id}
                  autoComplete="off"
                  placeholder="Enter Clinic's Id"
                  required
                  onChange={(e) => setDoctorid(e.target.value)}
                />

                <label htmlFor="pass" className="mb-3">Enter Your Password</label>
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

                 <div className="my-sm-4 my-2 text-center">
 <button type="submit" className="btn btn-lg btn-primary text-center w-75">Login</button>
      </div>
              </form>
          </div>
        </div>
      </div>
       
       
      
    </>
  );
}

export default ClinicLogin;
