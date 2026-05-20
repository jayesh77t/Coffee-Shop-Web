import { useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Coffee Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

function CoffeeCupIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-flavored"
      style={{
        background: scrolled ? 'rgba(250,246,240,0.92)' : 'rgba(250,246,240,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 2px 12px rgba(44,26,14,0.06)' : 'none',
        borderBottom: '0.5px solid rgba(44,26,14,0.08)',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px] px-6 lg:px-10">
        {/* Left - Brand */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-lg font-medium text-espresso">Flavored</span>
            <CoffeeCupIcon className="w-4 h-4 text-espresso" />
          </div>
          <span className="text-[11px] font-body font-medium tracking-[0.1em] uppercase text-mocha">
            Wake up to something special.
          </span>
        </div>

        {/* Center - Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link-underline text-[13px] font-body tracking-[0.02em] transition-colors duration-300 ${
                link.active ? 'text-espresso font-medium' : 'text-mocha hover:text-espresso'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right - CTA Button (desktop) */}
        <a
          href="#shop"
          className="hidden md:inline-flex items-center px-5 py-2 bg-espresso text-cream text-[13px] font-body font-medium rounded-pill transition-all duration-300 ease-flavored hover:bg-mocha hover:scale-[1.03]"
        >
          Coffee Shop
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-espresso"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-cream/95 backdrop-blur-lg border-t border-espresso/8 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[15px] font-body ${
                  link.active ? 'text-espresso font-medium' : 'text-mocha'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-espresso text-cream text-[14px] font-body font-medium rounded-pill mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Coffee Shop
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
