import React from 'react';

function CasesHandled() {
  return (
    <>
      <div className="container profile_box mt-sm-5 mt-2">
        <div className="row justify-content-center">
          <h3 className="text-center py-3 text-light">Cases Handled</h3>
          <div className="col-8">
            <div className="d-flex justify-content-between align-items-center py-2 ">
              <span>ASD678</span>
              <button className="patient_view">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 ">
              <span>LKJ674</span>
              <button className="patient_view">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 ">
              <span>GFD789</span>
              <button className="patient_view">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 ">
              <span>ERT675</span>
              <button className="patient_view">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 ">
              <span>NBV854</span>
              <button className="patient_view">View Case</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasesHandled;
