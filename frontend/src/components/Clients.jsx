import React from "react";

const clients = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
  "/images/brand6.png",
]; // 🔥 replace with your brand logos

const Clients = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
          Our Clients
        </h2>
        {/* Center underline */}
        <div className="w-20 h-1 bg-yellow-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Logo Slider */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* Repeat logos twice for infinite loop */}
          {clients.concat(clients).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 mx-6 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`client-${index}`}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
