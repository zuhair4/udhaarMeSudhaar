import React from 'react'
import servicesImg from '../Assets/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg'

export default function Services2() {
  const services = [
    {
      title: 'Relief from Bank Auction Proceedings',
      desc: 'Facing a property auction? We intervene legally to stop or delay auction actions and help find alternate resolutions.'
    },
    {
      title: 'Anti-Loan Harassment Services',
      desc: 'We protect you from unethical recovery tactics, ensuring your rights are upheld and all recovery actions are conducted within the bounds of the law.'
    },
    {
      title: 'Credit Card and Unsecured Loan Default Management',
      desc: 'We manage defaults on high-interest credit card debts and unsecured loans, providing customized strategies to negotiate, settle, or restructure dues.'
    },
    {
      title: 'Loan and Interest Management',
      desc: 'We analyze your loan structure and help reduce interest burdens through smart restructuring and repayment plans.'
    },
    {
      title: 'Protection from Illegal Recovery Agents',
      desc: 'Our legal experts act swiftly to shield you from unlawful threats, harassment, and coercion by lenders, ensuring you are treated fairly under the law.'
    }
  ]

  return (
    <div className="container">
      <div className="services-grid">
        <div className="services-media reveal-left">
          <img src={servicesImg} alt="Our Services" className="services-img" />
        </div>

        <div className="services-content reveal">
          <ul className="services-list stagger">
            {services.map((service, i) => (
              <li key={i}>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
