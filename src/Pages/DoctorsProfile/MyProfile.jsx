import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorsProfile.css';
import { useDoctor } from '../../DoctorContext';

const MyProfile = () => {
  const { doctorID } = useDoctor();
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/doctorapi/myprofile", {
          params: { id: doctorID },
        });
        setDoctorProfile(response.data);
      } catch (err) {
        console.error("Error fetching doctor profile:", err);
        setError("Failed to fetch profile. Please try again later.");
      }
    };

    if (doctorID) fetchDoctorProfile();
  }, [doctorID]);

  return (
    <div className="container my-sm-5 my-3">
      <div className="row doctors-profile profile_box">
        <h2 className="py-3">Doctor's Profile</h2>
        <h5 className="text-center text-light pt-1 pb-4">Doctor ID: {doctorID}</h5>

        {error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        {!doctorProfile && !error && (
          <p className="text-center">Loading doctor profile...</p>
        )}

        {doctorProfile && (
          <>


<div className="col-12 doc-data">
  {[
    { label: "Name", value: doctorProfile.name },
    { label: "Type", value: doctorProfile.typeDoc },
    { label: "Qualification", value: doctorProfile.qualification },
    { label: "Status", value: doctorProfile.status },
    { label: "Practioner ID", value: doctorProfile.practionerId },
    {
      label: "Last Login Time",
      value: doctorProfile.lastLoginTime
        ? new Date(doctorProfile.lastLoginTime).toLocaleString()
        : "N/A",
    },
    {
      label: "Available Start Time",
      value: doctorProfile.availableStartTime
        ? new Date(doctorProfile.availableStartTime).toLocaleString()
        : "N/A",
    },
  ].map((item, index) => (
    <div
      className="d-flex justify-content-between align-items-center border-bottom py-2"
      style={{ borderColor: "#001a0d" }}
      key={index}
    >
      <div className="col-sm-6 fw-medium text-dark">{item.label}</div>
      <div className="col-sm-6 ms-sm-2">{item.value}</div>
    </div>
  ))}
</div>

           

          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
