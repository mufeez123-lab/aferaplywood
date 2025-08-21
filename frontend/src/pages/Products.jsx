import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, image: "/images/afera4.jpg" },
  { id: 2, image: "/images/afera5.jpg" },
  { id: 3, image: "/images/afera.jpg" },
  { id: 4, image: "/images/afera.jpg" },
  { id: 5, image: "/images/afera.jpg" },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Products = () => {
  return (
    <div className="w-full bg-white min-h-screen mt-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center py-10 text-yellow-500">
        
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 px-6 md:px-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative rounded-2xl  shadow-lg overflow-hidden h-[70vh] group w-full"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
            />

            {/* Overlay with Name */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-yellow-500/90 py-6 text-center">
              <p className="text-white font-semibold text-lg tracking-wide">
                {product.name}
              </p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
