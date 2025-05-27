import React from 'react';

const MyWatingQueue = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center py-sm-4 py-2 text-primary">
              List Of Patients Waiting in Queue
            </h3>
            <ol className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>ASD123</span>
                <button className="btn btn-primary">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>UIO789</span>
                <button className="btn btn-primary">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>BNM654</span>
                <button className="btn btn-primary">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>WSX909</span>
                <button className="btn btn-primary">Visit Patient</button>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>GVR317</span>
                <button className="btn btn-primary">Visit Patient</button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWatingQueue;
