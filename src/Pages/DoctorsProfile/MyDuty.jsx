import React from 'react'


const MyDuty = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <h3 className="text-center py-sm-4 py-2 text-primary">
              My Duty
            </h3>
            <div className="text-end">
              <button className="btn btn-danger my-3">
                Logout
              </button>
            </div>
            <ol className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>Available Since</span>
                <span>01/06/25</span>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <span>Last Login</span>
                <span>06:00</span>
              </li>
             
            </ol>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default MyDuty
