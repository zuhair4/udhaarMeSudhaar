import React from 'react'
import heroImg from '../Assets/photorealistic-lawyer-environment.jpg'

export default function Hero() {
  return (
    <div className="hero-clip">
      <div className="hero-bg" style={{backgroundImage:`url(${heroImg})`}} />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-title" style={{color:'#fff'}}>Udhaar म Sudhaar</h2>
        <p className="hero-sub" style={{color:'#fff'}}>Your Trusted Partner in Loan Management and Settlement</p>
        <p className="hero-p" style={{color:'#fff'}}>
          Fast, professional support for loan restructuring, settlement negotiation,
          and protecting your assets.
        </p>
        <a className="btn btn-primary" href="#contact">Get Consultation</a>
      </div>
    </div>
  )
}
