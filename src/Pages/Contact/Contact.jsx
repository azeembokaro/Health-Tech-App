import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MedicalImage from '../../assets/images/medical.jpeg'
import'./Contact.css'

function Contact() {
  return (
    <div>
      <Header/>
       <div className="container">
        <div className="row">
          <div className="col-sm-6 col-10 text-center py-3">
             <h3>Contact Page</h3>
             <p className='py-3'>
              Hurry Up! Connect With Us
             </p>
          </div>
          <div className="col-sm-6 col-10 text-center py-3 contact-page">
            <img src={MedicalImage} alt="contact-page" />
          </div>
        </div>
       </div>
      <Footer/>
    </div>
  )
}

export default Contact
