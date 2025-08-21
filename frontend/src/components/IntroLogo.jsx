// App.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero"; // your existing Hero component

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // hide intro after 2.5s
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro"
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.img
              src="/images/aferalogo.png"
              alt="Afera Logo"
              className="w-40 sm:w-56"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
        ) : (
          <Hero /> // your website shows after logo animation
        )}
      </AnimatePresence>
    </>
  );
}
