import React from 'react'
import './DoctorsProfile.css'

const MyProfile = () => {
  return (
   <>
   <div class="container my-sm-5 my-3">
    <div class="row doctors-profile">
      <h2 class="text-center py-sm-4 py-2">
        Doctor's Profile
      </h2>
      <div class="col-6">

        <ul>
          <li className='text-center py-1'>Name</li>
          <li className='text-center py-1'>Qualification</li>
          <li className='text-center py-1'>Date of Joining</li>
          <li className='text-center py-1'>Expiry</li>
          <li className='text-center py-1'>Practioner's ID</li>
        </ul>
       
       
      </div>
      <div class="col-6">
        <p>Dr. Saleha</p>
        <p>M.D.</p>
        <p>23/07/25</p>
        <p>None</p>
        <p>ASD345</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default MyProfile
