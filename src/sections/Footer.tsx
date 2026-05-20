import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const easeDefault: [number, number, number, number] = [0.16, 1, 0.3, 1]

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

function FooterLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="relative text-[13px] font-body text-mocha transition-colors duration-300 hover:text-espresso group inline-block"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-px bg-espresso origin-left scale-x-0 transition-transform duration-300 ease-flavored group-hover:scale-x-100" />
    </a>
  )
}

const serviceLinks = ['Pricing', 'Tracking', 'Report a Bug', 'Terms of Services']
const companyLinks = ['About Us', 'Careers', 'Blog', 'Press']

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(columnsRef, { once: true, amount: 0.1 })

  return (
    <footer ref={footerRef} className="relative pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Zone 1 — Body Copy */}
        <p className="text-[14px] font-body text-mocha leading-[1.7] max-w-[640px]">
          At Flavored, we believe every cup of coffee is an opportunity to create something extraordinary. Our commitment to quality, sustainability, and community drives everything we do — from bean to cup.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-espresso/[0.12] my-10" />

        {/* Zone 2 — 4 Column Grid */}
        <div ref={columnsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0, ease: easeDefault }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg font-medium text-espresso">Flavored</span>
              <CoffeeCupIcon className="w-4 h-4 text-espresso" />
            </div>
            <span className="text-[11px] font-body font-medium tracking-[0.1em] uppercase text-mocha">
              Wake up to something special.
            </span>
          </motion.div>

          {/* Column 2 — Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easeDefault }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-[13px] font-body font-semibold text-espresso">
              Our Services
            </h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </motion.div>

          {/* Column 3 — Our Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: easeDefault }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-[13px] font-body font-semibold text-espresso">
              Our Company
            </h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </motion.div>

          {/* Column 4 — Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: easeDefault }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-[13px] font-body font-semibold text-espresso">
              Address
            </h4>
            <p className="text-[13px] font-body text-mocha leading-[1.6]">
              123 Brew Street, Coffee District, New York, NY 10001
            </p>
            <a
              href="mailto:hello@flavored.coffee"
              className="text-[13px] font-body text-mocha hover:text-espresso transition-colors duration-300"
            >
              hello@flavored.coffee
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-espresso/[0.08]">
          <p className="text-[12px] font-body text-mocha text-center">
            &copy; {new Date().getFullYear()} Flavored Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
