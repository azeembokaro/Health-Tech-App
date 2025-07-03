import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useLab } from '../../LabContext'

function LabLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setdiagnosticsId } = useLab()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/labapi/signin", {
       username,
        password,
      });

      console.log("Login Success:", response.data);
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });

      setdiagnosticsId(username);

      setTimeout(() => {
        navigate("/lab_profile"); // Or your desired lab dashboard route
      }, 2500);



      // Clear inputs
      setUsername("");
      setPassword("");
      
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed! Please check credentials.", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-sm-5 mt-3">
        <div className="row">
          <div className="col-sm-6 col-10 offset-sm-3 offset-1">
            <form onSubmit={handleSubmit} className="login p-sm-5 p-3">
              <h3 className="text-center">Lab Login</h3>

              <label htmlFor="username" className="mb-2">Enter Your Diagnostics Lab Id</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter Lab Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password" className="mt-3 mb-2">Enter Your Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary w-75">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabLogin;
