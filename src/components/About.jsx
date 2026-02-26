import React from 'react'
import aboutImg from '../Assets/romain-dancre-doplSDELX7E-unsplash.jpg'

export default function About() {
  return (
    <div className="container">
      <div className="about-grid">
        <div className="about-media reveal-left">
          <img src={aboutImg} alt="About Udhaar म Sudhaar" className="about-img" />
        </div>

        <div className="about-content reveal">
          <h3>About</h3>
          <h2>Us</h2>
          <div className="about-line"></div>
          <p>
            At Udhaar म Sudhaar, we are dedicated to helping individuals and
            businesses regain control of their financial lives. With a focus on
            ethical, practical, and legally sound solutions, we specialize in loan
            management, debt settlement, and protection from aggressive recovery
            actions.
          </p>
          <p>
            Whether you're facing mounting EMIs, credit card defaults, property
            seizure threats, or auction notices, our expert team is here to assist
            you. We offer tailored support including loan restructuring, one-time
            settlements, repayment extensions, and representation in DRT and NCLT
            cases.
          </p>
        </div>
      </div>
    </div>
  )
}
