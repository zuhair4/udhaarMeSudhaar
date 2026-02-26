import React from 'react'
import welcomeImg from '../Assets/brenton-pearce-Sc85cQWwiP8-unsplash.jpg'

export default function Welcome() {
  return (
    <div className="container">
      <div className="welcome-grid">
        <div className="welcome-text reveal">
          <h3>Welcome to</h3>
          <h2>UDHAAR मे SUDHAAR</h2>
          <div className="accent-line"></div>
          <p className="lead">
            Welcome to Udhaar मे Sudhaar — Your Trusted Partner in Loan Management and
            Settlement
          </p>
          <p>
            Are you facing challenges with loan repayments, property seizure threats,
            or auction notices? At Udhaar मे Sudhaar, we specialize in providing expert
            solutions for individuals and businesses struggling with financial stress
            related to loans.
          </p>
        </div>

        <div className="welcome-media reveal-right">
          <img src={welcomeImg} alt="Udhaar m Sudhaar" className="welcome-img" />
        </div>
      </div>
    </div>
  )
}
