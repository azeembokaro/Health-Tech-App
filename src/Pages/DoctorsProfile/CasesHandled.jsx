import React from 'react';

function CasesHandled() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h3 className="text-center py-3 text-primary">Cases Handled</h3>
          <div className="col-8">
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>ASD678</span>
              <button className="btn btn-primary">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>LKJ674</span>
              <button className="btn btn-primary">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>GFD789</span>
              <button className="btn btn-primary">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>ERT675</span>
              <button className="btn btn-primary">View Case</button>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span>NBV854</span>
              <button className="btn btn-primary">View Case</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasesHandled;
