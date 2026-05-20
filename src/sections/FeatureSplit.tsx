import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface BeanPosition {
  id: number
  initialX: number
  initialY: number
  scrollX: number
  scrollY: number
  rotation: number
  size: number
}

const beanPositions: BeanPosition[] = [
  { id: 1, initialX: -120, initialY: -80, scrollX: -40, scrollY: -30, rotation: 15, size: 28 },
  { id: 2, initialX: 140, initialY: -60, scrollX: 50, scrollY: -20, rotation: -25, size: 24 },
  { id: 3, initialX: -100, initialY: 100, scrollX: -35, scrollY: 35, rotation: 45, size: 26 },
  { id: 4, initialX: 130, initialY: 90, scrollX: 45, scrollY: 30, rotation: -10, size: 22 },
  { id: 5, initialX: -140, initialY: 10, scrollX: -50, scrollY: 5, rotation: 70, size: 30 },
  { id: 6, initialX: 100, initialY: -110, scrollX: 35, scrollY: -40, rotation: -45, size: 20 },
  { id: 7, initialX: -60, initialY: -130, scrollX: -20, scrollY: -45, rotation: 30, size: 25 },
  { id: 8, initialX: 80, initialY: 130, scrollX: 30, scrollY: 40, rotation: -60, size: 27 },
  { id: 9, initialX: 160, initialY: 30, scrollX: 55, scrollY: 10, rotation: 80, size: 23 },
  { id: 10, initialX: -80, initialY: 60, scrollX: -25, scrollY: 25, rotation: -35, size: 29 },
]

export default function FeatureSplit() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const beansRef = useRef<(HTMLImageElement | null)[]>([])
  const cupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current) return

    const ctx = gsap.context(() => {
      // Left copy block animation
      gsap.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          scrub: 1,
        },
      })

      // Cup scale animation
      if (cupRef.current) {
        gsap.from(cupRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            scrub: 1,
          },
        })
      }

      // Coffee beans scatter animation
      beansRef.current.forEach((bean, i) => {
        if (!bean) return
        const pos = beanPositions[i]
        gsap.to(bean, {
          x: pos.scrollX,
          y: pos.scrollY,
          rotation: pos.rotation * 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32"
      style={{ background: 'rgba(232,213,192,0.25)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy Block */}
          <div ref={leftRef} className="flex flex-col gap-5">
            <h2 className="font-display text-[36px] lg:text-[42px] font-medium text-espresso leading-[1.35]">
              Experience the<br />
              Perfect<br />
              Brew Every Day
            </h2>

            <p className="text-[15px] font-body text-mocha leading-[1.7] max-w-[480px]">
              Our baristas are true artisans, trained in the time-honored traditions of Italian espresso-making while embracing innovative brewing techniques. Whether you prefer a bold ristretto or a smooth cold brew, we have the perfect cup waiting for you.
            </p>

            <div>
              <a
                href="#menu"
                className="group inline-flex items-center px-7 py-3 border-[1.5px] border-espresso text-espresso text-[14px] font-body font-medium rounded-pill transition-all duration-300 ease-flavored hover:bg-espresso hover:text-cream hover:rounded-[16px]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right — Coffee Composition */}
          <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
            {/* Coffee Cup */}
            <div
              ref={cupRef}
              className="relative z-10 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-hero-cup"
            >
              <img
                src="/images/feature-cup.jpg"
                alt="Coffee cup with latte art"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Price Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-[10%] right-[15%] z-20 bg-espresso text-cream font-display font-bold text-[14px] rounded-badge px-3.5 py-2 animate-bounce"
            >
              $2.50
            </motion.div>

            {/* Coffee Beans */}
            {beanPositions.map((pos, i) => (
              <img
                key={pos.id}
                ref={(el) => { beansRef.current[i] = el }}
                src="/images/coffee-bean.png"
                alt=""
                className="absolute z-[5] pointer-events-none"
                style={{
                  width: pos.size,
                  height: pos.size,
                  left: `calc(50% + ${pos.initialX}px)`,
                  top: `calc(50% + ${pos.initialY}px)`,
                  transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
