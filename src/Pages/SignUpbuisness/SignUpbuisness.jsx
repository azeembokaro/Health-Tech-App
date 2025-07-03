import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import this
import axios from "axios";
import styles from "./SignUpbuisness.module.css";

function SignUpBuisness({ buisnesssignup, onCloseSignup }) {
  const [buisness, setBuisness] = useState("Doctor");
  const navigate = useNavigate(); // initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Optional: Axios request simulation
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        buisness,
      });

      // Redirect based on selected business
      if (buisness === "Doctor") {
        navigate("/signup/doctors");
      } else if (buisness === "Pharmacy") {
        navigate("/signup/pharmacy");
      } else if (buisness === "Clinic/Hospital") {
        navigate("/signup/clinic");
      } else if (buisness === "DiagnosticLab") {
        navigate("/signup/labs");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className={`container my-5 ${styles.signupInfo}`}>
      <div className="row">
        <div className={`col-sm-8 offset-sm-2 my-sm-5 my-3 col-10 offset-1  ${styles.outerForm}`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className="text-center">SignUp For Business</h2>

            <label htmlFor="buisness">
              Choose Your Business Profile To Be Part Of WeCare Platform
            </label>

            <select
  className="form-select w-100" // 👈 Add this
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


            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpBuisness;
