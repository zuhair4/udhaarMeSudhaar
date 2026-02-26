import React, { useState } from 'react'
import contactImg from '../Assets/pranav-shrivastava-9otnZm8k5oU-unsplash.jpg'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    query: '',
    helpType: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Construct email subject and body
    const subject = encodeURIComponent(`New Query from ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.workEmail}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Help Type: ${formData.helpType}\n\n` +
      `Query:\n${formData.query}`
    )

    // Open default mail client
    window.location.href = `mailto:udhaarmesudhaar@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-details-section reveal-left">
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

        <div className="contact-form-section reveal">
          <h3>Chat to our team</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Work email</label>
              <input
                type="email"
                name="workEmail"
                placeholder="you@company.com"
                value={formData.workEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+91 00000 00000"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* New Query Text Area */}
            <div className="field" style={{ gridColumn: '1 / -1' }}>
              <label>Your query</label>
              <textarea
                name="query"
                placeholder="How can we help you?"
                value={formData.query}
                onChange={handleChange}
                rows="4"
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            <div className="field" style={{ gridColumn: '1 / -1' }}>
              <label>How can we help?</label>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  <input
                    type="radio"
                    name="helpType"
                    value="Individual"
                    checked={formData.helpType === 'Individual'}
                    onChange={handleChange}
                    required
                  />
                  Individual
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  <input
                    type="radio"
                    name="helpType"
                    value="Business"
                    checked={formData.helpType === 'Business'}
                    onChange={handleChange}
                    required
                  />
                  Business
                </label>
              </div>
            </div>
            <button className="btn" type="submit" style={{ animation: 'none', gridColumn: '1 / -1' }}>
              Get in touch →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
