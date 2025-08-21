import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Century Ply",
    logo: "/images/afera.jpg",
    desc: "One of India’s most trusted plywood brands known for durability and innovation.",
  },
  {
    name: "Greenply",
    logo: "/images/afera.jpg",
    desc: "Leading manufacturer of plywood and decorative laminates with global presence.",
  },
  {
    name: "Kitply",
    logo: "/images/afera.jpg",
    desc: "Pioneers in eco-friendly and quality plywood solutions for interiors.",
  },
  {
    name: "Archidply",
    logo: "/images/afera.jpg",
    desc: "Known for premium plywood and veneer products used in luxury interiors.",
  },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          Brands We Work With
        </h1>
        <p className="text-lg text-gray-700">
          We proudly collaborate with leading **plywood & interior brands** to
          ensure top-notch quality and reliability in every project.
        </p>
      </motion.div>

      {/* Alternating Brand Sections */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Brand Logo */}
            <div className="flex-1 flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-40 object-contain drop-shadow-lg"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-yellow-600 mb-4">
                {brand.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {brand.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
