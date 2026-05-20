import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const easeDefault: [number, number, number, number] = [0.16, 1, 0.3, 1]

function CategoryIcon({ icon, delay }: { icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeDefault }}
      className="w-9 h-9 rounded-full frosted-circle flex items-center justify-center cursor-pointer transition-all duration-300 ease-flavored hover:bg-espresso hover:scale-110 group"
    >
      <div className="text-mocha group-hover:text-cream transition-colors duration-300">
        {icon}
      </div>
    </motion.div>
  )
}

function CoffeeCupIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

function FrenchPressIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="12" height="18" rx="2" />
      <line x1="10" y1="8" x2="10" y2="16" />
      <line x1="7" y1="5" x2="13" y2="5" />
      <line x1="16" y1="7" x2="20" y2="7" />
      <line x1="18" y1="5" x2="18" y2="9" />
    </svg>
  )
}

function PourOverIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16l-2 6H6L4 4z" />
      <line x1="12" y1="10" x2="12" y2="20" />
      <path d="M8 20h8" />
      <path d="M9 4l1.5 6" />
      <path d="M15 4l-1.5 6" />
    </svg>
  )
}

function CoffeeBeanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(45 12 12)" />
      <path d="M7.5 7.5c1.5 3 3 6 6 9" />
      <path d="M9 6c1.5 3 3 6 6 9" />
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const cupRotation = useTransform(scrollYProgress, [0, 1], [0, 6])

  const categoryIcons = [
    <CoffeeCupIcon key="cup" />,
    <FrenchPressIcon key="french" />,
    <PourOverIcon key="pour" />,
    <CoffeeBeanIcon key="bean" />,
  ]

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-[72px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-4 items-center">
          {/* Left Column — Content */}
          <div className="flex flex-col items-start gap-5">
            {/* Small Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0, ease: easeDefault }}
              className="text-[11px] font-body font-medium tracking-[0.1em] uppercase text-mocha"
            >
              Premium Coffee
            </motion.span>

            {/* H1 */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1, ease: easeDefault }}
                className="font-display text-[48px] sm:text-[56px] lg:text-[72px] font-semibold text-espresso leading-[1.05]"
              >
                Coffee
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: easeDefault }}
                className="font-display text-[48px] sm:text-[56px] lg:text-[72px] font-semibold text-espresso leading-[1.05]"
              >
                The Best For You
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeDefault }}
              className="text-[15px] font-body text-mocha leading-[1.7] max-w-[380px]"
            >
              Handcrafted with passion, brewed to perfection. Discover our artisanal selection of premium coffees sourced from the world's finest regions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: easeDefault }}
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center px-9 py-3.5 bg-espresso text-cream text-[15px] font-body font-medium rounded-pill overflow-hidden transition-all duration-300 ease-flavored hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-latte translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-flavored" />
                <span className="relative z-10">View Menu</span>
              </a>
            </motion.div>

            {/* Category Icons */}
            <div className="flex items-center gap-3 mt-2">
              {categoryIcons.map((icon, i) => (
                <CategoryIcon key={i} icon={icon} delay={0.6 + i * 0.08} />
              ))}
            </div>
          </div>

          {/* Right Column — Coffee Cup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: easeDefault }}
            className="flex items-center justify-center"
          >
            <motion.div
              style={{ rotate: cupRotation }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative"
            >
              <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-hero-cup">
                <img
                  src="/images/hero-cup.jpg"
                  alt="Coffee cup with heart latte art"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
