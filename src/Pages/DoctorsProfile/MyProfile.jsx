import React from 'react'
import './DoctorsProfile.css'


import { useDoctor } from '../../DoctorContext'

const MyProfile = () => {

  const { doctorID } =  useDoctor()
  return (
   <>
   <div class="container my-sm-5 my-3 ">
    <div class="row doctors-profile profile_box">
      <h2 class="py-sm-4 py-2">
        Doctor's Profile
      </h2>
      <h3 className='text-center text-dark py-3'> The Doctor's Profile Is :{doctorID}</h3>
      <div class="col-6">

        <ul>
          <li className=' py-sm-3 py-1'>Name</li>
          <li className=' py-sm-3 py-1'>Qualification</li>
          <li className=' py-sm-3 py-1'>Date of Joining</li>
          <li className=' py-sm-3 py-1'>Expiry</li>
          <li className=' py-sm-3 py-1'>Practioner's ID</li>
        </ul>
       
       
      </div>
      <div class="col-6">
       
        <ul>
          <li className=' py-sm-3 py-1'>Dr. Saleha</li>
          <li className=' py-sm-3 py-1'>M.D.</li>
          <li className=' py-sm-3 py-1'>25/07/25</li>
          <li className=' py-sm-3 py-1'>28/02/2028</li>
          <li className=' py-sm-3 py-1'>ASDF678</li>
        </ul>
       
      </div>
    </div>
   </div>
   </>
  )
}

export default MyProfile
