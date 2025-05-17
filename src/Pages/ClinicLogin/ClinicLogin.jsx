import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./ClinicLogin.module.css"; // Importing the CSS module


function ClinicLogin({ cliniclog, closecliniclog }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your actual API endpoint
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        password,
      });
      console.log("Response:", response.data);
      alert("Logged in successfully");

      // Redirect to /services after successful login
      navigate("/services");

      // Clear the input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error in Login Form:", error);
      alert("Error in Login Page");
    }
  };

  return (
    <>
      {cliniclog && (
        <div className={styles.loginInfo}>
          <div className="row">
            <div className={`col-8 offset-2 my-sm-5 my-3 ${styles.outerForm}`}>
             
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Clinic Login</h2>
                <label htmlFor="user">Username</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  value={username}
                  autoComplete="off"
                  placeholder="Enter Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClinicLogin;
