import React from "react";
import { motion } from "framer-motion";
import { Wrench, Home, Layers, Ruler } from "lucide-react"; // icons for services

const services = [
  {
    id: 1,
    title: "Custom Plywood Solutions",
    description:
      "We provide tailored plywood solutions for furniture, interiors, and construction needs.",
    icon: <Layers className="w-10 h-10 text-yellow-600" />,
  },
  {
    id: 2,
    title: "Interior Design Support",
    description:
      "Our plywood is crafted to enhance the beauty of modern interiors with lasting durability.",
    icon: <Home className="w-10 h-10 text-yellow-600" />,
  },
  {
    id: 3,
    title: "Durability & Strength",
    description:
      "Engineered for strength, our plywood withstands moisture, pressure, and heavy use.",
    icon: <Wrench className="w-10 h-10 text-yellow-600" />,
  },
  {
    id: 4,
    title: "Precision & Quality",
    description:
      "Our manufacturing process ensures accuracy and premium quality for every sheet.",
    icon: <Ruler className="w-10 h-10 text-yellow-600" />,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 mt-38">
      {/* Heading */}
      <motion.div
  className="text-center mb-12"
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
    Our Services
  </h2>
  <div className="mt-2 w-24 h-1 bg-yellow-600 mx-auto rounded"></div>
</motion.div>


      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className=" rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
