import React from 'react'
import './DoctorsProfile.css'

const MyProfile = () => {
  return (
   <>
   <div className="container mt-sm-5 mt-2 doctors-profile">
    <div className="row">
       <h3 className="text-center py-3">
          Doctor's Profile
        </h3>

      <div className="col-6">
       <h4>Name</h4>
       <h4>Qualification</h4>
       <h4>Date of Joining</h4>
       <h4>Experience</h4>
       <h4>Practicioner's Id</h4>

      </div>

      <div className="col-6">
       <h4></h4>
       <h4></h4>
       <h4></h4>
       <h4></h4>
       <h4></h4>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default MyProfile
