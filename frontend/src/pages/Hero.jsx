import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const images = ['/images/afera.jpg', '/images/afera1.jpg', '/images/afera2.jpg'];
  
  const texts = [
    "High-Quality Plywood for Every Project",
    "Durable and Stylish Plywood Solutions",
    "Trusted by Thousands for Superior Quality"
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200vw); }
        }
        .slidingBackgrounds {
          display: flex;
          width: 300vw;
          animation: slideLeft 30s linear infinite;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <section className="relative h-screen overflow-hidden">
        {/* Sliding background images */}
        <div className="slidingBackgrounds absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-screen h-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Animated text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 max-w-4xl mx-auto text-center">

          {/* Logo with fade-up animation */}
          <motion.img
            src="/images/aferalogo.png"
            alt="Afera Logo"
            className="w-54 sm:w-56 mx-auto mb-6"
            style={{ filter: "invert(100%)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              className="text-4xl sm:text-6xl font-playfair italic leading-tight max-w-full"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {texts[textIndex]}
            </motion.h1>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
