import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import logo from "/images/aferalogo.png";

const About = () => {
  // Variants for staggered fade-up animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // each child appears 0.1s after previous
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const descriptionLines = [
    "Afera Plywood offers premium-quality",
    "plywood solutions designed for durability, style, and modern interiors.",
    "Trusted by thousands of customers, our products ensure superior performance.",
    "We combine innovation with craftsmanship to deliver unmatched quality.",
  ];

  return (
    <div className="overflow-x-hidden relative">
      {/* Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      {/* Hero / Logo Section */}
      <motion.div
        className="
          bg-white min-h-screen flex flex-col items-center justify-center
          pt-24 px-6 sm:px-10
          bg-[length:600%] sm:bg-[length:400%] md:bg-[length:250%] lg:bg-[length:150%]
          bg-no-repeat bg-center
        "
        style={{
          backgroundImage: `url('/images/aboutback.png')`,
        }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* <div className="absolute inset-0 bg-yellow-400 opacity-30 pointer-events-none"></div> */}
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-playfair text-yellow-700 italic text-center mb-4"
          variants={item}
        >
          <span className="text-4xl  font-edu  text-gray-800">Our Vision & Values</span>
        </motion.h1>

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Afera Logo"
          className="w-56 h-auto mb-0"
          variants={item}
        />

        {/* Description */}
       <div className="max-w-3xl mx-auto font-edu text-center">
  <motion.p
    className="text-lg md:text-xl text-gray-700  font-edu italic leading-relaxed tracking-wide mb-2"
    variants={item}
  >
    Afera Plywood offers premium-quality plywood solutions designed for durability, style, and modern interiors. Trusted by thousands of customers, our products ensure superior performance. We combine innovation with craftsmanship to deliver unmatched quality.
  </motion.p>
</div>

      </motion.div>

      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16 relative px-6 md:px-20">
        {/* Text */}
        <motion.div
          className="z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-edu italic mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to rise above the flaws and bring new possibilities in
            the plywood industry. ...
          </p>
        </motion.div>

        {/* Image with gradient overlay */}
        <motion.div
          className="w-full h-full relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Vision"
            className="w-full h-full object-cover border border-white"
          />
          <div className="absolute inset-0 md:bg-gradient-to-l md:from-transparent md:via-black/10 md:to-white bg-gradient-to-t from-transparent via-black/10 to-white"></div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-16 relative px-6 md:px-20">
        {/* Text */}
        <motion.div
          className="text-gray-800 md:w-1/2 z-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-edu italic mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to provide top-quality plywood while maintaining the well-being of
            our workforce and sustainable production methods. Every sheet we deliver
            is a promise of quality and reliability.
          </p>
        </motion.div>

        {/* Image with gradient overlay */}
        <motion.div
          className="w-full md:w-1/2 h-full relative"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Mission"
            className="w-full h-full object-cover border border-white"
          />
          <div className="absolute inset-0 md:bg-gradient-to-r md:from-transparent md:via-black/10 md:to-white bg-gradient-to-t from-transparent via-black/10 to-white"></div>
        </motion.div>
      </div>

      {/* Chairman's Message Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-16 bg-gray-100 mt-16">
        {/* Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-6">
            Success in the plywood industry requires dedication and a commitment to
            quality. Our journey has been one of excellence, innovation, and
            customer satisfaction, which fills me with pride.
          </p>
          <p className="text-gray-600 font-edu italic ">Kaleel, Chairman</p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="/images/chairman.jpg" // replace with actual image
            alt="Chairman"
            className="w-52 h-68 md:w-64 md:h-82 object-cover px-2 py-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
