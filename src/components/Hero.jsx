import React from 'react'
import heroImg from '../Assets/photorealistic-lawyer-environment.jpg'

export default function Hero() {
  return (
    <div className="hero-clip">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge">Trusted Legal Experts</div>
        <h2 className="hero-title">
          Udhaar <span className="accent">मे</span> Sudhaar
        </h2>
        <p className="hero-sub hero-light-text">
          Your Trusted Partner in Loan Management and Settlement
        </p>
        <p className="hero-p hero-light-text">
          Fast, professional support for loan restructuring, settlement negotiation,
          and protecting your assets from aggressive recovery actions.
        </p>
        <a className="btn" href="#contact">Get Consultation →</a>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">500+</div>
            <div className="hero-stat-label">Cases Resolved</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">98%</div>
            <div className="hero-stat-label">Success Rate</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">₹50Cr+</div>
            <div className="hero-stat-label">Debt Settled</div>
          </div>
        </div>
      </div>
    </div>
  )
}
