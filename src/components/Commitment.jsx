import React from 'react'
import commitmentImg1 from '../Assets/hannah-busing-Zyx1bK9mqmA-unsplash.jpg'
import commitmentImg2 from '../Assets/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg'

export default function Commitment() {
  return (
    <div className="container">
      <div className="commitment-grid">
        <div className="commitment-content">
          <h3>Our</h3>
          <h2>COMMITMENT</h2>
          <div className="commitment-line"></div>

          <ul className="commitment-list">
            <li>Transparent Communication</li>
            <li>Timely and Strategic Legal Advice</li>
            <li>Client-Centered Representation</li>
            <li>Integrity in Every Action</li>
            <li>Results That Matter</li>
          </ul>
        </div>

        <div className="commitment-images">
          <img src={commitmentImg1} alt="Team Collaboration" className="commitment-img" />
          <img src={commitmentImg2} alt="Team" className="commitment-img" />
        </div>
      </div>
    </div>
  )
}
