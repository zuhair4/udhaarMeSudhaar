import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage, default to 'light'
    const saved = localStorage.getItem('ums-theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ums-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe after a small delay to let the DOM settle
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
      </main>
    </div>
  )
}
