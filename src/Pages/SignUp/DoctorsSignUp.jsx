import React, { useState } from "react";
import axios from "axios";

function DoctorSignUp() {
  const [form, setForm] = useState({
    typeDoc: "",
    name: "",
    mobileNo: "",
    email_id: "",
    Qualification: "",
    experience: "",
    practionerId: "",
    Speciality: "",

    Certificate_image: null,
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      Certificate_image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      const response = await axios.post("http://localhost:8080/doctorapi/signup",formData
        
      );

      alert("Doctor Signed Up Successfully");
      console.log("Success:", response.data);

      setForm({
        typeDoc:"",
        name: "",
        mobileNo: "",
        email_id: "",
        Qualification: "",
        experience: "",
        practionerId: "",
        Speciality: "Cardiology",
        Certificate_image: null,
        password: ""
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up doctor. See console for details.");
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <h2 className="text-center mb-4">Doctor SignUp</h2>

        <div className="row mb-3">

            <div className="col-md-6">
  <label className="form-label">Join In as</label>
  <select
    name="typeDoc"
    className="form-select"
    value={form.typeDoc}
    onChange={handleChange}
    required
  >
    <option value="" disabled hidden>
      Join In As
    </option>
    <option value="Employee">Employee</option>
    <option value="Consultant Doctor">Consultant Doctor</option>
  </select>
</div>

          
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              name="mobileNo"
              className="form-control"
              value={form.mobileNo}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email_id"
              className="form-control"
              value={form.email_id}
              onChange={handleChange}
              placeholder="Enter Email ID"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Highest Qualification</label>
            <input
              type="text"
              name="Qualification"
              className="form-control"
              value={form.Qualification}
              onChange={handleChange}
              placeholder="Enter Qualification"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Years of Experience</label>
            <input
              type="number"
              name="experience"
              className="form-control"
              value={form.experience}
              onChange={handleChange}
              placeholder="Enter Years of Experience"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Specialization</label>
            <select
              name="Speciality"
              className="form-select"
              value={form.Speciality}
              onChange={handleChange}
              required
            >
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Nephrology">Nephrology</option>
              <option value="Psychology">Psychology</option>
            </select>
          </div>

        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Practitioner ID</label>
            <input
              type="text"
              name="practionerId"
              className="form-control"
              value={form.practionerId}
              onChange={handleChange}
              placeholder="Enter Practitioner ID"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
        </div>

       <div className="row mb-4">
  <div className="col-md-6">
     <small className="text-muted fw-bold">Upload Proof of Medical Practice</small>
    <label className="form-label">Upload Certificate</label>
   
    <input
      type="file"
      name="Certificate_image"
      className="form-control"
      accept="image/*"
      onChange={handleFileChange}
    />
    
  </div>
</div>


        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        {submitted && (
          <p className="text-success mt-3 text-center">
            Registration Successful!
          </p>
        )}
      </form>
    </div>
  );
}

export default DoctorSignUp;
