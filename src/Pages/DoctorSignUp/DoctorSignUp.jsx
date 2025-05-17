import React, { useState } from "react";
import axios from "axios";
import styles from "./doctorsignup.module.css"; // Importing the CSS module
import DoctorLogin from "../DoctorLogin/DoctorLogin";


function DoctorSignUp({ blogin, clogin }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [yoe, setYoe] = useState("");
  const [id, setId] = useState("");
  const [pop, setPop] = useState("");
  const [qualification, setQualification] = useState(""); // New state for qualification
  const [specialization, setSpecialization] = useState("Cardiology"); // New state for specialization with default value
  const [dlog, setDlog] = useState(false);

  const doccloselogin = () => {
    setDlog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your actual API endpoint
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        fname,
        lname,
        yoe,
        id,
        pop,
        qualification,
        specialization,
      });
      console.log("Response:", response.data);
      alert("Doctor Signed Up Successfully");

      // Open the DoctorLogin page after successful signup
      setDlog(true);

      // Clear the input fields
      setFname("");
      setLname("");
      setYoe("");
      setId("");
      setPop("");
      setQualification("");
      setSpecialization("Cardiology");
    } catch (error) {
      console.error("Error in SignUp Form:", error);
      alert("Error in SignUp Page");
    }
  };

  return (
    <>
      {!dlog ? (
        blogin && (
          <div className={styles.loginInfo}>
            <div className="row">
              <div className={`col-8 offset-2 my-sm-5 my-3 ${styles.outerForm}`}>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className="text-center py-4">Doctor SignUp</h2>
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={fname}
                    autoComplete="off"
                    placeholder="Enter First Name"
                    required
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={lname}
                    autoComplete="off"
                    placeholder="Enter Last Name"
                    required
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <label htmlFor="yoe">Years of Experience</label>
                  <input
                    type="number"
                    name="yoe"
                    id="yoe"
                    value={yoe}
                    autoComplete="off"
                    placeholder="Enter Year Of Experience"
                    required
                    onChange={(e) => setYoe(e.target.value)}
                  />
                  <label htmlFor="qualification">Enter Highest Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    value={qualification}
                    autoComplete="off"
                    placeholder="Enter Highest Qualification"
                    required
                    onChange={(e) => setQualification(e.target.value)}
                  />
                  <label htmlFor="specialization">Enter Your Specialization</label>
                  <select
                    name="specialization"
                    id="specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Psychology">Psychology</option>
                  </select>
                  <label htmlFor="id">Enter Your Practitioner ID</label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    autoComplete="off"
                    placeholder="Enter Your Practitioner ID"
                    required
                    onChange={(e) => setId(e.target.value)}
                  />
                  <label htmlFor="pop">Enter Your Place Of Practice</label>
                  <input
                    type="text"
                    name="pop"
                    id="pop"
                    value={pop}
                    autoComplete="off"
                    placeholder="Enter Your Place Of Practice"
                    required
                    onChange={(e) => setPop(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      ) : (
        <DoctorLogin dlog={dlog} doccloselogin={doccloselogin} />
      )}
    </>
  );
}

export default DoctorSignUp;
