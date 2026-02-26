import React, { useEffect, useRef, useState } from 'react'

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720) setOpen(false)
    }

    function handleClick(e) {
      if (e.target.closest && e.target.closest('.hamburger')) return
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function handleScroll() {
      setScrolled(window.scrollY > 50)

      const sections = ['contact', 'testimonials', 'commitment', 'services2', 'services', 'about', 'welcome', 'home']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(() => {
    function setHeaderHeight() {
      const h = headerRef.current ? Math.ceil(headerRef.current.getBoundingClientRect().height) : 76
      document.documentElement.style.setProperty('--header-height', `${h}px`)
    }

    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [open])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#welcome', label: 'Welcome' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Our Services' },
    { href: '#commitment', label: 'Commitment' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <h1 className="logo">Udhaar <span>मे</span> Sudhaar</h1>
          <div className="tag">Loan Management & Settlement</div>
        </div>

        <nav className="nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="theme-toggle-track">
              <span className="theme-toggle-icon sun">☀️</span>
              <span className="theme-toggle-icon moon">🌙</span>
            </div>
            <div className="theme-toggle-thumb"></div>
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Mobile theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{ display: 'none' }}
          >
            <div className="theme-toggle-track">
              <span className="theme-toggle-icon sun">☀️</span>
              <span className="theme-toggle-icon moon">🌙</span>
            </div>
            <div className="theme-toggle-thumb"></div>
          </button>

          <button
            className={`hamburger ${open ? 'is-active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-nav ${open ? 'open' : ''}`}
        ref={menuRef}
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
