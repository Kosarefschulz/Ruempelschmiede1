'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Entrümpelung Service"
        fill
        priority
        className="object-cover brightness-[0.85]"
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              Professionelle Entrümpelung in Hamburg & Umgebung
            </h1>
            <p className="mb-8 text-lg text-white drop-shadow md:text-xl">
              Schnell, zuverlässig und fair - Wir kümmern uns um Ihre Entrümpelung!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-green-700"
              onClick={() => {
                // TODO: Implement contact form or scroll to contact section
                console.log('CTA clicked');
              }}
            >
              Kostenlose Schätzung
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 