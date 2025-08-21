import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroSection = () => {
  // Container variant for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // stagger each child
      },
    },
  };

  // Item variant for fade-up
  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - White Background */}
      <motion.div
        className="md:w-1/2 bg-white flex flex-col justify-center items-center px-8 md:px-16 py-16 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
      >
        {/* Image */}
        <motion.img
          src="/images/afera.jpg"
          alt="Everyone"
          className="w-80 h-80 md:w-96 md:h-96 object-cover mt-20"
          variants={fadeUpItem}
        />

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 text-lg font-edu italic text-center max-w-md"
          variants={fadeUpItem}
        >
          High-quality plywood solutions with durability and style. Crafted to
          meet modern design standards.
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3  shadow-lg w-max"
          variants={fadeUpItem}
        >
          <Link to="/whyafera">View Products</Link>
        </motion.button>
      </motion.div>

      {/* Right Side - Background Image */}
      <motion.div className="md:w-1/2 relative flex items-center justify-center">
        {/* Background Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Plywood"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        />

        {/* Red Overlay Box */}
        <motion.div
          className="absolute top-1/4 right-1/4 bg-red-600/80 p-16 shadow-lg max-w-xs text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.h3
            className="text-4xl font-bold mb-2"
            variants={fadeUpItem}
          >
            Why Choose Afera?
          </motion.h3>
          <motion.p className="text-sm font-edu italic" variants={fadeUpItem}>
            Our plywood is durable, reliable, and trusted by thousands of
            customers. Quality and style in every sheet.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
