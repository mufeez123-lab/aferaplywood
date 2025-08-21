import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/whyafera";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <AnimatePresence>
        {showIntro ? (
          // Intro Logo Fade-Up Animation
          <motion.div
            key="intro"
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.img
              src="/images/aferalogo.png"
              alt="Afera Logo"
              className="w-40 sm:w-56"
              initial={{ y: 50, opacity: 0 }}   // starts below and invisible
              animate={{ y: 0, opacity: 1 }}    // moves up and visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        ) : (
          // Main Website
          <>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}
            <div
              className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="p-4 space-y-4">
                <li><a href="/" onClick={() => setSidebarOpen(false)}>Home</a></li>
                <li><a href="/about" onClick={() => setSidebarOpen(false)}>About Us</a></li>
                <li><a href="/whyafera" onClick={() => setSidebarOpen(false)}>Products</a></li>
                <li><a href="/brands" onClick={() => setSidebarOpen(false)}>Brands</a></li>
                <li><a href="/contact" onClick={() => setSidebarOpen(false)}>Contact</a></li>
              </ul>
            </div>

            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/whyafera" element={<Products />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
