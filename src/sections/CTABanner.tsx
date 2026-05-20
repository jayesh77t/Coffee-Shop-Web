import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Clip-path wipe animation
      gsap.fromTo(
        sectionRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      )

      // Text fade up after wipe
      gsap.from(contentRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative"
      style={{
        background: 'rgba(44,26,14,0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div
          ref={contentRef}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          {/* Left — Text */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-body font-medium tracking-[0.1em] uppercase text-latte">
              LET'S TALK
            </span>
            <h2 className="font-display text-[32px] lg:text-[40px] font-medium text-cream leading-[1.2]">
              Want to Reserve a Table?
            </h2>
          </div>

          {/* Right — Button */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-espresso text-cream text-[15px] font-body font-medium rounded-pill transition-all duration-300 ease-flavored hover:bg-latte"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
