import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import Welcome from './Welcome'
import About from './About'
import Services from './Services'
import Services2 from './Services2'
import Commitment from './Commitment'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default function Home() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <section id="home" className="section">
        <Hero />
      </section>

      <section id="welcome" className="section">
        <Welcome />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="services" className="section">
        <Services />
      </section>

      <section id="services2" className="section">
        <Services2 />
      </section>

      <section id="commitment" className="section">
        <Commitment />
      </section>

      <section id="testimonials" className="section">
        <Testimonials />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">Udhaar <span>मे</span> Sudhaar</div>
          <p className="footer-tagline">Your Trusted Partner in Loan Management & Settlement</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#commitment">Commitment</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-divider"></div>
          <p className="footer-copy">© {new Date().getFullYear()} Udhaar मे Sudhaar. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
