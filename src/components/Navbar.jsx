import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar({ config }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname])

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Event Calculator', href: '/calculator' },
    { label: 'Packages', href: '/packages' },
    { label: 'Our Team', href: '/team' },
    { label: 'Inquire', href: '/#contact' },
  ]

  const isExternal = (href) => href.startsWith('/#') || href.startsWith('#')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 navbar-scrolled shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-headline font-normal text-2xl tracking-wide flex items-center gap-3">
          {config.logoUrl ? (
            <img src={config.logoUrl} alt={config.businessName} className="h-10 w-auto" />
          ) : (
            <>
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-headline font-black text-black text-sm"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                {config.businessName?.charAt(0)}
              </div>
              <span className="font-headline font-bold text-white text-lg tracking-wider uppercase">
                {config.businessName}
              </span>
            </>
          )}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              {isExternal(link.href) ? (
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div 
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="/#contact"
            className="hidden lg:inline-flex btn-primary px-6 py-2.5 text-xs rounded-sm uppercase tracking-widest font-bold"
          >
            {config.trialCTA || 'Book Consultation'}
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 border-b' : 'max-h-0'}`}
        style={{ backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', borderColor: 'var(--border)' }}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-5">
          {navLinks.map((link) =>
            isExternal(link.href) ? (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors">
                {link.label}
              </Link>
            )
          )}
          <a href="/#contact" onClick={() => setMenuOpen(false)}
            className="btn-primary px-6 py-3.5 rounded-sm text-xs text-center uppercase tracking-widest font-bold mt-2">
            {config.trialCTA || 'Book Consultation'}
          </a>
        </div>
      </div>
    </nav>
  )
}
