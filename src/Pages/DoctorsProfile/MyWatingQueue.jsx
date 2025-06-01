import React from 'react';
import './DoctorsProfile.css'

const MyWatingQueue = () => {
  return (
    <>
      <div className="container profile_box mt-sm-5 mt-2">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center py-sm-4 py-2 ">
              List Of Patients Waiting in Queue
            </h2>
            <ol className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center py-2 ">
                <span>ASD123</span>
                <button className="patient_view">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 ">
                <span>UIO789</span>
                <button className="patient_view">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 ">
                <span>BNM654</span>
                <button className="patient_view">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 ">
                <span>WSX909</span>
                <button className="patient_view">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 ">
                <span>GVR317</span>
                <button className="patient_view">Visit Patient</button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWatingQueue;
