import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "../PatientLogin/PatientLogin.css"; // Import ordinary CSS file
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

function BuisnessLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { username, password }
      );
      console.log("Response:", response.data);

      // ✅ Success Toast Notification
      toast.success(
        <span>Logged in Successfully</span>,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
        }
      );

      // Redirect after a short delay
      setTimeout(() => {
        navigate("/services");
      }, 2500);

      // Clear input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error in Login Form:", error);
      alert("Error in Login Page");
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast Container for notifications */}
      <div className="loginInfo">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 col-10 offset-1 my-sm-5 my-3 outerForm">
            <form onSubmit={handleSubmit} className="form">
              <h2>Login For Buiness</h2>

              {/* Username Input */}
              <div className="inputGroup">
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
                <FaUserAlt className="icon" />
              </div>

              {/* Password Input */}
              <div className="inputGroup">
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
                <RiLockPasswordFill className="icon" />
              </div>

              <button type="submit" className="btn btn-primary w-sm-25 w-75 mx-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuisnessLogin;
