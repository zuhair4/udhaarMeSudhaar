import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720) setOpen(false)
    }

    function handleClick(e) {
      // Ignore clicks that originate from the hamburger button itself
      if (e.target.closest && e.target.closest('.hamburger')) return

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  // compute header height and set CSS variable so anchors offset correctly
  useEffect(() => {
    function setHeaderHeight() {
      const h = headerRef.current ? Math.ceil(headerRef.current.getBoundingClientRect().height) : 76
      document.documentElement.style.setProperty('--header-height', `${h}px`)
    }

    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [open])

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1 className="logo">Udhaar म Sudhaar</h1>
          <div className="tag">Loan Management & Settlement</div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#welcome">Welcome</a>
          <a href="#about">About</a>
          <a href="#services">Our Services</a>
          <a href="#commitment">Commitment</a>
          <a href="#contact">Contact</a>
        </nav>

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

      <div
        id="mobile-menu"
        className={`mobile-nav ${open ? 'open' : ''}`}
        ref={menuRef}
        aria-hidden={!open}
      >
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#welcome" onClick={() => setOpen(false)}>Welcome</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Our Services</a>
        <a href="#commitment" onClick={() => setOpen(false)}>Commitment</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </header>
  )
}
