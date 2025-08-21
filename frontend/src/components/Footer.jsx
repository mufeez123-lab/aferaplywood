import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-500 text-white py-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <img src="/images/aferalogo.png" alt="Redclub Logo" className="h-28 w-28" />
          <p className="mt-0 text-sm leading-6 text-justify">
            Delivering premium-quality plywood solutions designed for durability,
            style, and modern interiors. Trusted by thousands of customers for
            superior performance and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">WhyAfera</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MapPin size={18} /> Mangalore, Karnataka, India
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Phone size={18} /> +91 89515 55551
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Mail size={18} /> info@aferaplywood.com
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/aferaplywood/" className="hover:text-black">
              <Instagram size={20} />
            </a>
            <a 
  href="https://wa.me/918951555551?text=Hello%20I%20am%20interested%20in%20your%20products" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-black"
>
  <img
    src="/images/whatsapp.svg"
    alt="WhatsApp"
    className="w-5 h-5 filter invert" // ✅ same size and style as Instagram
  />
</a>


      
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
        © {currentYear} Afera Plywood. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
