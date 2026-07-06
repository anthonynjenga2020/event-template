import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle.jsx'

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
    { label: 'Shop', href: '/shop' },
    { label: 'Memberships', href: '/memberships' },
    { label: 'Gift Cards', href: '/gift-cards' },
    { label: 'Our Story', href: '/#about' },
    { label: 'Team', href: '/#team' },
  ]

  const isExternal = (href) => href.startsWith('/#')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 navbar-scrolled dark:bg-[#0A0A0A]/90 dark:border-[#222] shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`font-headline font-normal text-2xl tracking-wide ${scrolled ? 'text-gray-900 dark:text-white dark:text-white' : 'text-gray-900 dark:text-white dark:text-white'}`}>
          {config.logoUrl ? (
            <img src={config.logoUrl} alt={config.businessName} className="h-10 w-auto" />
          ) : (
            <>
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-headline font-black text-white text-sm"
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {isExternal(link.href) ? (
                <a
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:text-gray-400 dark:hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-white dark:text-gray-300 dark:hover:text-white'
                }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:text-gray-400 dark:hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-white dark:text-gray-300 dark:hover:text-white'
                }`}
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <ThemeToggle />
          <a
            href="/booking"
            className="hidden lg:inline-flex btn-primary px-6 py-2.5 text-xs"
          >
            {config.bookingCTA || 'Book Now'}
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 -mr-2 ${scrolled ? 'text-gray-900 dark:text-white dark:text-white' : 'text-gray-900 dark:text-white dark:text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white dark:bg-[#111111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white dark:bg-[#111111] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white dark:bg-[#111111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-6">
          {navLinks.map((link) =>
            isExternal(link.href) ? (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                        className="text-3xl font-headline font-normal text-gray-900 dark:text-white dark:text-white hover:text-primary transition-colors"
                      >{link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-base font-medium uppercase tracking-widest transition-colors">
                {link.label}
              </Link>
            )
          )}
          <Link to="/booking" onClick={() => setMenuOpen(false)}
            className="btn-primary px-6 py-4 rounded-sm text-sm text-center mt-2">
            {config.bookingCTA || 'Book Now'}
          </Link>
        </div>
      </div>
    </nav>
  )
}



