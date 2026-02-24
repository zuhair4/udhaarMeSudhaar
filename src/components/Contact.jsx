import React from 'react'
import contactImg from '../Assets/pranav-shrivastava-9otnZm8k5oU-unsplash.jpg'

export default function Contact() {
  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-details-section">
          <div className="contact-image-wrapper">
            <img src={contactImg} alt="Get in touch with our team" className="contact-image" />
            <div className="contact-overlay">
              <div className="contact-info-card">
                <h3>Get In Touch</h3>
                
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p><a href="tel:+917503200234">+91 75032 00234</a></p>
                  <p><a href="tel:+919716429803">+91 97164 29803</a></p>
                </div>

                <div className="contact-item">
                  <h4>Email</h4>
                  <p><a href="mailto:udhaarmesudhaar@gmail.com">udhaarmesudhaar@gmail.com</a></p>
                </div>

                <div className="contact-item">
                  <h4>Address</h4>
                  <p>Noida, UP, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Chat to our team</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label>First name</label>
              <input type="text" placeholder="Your first name" />
            </div>
            <div className="field">
              <label>Last name</label>
              <input type="text" placeholder="Your last name" />
            </div>
            <div className="field">
              <label>Job title</label>
              <input type="text" placeholder="Your job title" />
            </div>
            <div className="field">
              <label>Work email</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label>Phone number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="field">
              <label>Number of employees</label>
              <div style={{display: 'flex', gap: '1rem'}}>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer'}}>
                  <input type="radio" name="employees" value="solo" />
                  I'm a solo creator
                </label>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer'}}>
                  <input type="radio" name="employees" value="team" />
                  I'm part of a team
                </label>
              </div>
            </div>
            <button className="btn" type="submit">Get in touch</button>
          </form>
        </div>
      </div>
    </div>
  )
}
