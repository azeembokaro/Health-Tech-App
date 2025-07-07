import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BuisnessLogin.css";
import axios from "axios";

function BuisnessLogin() {
  const [buisness, setBuisness] = useState("Doctor"); // ✅ Correct state name
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        buisness,
      });

      // ✅ Redirect based on selected business
      if (buisness === "Doctor") {
        navigate("../Login/DoctorLogin");
      } else if (buisness === "Pharmacy") {
        navigate("../Login/PharmacyLogin");
      } else if (buisness === "Clinic/Hospital") {
        navigate("../Login/ClinicLogin");
      } else if (buisness === "DiagnosticLab") {
        navigate("../Login/LabLogin");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="container my-5 signupInfo">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 my-sm-5 my-3 col-10 offset-1 outerForm">
          <form onSubmit={handleSubmit} className="form"> {/* ✅ Removed styles.form */}
            <h2 className="text-center">
              Business Login
            </h2>

            <label htmlFor="buisness">
              Select Your Profile
            </label>

            <select
              className="form-select w-100"
              name="buisness"
              id="buisness"
              value={buisness}
              onChange={(e) => setBuisness(e.target.value)}
            >
              <option value="Doctor">Doctor</option>
              <option value="Clinic/Hospital">Clinic/Hospital</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="DiagnosticLab">DiagnosticLab</option>
            </select>

            <button type="submit" className="btn btn-primary mt-3 w-25 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuisnessLogin;
