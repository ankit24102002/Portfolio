import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(6,8,15,0.92)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0066aa)' }}
            >
              <span className="text-[#06080f] font-black text-xs">A</span>
            </div>
            <span className="hidden sm:block text-white font-semibold text-sm tracking-wide">
              Ankit Singla
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={
                  activeSection === link.href.slice(1)
                    ? { color: '#00d4ff', background: 'rgba(0,212,255,0.08)' }
                    : { color: 'rgba(156,163,175,1)' }
                }
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.target.style.color = 'white'
                    e.target.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.target.style.color = 'rgba(156,163,175,1)'
                    e.target.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(6,8,15,0.97)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              overflow: 'hidden',
            }}
          >
            <div className="px-5 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={
                    activeSection === link.href.slice(1)
                      ? { color: '#00d4ff', background: 'rgba(0,212,255,0.08)' }
                      : { color: 'rgba(156,163,175,1)' }
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
