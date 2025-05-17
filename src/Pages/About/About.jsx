import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import AboutImage from '../../assets/images/about-img.png'
import './About.css'

function About() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-10 text center py-sm-5 py-3">
            <h2>About Component</h2>
            <p className="py-sm-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati ea repellendus atque? Aut consequatur ipsum perferendis, animi dolores voluptas, culpa perspiciatis assumenda enim nostrum fugit eum totam? Eligendi, veniam.
            </p>
          </div>
          <div className="col-sm-6 col-10 text center py-sm-5 py-3 about-img">
           <img src= {AboutImage} alt="about page" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
