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
       
          <form onSubmit={handleSubmit} className="signup-form p-4 border rounded shadow-sm">
  <h2 className="text-center mb-4">SignUp As Patient</h2>

  {/* Row 1: First Name & Last Name */}
  <div className="row">
    <div className="col-sm-6 mb-3">
      <label htmlFor="fname"  className="pb-2">First Name</label>
      <input
        type="text"
        name="fname"
        id="fname"
        value={form.fname}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
    <div className="col-sm-6 mb-3">
      <label htmlFor="lname"  className="pb-2">Last Name</label>
      <input
        type="text"
        name="lname"
        id="lname"
        value={form.lname}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
  </div>

  {/* Row 2: Email & Mobile */}
  <div className="row">
    <div className="col-sm-6 mb-3">
      <label htmlFor="email_id"  className="pb-2">Email</label>
      <input
        type="email"
        name="email_id"
        id="email_id"
        value={form.email_id}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
    <div className="col-sm-6 mb-3">
      <label htmlFor="mobileNo"  className="pb-2">Mobile No</label>
      <input
        type="text"
        name="mobileNo"
        id="mobileNo"
        value={form.mobileNo}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
  </div>

  {/* Row 3: Gender & DOB */}
  <div className="row">
    <div className="col-sm-6 mb-3">
      <label htmlFor="gender"  className="pb-2">Gender</label>
      <select
        name="gender"
        id="gender"
        value={form.gender}
        onChange={handleChange}
        required
        className="form-control"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div className="col-sm-6 mb-3">
      <label htmlFor="dob"  className="pb-2">Date of Birth</label>
      <input
        type="date"
        name="dob"
        id="dob"
        value={form.dob}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
  </div>

  {/* Row 4: Password & Confirm Password */}
  <div className="row">
    <div className="col-sm-6 mb-3">
      <label htmlFor="password"  className="pb-2">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={form.password}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
    <div className="col-sm-6 mb-3">
      <label htmlFor="confirmPassword" className="pb-2">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary w-50">
      Submit
    </button>
  </div>
</form>

        </div>
      </div>
   
  )
}

export default SignUp;
