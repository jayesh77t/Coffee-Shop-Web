import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const easeDefault: [number, number, number, number] = [0.16, 1, 0.3, 1]

function AppleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function GooglePlayLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5zm16.81-5.38L6.05 21.34l8.49-8.49 5.27 2.27zm2.73-2.04c.55.37.55 1.19 0 1.56l-2.37 1.02-2.57-2.57 2.57-2.57 2.37 1.02zM6.05 2.66l13.76 6.22-5.27 2.27L6.05 2.66z"/>
    </svg>
  )
}

function PhoneMockup1() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Mini Nav */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[8px] font-display font-semibold text-espresso">Coffee</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-latte/30" />
          <div className="w-4 h-4 rounded-full bg-latte/30" />
        </div>
      </div>
      {/* Mini Tabs */}
      <div className="flex gap-1">
        <div className="px-2 py-0.5 bg-espresso rounded-full">
          <span className="text-[6px] text-cream">All</span>
        </div>
        <div className="px-2 py-0.5 bg-white/40 rounded-full">
          <span className="text-[6px] text-mocha">Hot</span>
        </div>
        <div className="px-2 py-0.5 bg-white/40 rounded-full">
          <span className="text-[6px] text-mocha">Cold</span>
        </div>
      </div>
      {/* Mini Product Cards */}
      <div className="flex flex-col gap-1.5 mt-1">
        <div className="bg-white/50 rounded-lg p-1.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="/images/product-cappuccino.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[7px] font-display font-medium text-espresso truncate">Cappuccino</p>
            <p className="text-[6px] text-mocha">Rich & creamy</p>
          </div>
          <span className="text-[7px] font-display font-bold text-espresso">$17</span>
        </div>
        <div className="bg-white/50 rounded-lg p-1.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="/images/product-latte.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[7px] font-display font-medium text-espresso truncate">Latte</p>
            <p className="text-[6px] text-mocha">Smooth layers</p>
          </div>
          <span className="text-[7px] font-display font-bold text-espresso">$22</span>
        </div>
        <div className="bg-white/50 rounded-lg p-1.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-latte/30 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[7px] font-display font-medium text-espresso truncate">Espresso</p>
            <p className="text-[6px] text-mocha">Bold & strong</p>
          </div>
          <span className="text-[7px] font-display font-bold text-espresso">$12</span>
        </div>
      </div>
    </div>
  )
}

function PhoneMockup2() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Back button */}
      <div className="flex items-center gap-1 px-1">
        <div className="w-3 h-3 rounded-full bg-latte/30 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <span className="text-[7px] text-mocha">Back</span>
      </div>
      {/* Product Image */}
      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-md">
        <img src="/images/product-latte.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Product Info */}
      <div className="text-center">
        <p className="text-[9px] font-display font-semibold text-espresso">Latte Macchiato</p>
        <p className="text-[7px] text-mocha mt-0.5 px-2">Smooth espresso marked with creamy foamed milk, layered to perfection</p>
      </div>
      {/* Price */}
      <div className="flex justify-center">
        <span className="bg-espresso text-cream text-[8px] font-display font-bold rounded-pill px-2.5 py-1">$22.50</span>
      </div>
      {/* Add to Cart */}
      <button className="mt-auto mx-2 py-1.5 bg-espresso text-cream text-[7px] font-body font-medium rounded-full">
        Add to Cart
      </button>
    </div>
  )
}

export default function AppShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left — Phone Mockups */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative flex items-end">
              {/* Phone 1 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: easeDefault }}
                className="w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] lg:w-[220px] lg:h-[440px] rounded-phone overflow-hidden transition-all duration-300 ease-flavored hover:-translate-y-1.5 hover:shadow-lg z-10 flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 12px 32px rgba(44,26,14,0.1)',
                }}
              >
                <PhoneMockup1 />
              </motion.div>

              {/* Phone 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: easeDefault }}
                className="w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] lg:w-[220px] lg:h-[440px] rounded-phone overflow-hidden transition-all duration-300 ease-flavored hover:-translate-y-1.5 hover:shadow-lg -ml-12 mb-4 flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 12px 32px rgba(44,26,14,0.1)',
                }}
              >
                <PhoneMockup2 />
              </motion.div>
            </div>
          </div>

          {/* Right — App Copy */}
          <div className="flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: easeDefault }}
              className="font-display text-[32px] lg:text-[36px] font-medium text-espresso leading-[1.2]"
            >
              App is Available
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: easeDefault }}
              className="text-[15px] font-body text-mocha leading-[1.7] max-w-[400px]"
            >
              Order your favorite coffee ahead, collect loyalty rewards, and discover exclusive seasonal blends — all from your pocket. Available on iOS and Android.
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: easeDefault }}
              className="flex items-center gap-3 mt-2"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-espresso text-cream rounded-pill text-[13px] font-body font-medium transition-all duration-300 ease-flavored hover:bg-mocha hover:scale-[1.04]"
              >
                <AppleLogo />
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-espresso text-cream rounded-pill text-[13px] font-body font-medium transition-all duration-300 ease-flavored hover:bg-mocha hover:scale-[1.04]"
              >
                <GooglePlayLogo />
                Google Play
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
