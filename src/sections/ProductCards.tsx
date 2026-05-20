import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Heart } from 'lucide-react'

const easeDefault: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface Product {
  name: string
  description: string
  price: string
  image: string
}

const products: Product[] = [
  {
    name: 'Cappuccino',
    description: 'Rich espresso with velvety steamed milk and thick foam',
    price: '$17.50',
    image: '/images/product-cappuccino.jpg',
  },
  {
    name: 'Latte Macchiato',
    description: 'Smooth espresso marked with creamy foamed milk',
    price: '$22.50',
    image: '/images/product-latte.jpg',
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: easeDefault }}
      className="glass-card rounded-card p-5 transition-all duration-350 ease-flavored hover:-translate-y-2 hover:shadow-card-hover hover:border-white/70 group cursor-pointer"
    >
      {/* Product Image */}
      <div className="flex justify-center -mt-8 mb-4">
        <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-400 ease-flavored group-hover:scale-105"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="font-display text-[15px] font-medium text-espresso mb-1">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-[12px] font-body text-mocha leading-[1.6] mb-4">
        {product.description}
      </p>

      {/* Action Row */}
      <div className="flex items-center justify-between">
        {/* Icon Buttons */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full frosted-circle flex items-center justify-center transition-all duration-300 ease-flavored hover:bg-espresso group/cart">
            <ShoppingCart className="w-3.5 h-3.5 text-mocha group-hover/cart:text-cream transition-colors" />
          </button>
          <button className="w-8 h-8 rounded-full frosted-circle flex items-center justify-center transition-all duration-300 ease-flavored hover:bg-wishlist group/wish">
            <Heart className="w-3.5 h-3.5 text-mocha group-hover/wish:text-cream transition-colors" />
          </button>
        </div>

        {/* Price Pill */}
        <span className="bg-espresso text-cream font-display font-bold text-[14px] rounded-pill px-3.5 py-1.5">
          {product.price}
        </span>
      </div>
    </motion.div>
  )
}

export default function ProductCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-12 items-center">
          {/* Left — Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>

          {/* Right — Editorial Text */}
          <div ref={textRef} className="flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              animate={textInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeDefault }}
              className="font-display text-[32px] lg:text-[36px] font-medium text-espresso leading-[1.2]"
            >
              Crafted with Care, Served with Love
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: easeDefault }}
              className="text-[15px] font-body text-mocha leading-[1.7] max-w-[420px]"
            >
              Every cup tells a story. From the misty highlands of Ethiopia to the sun-drenched slopes of Colombia, we source only the finest single-origin beans. Our master roasters carefully coax out each origin's unique character, creating blends that awaken your senses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: easeDefault }}
            >
              <a
                href="#about"
                className="group inline-flex items-center px-7 py-3 border-[1.5px] border-espresso text-espresso text-[14px] font-body font-medium rounded-pill transition-all duration-300 ease-flavored hover:bg-espresso hover:text-cream hover:rounded-[16px]"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
