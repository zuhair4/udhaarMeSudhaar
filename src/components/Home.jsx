import React from 'react'
import Hero from './Hero'
import Welcome from './Welcome'
import About from './About'
import Services from './Services'
import Services2 from './Services2'
import Commitment from './Commitment'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default function Home() {
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
    </div>
  )
}
