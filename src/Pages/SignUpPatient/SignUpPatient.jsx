import React, { useState } from "react";
import axios from "axios";
import "./SignUpPatient.css"; // Replaced CSS module with external CSS file

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pmail, setPmail] = useState("");
  const [pno, setPno] = useState("");
  const [pgender, setPgender] = useState("Male");
  const [pdate, setPdate] = useState("");
  const [pass,setpass] = useState("");
  const [cpass,setcpass]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8090/api/patients/register", {
        fname,
        lname,
        pmail,
        pno,
        pgender,
        pdate,
        pass,
        cpass
      });
      console.log("Response:", response.data);
      alert("SignUp submitted successfully");

      // Clear inputs
      setFname("");
      setLname("");
      setPmail("");
      setPno("");
      setPgender("Male");
      setPdate("");
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
              value={fname}
              autoComplete="off"
              placeholder="Enter First Name"
              onChange={(e) => setFname(e.target.value)}
              required
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={lname}
              autoComplete="off"
              placeholder="Enter Last Name"
              onChange={(e) => setLname(e.target.value)}
              required
            />

            <label htmlFor="pmail">Email</label>
            <input
              type="email"
              name="pmail"
              id="pmail"
              value={pmail}
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setPmail(e.target.value)}
              required
            />

            <label htmlFor="pnumber">Mobile No</label>
            <input
              type="number"
              name="pnumber"
              id="pnumber"
              value={pno}
              autoComplete="off"
              placeholder="Enter Mobile No"
              onChange={(e) => setPno(e.target.value)}
              required
            />

            <label htmlFor="pgender">Gender</label>
            <select
              name="pgender"
              id="pgender"
              value={pgender}
              onChange={(e) => setPgender(e.target.value)}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label htmlFor="pdate">Date of Birth</label>
            <input
              type="date"
              id="pdate"
              name="pdate"
              value={pdate}
              onChange={(e) => setPdate(e.target.value)}
              onKeyDown={(e) => e.key !== "Tab" && e.preventDefault()}
              required
            />

<label htmlFor="pdate">Enter Password</label>
            <input
              type="password"
              id="pass"
              name="pass"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
             
              required
            />

<label htmlFor="pdate">Confirm Password</label>
            <input
              type="password"
              id="cpass"
              name="cpass"
              value={cpass}
              onChange={(e) => setcpass(e.target.value)}
             
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
