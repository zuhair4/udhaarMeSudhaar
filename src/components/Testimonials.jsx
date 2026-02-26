import React, { useState, useEffect, useCallback } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "I was being harassed by recovery agents for the last 5 months and then Lawyer Panel came to the rescue! Their program is the best solution to get out of heavy debt and I am really thankful to them that they saved me from going bankrupt.",
      name: 'Mr. Santosh',
      place: 'Bengaluru',
      tags: ['Debt Relief', 'Legal Support']
    },
    {
      text: "Thank you for solving my loan default problem. I can't imagine how I would have solved it on my own. Working with you was a great relief!",
      name: 'Ms. Simran',
      place: 'Mumbai',
      tags: ['Settlement', 'Loan Default']
    },
    {
      text: "I am really thankful to Lawyer Panel for helping to resolve my personal loans. In less than 18 months, I am debt free.",
      name: 'Mr. Ramesh',
      place: 'New Delhi',
      tags: ['Restructuring', 'Success Story']
    },
    {
      text: "They negotiated with the bank and reduced the settlement amount. The team was professional and kept me informed throughout.",
      name: 'Anita K.',
      place: 'Noida',
      tags: ['Negotiation', 'Bank Settlement']
    },
    {
      text: "Excellent legal support — stopped an attempted auction and helped me restructure my loan with affordable EMIs.",
      name: 'Rohit S.',
      place: 'Gurgaon',
      tags: ['Auction Relief', 'Legal Expert']
    },
    {
      text: "Fast and compassionate service. The harassment stopped immediately after they intervened.",
      name: 'Priya M.',
      place: 'Lucknow',
      tags: ['Anti-Harassment', 'Fast Relief']
    },
    {
      text: "Clear guidance and honest pricing. I recommend them to anyone struggling with debt recovery threats.",
      name: 'Vikram T.',
      place: 'Chennai',
      tags: ['Guidance', 'Honest Service']
    },
    {
      text: "They helped me reach a one-time settlement at a reasonable rate and closed my account. Life-changing support.",
      name: 'Seema R.',
      place: 'Kolkata',
      tags: ['Settlement', 'One-time Solution']
    }
  ]

  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }, [testimonials.length])

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  // Auto-advance every 5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const current = testimonials[index]

  return (
    <div
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <h3>Testimonials</h3>
        <h2>What our clients say</h2>

        <div className="testimonial-featured reveal">
          <div className="testimonial-card-single">
            <p className="testimonial-text-large">" {current.text} "</p>

            <div className="testimonial-footer">
              <div>
                <h4 className="testimonial-name-large">{current.name}</h4>
                <p className="testimonial-place-large">{current.place}</p>
              </div>
            </div>

            <div className="testimonial-tags">
              {current.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-btn prev" onClick={prev} aria-label="Previous">‹</button>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button className="testimonial-btn next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>
      </div>
    </div>
  )
}
