import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { FiPhone, FiMessageSquare } from 'react-icons/fi'; // Phone & WhatsApp icons

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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-26"></div>

        {/* Animated text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 max-w-4xl mx-auto text-center">
          <motion.img
            src="/images/aferalogo.png"
            alt="Afera Logo"
            className="w-70 sm:w-56 mx-auto mb-0 mt-72 md:mt-0"
            style={{ filter: "invert(100%)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              className="text-4xl sm:text-6xl font-playfair italic leading-tight max-w-full gap-0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {texts[textIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Floating buttons */}
        <div className="fixed top-1/3 right-0  flex flex-col gap-1 z-20">
          {/* Enquire Now */}
          <Link
            to="/contact"
            className="bg-red-700 border-t border-l border-b hover:bg-red-900 text-white px-2 py-3 rounded-l-lg shadow-lg font-semibold transition duration-300 [writing-mode:vertical-lr] flex items-center justify-center gap-1"
          >
            Enquire Now
          </Link>

          {/* Call Button */}
          <a
            href="tel:+918951555551"
            className="bg-green-600 border-t border-l border-b hover:bg-green-700 text-white px-2 py-2 rounded-l-lg shadow-lg font-semibold transition duration-300 [writing-mode:vertical-lr] flex items-center justify-center gap-1"
          >
            <FiPhone size={20} />

          </a>

          {/* WhatsApp Button */}
          <a
  href="https://wa.me/918951555551?text=Hello%20I%20am%20interested%20in%20your%20products"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 border-t border-l border-b hover:bg-green-700 text-white px-2 py-2 rounded-l-lg shadow-lg font-semibold transition duration-300 [writing-mode:vertical-lr] flex items-center justify-center gap-1"
>
  <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
</a>

        </div>
      </section>
    </>
  );
}
