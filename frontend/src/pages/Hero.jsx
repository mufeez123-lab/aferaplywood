import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const images = ['/images/afera.jpg', '/images/afera1.jpg', '/images/afera2.jpg'];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h3 className="text-red-500 font-bold text-xl">Explore</h3>
        <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-4">
          The Elegance of Wood
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
          Experience the art of superior craftsmanship with CenturyPly where
          innovation meets unmatched quality to create enduring spaces.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium shadow-lg"
        >
          Explore More
          <span className="text-red-500 text-xl">➜</span>
        </motion.a>
      </div>
    </section>
  );
}
