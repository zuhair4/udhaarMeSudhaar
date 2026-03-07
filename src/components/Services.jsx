import React from 'react'
import servicesImg from '../Assets/avery-evans-RJQE64NmC_o-unsplash.jpg'

export default function Services() {
  const services = [
    {
      title: 'Loan Restructuring and Settlement',
      desc: 'We help negotiate revised loan terms with banks and NBFCs, making your repayments more manageable while avoiding default.'
    },
    {
      title: 'Personal loans and credit card debt specialisation',
      desc: ' Stop the debt cycle today. We specialize in aggressive negotiation for unsecured loans and credit card debt, slashing your balances by dealing directly with creditors. Our experts halt collector harassment and settle your liabilities for a fraction of what you owe. Fast, professional, and built for your financial recovery.'
    },
    {
      title: 'One-Time Settlements at Reasonable Rates',
      desc: 'Struggling to repay the full loan amount? We assist in securing one-time settlements at fair, negotiated amounts to close your debts quickly and legally.'
    },
    {
      title: 'Extension of Loan Repayment Period',
      desc: 'We facilitate extensions in loan tenures, reducing your EMI burden and giving you breathing space to stabilize your finances.'
    },

  ]

  return (
    <div className="container">
      <div className="services-grid">
        <div className="services-content reveal">
          <h3>Our</h3>
          <h2>SERVICES</h2>
          <div className="services-line"></div>

          <ul className="services-list stagger">
            {services.map((service, i) => (
              <li key={i}>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="services-media reveal-right">
          <img src={servicesImg} alt="Our Services" className="services-img" />
        </div>
      </div>
    </div>
  )
}
