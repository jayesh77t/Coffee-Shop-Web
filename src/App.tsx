import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import ProductCards from './sections/ProductCards'
import FeatureSplit from './sections/FeatureSplit'
import AppShowcase from './sections/AppShowcase'
import CTABanner from './sections/CTABanner'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/bg-bokeh.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px) brightness(0.9)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProductCards />
        <FeatureSplit />
        <AppShowcase />
        <CTABanner />
        <Footer />
      </div>
    </div>
  )
}

export default App
