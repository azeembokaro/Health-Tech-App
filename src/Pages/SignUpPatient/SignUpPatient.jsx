import React, { useState } from "react";
import axios from "axios";
import "./SignUpPatient.css";

function SignUp() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email_id: "",
    mobileNo: "",
    gender: "Male",
    dob: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/patientsignup", form);
      console.log("Response:", response.data);
      alert("SignUp submitted successfully");

      // Reset form
      setForm({
        fname: "",
        lname: "",
        email_id: "",
        mobileNo: "",
        gender: "Male",
        dob: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="container my-5 signup-info">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 col-10 offset-1 my-sm-5 my-3 outer-form">
          <form onSubmit={handleSubmit} className="signup-form">
            <h4 className="signup-heading">SignUp As Patient</h4>

            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={form.fname}
              onChange={handleChange}
              required
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={form.lname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email_id">Email</label>
            <input
              type="email"
              name="email_id"
              id="email_id"
              value={form.email_id}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobileNo">Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              id="mobileNo"
              value={form.mobileNo}
              onChange={handleChange}
              required
            />

            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary w-sm-50 w-75 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
