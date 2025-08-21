import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://aferaplywood.onrender.com/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl border-t-4 border-yellow-500"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Get in <span className="text-yellow-600">Touch</span>
        </h2>
        <p className="text-center text-gray-500 mb-8">
          We'd love to hear from you. Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition">
            <User className="text-yellow-500 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition">
            <Mail className="text-yellow-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition">
            <Phone className="text-yellow-500 mr-3" />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex items-start border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition">
            <MessageSquare className="text-yellow-500 mr-3 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full outline-none resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-md transition"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p className="mt-6 text-center text-sm font-medium text-gray-700">
            {status}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;
