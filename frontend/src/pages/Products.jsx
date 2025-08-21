import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, image: "/images/afera.jpg" },
  { id: 2, image: "/images/afera.jpg" },
  { id: 3, image: "/images/afera.jpg" },
  { id: 4, image: "/images/afera.jpg" },
  { id: 5, image: "/images/afera.jpg" },
  { id: 6, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger animation for each image
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Products = () => {
  return (
    <div className="w-full bg-white min-h-screen mt-10 overflow-x-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center py-12 text-yellow-500">
        What We Provide
      </h2>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 md:h-96 w-full"
            variants={itemVariants}
          >
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
