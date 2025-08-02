"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-md flex justify-between items-center px-6 py-3 z-50"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={150}
            height={70}
            className="rounded-full"
          />
          {/* <span className="ml-3 text-2xl font-bold text-gray-900">GURUKRIPA</span> */}
        </div>

        {/* Hamburger Icon */}
        <button
          className="p-2 rounded-md hover:bg-white/40 transition"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.nav>

      {/* Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setMenuOpen(false)}
        ></motion.div>
      )}

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 h-full w-64 bg-black z-50 shadow-2xl p-6"
      >
        <div className="flex flex-col space-y-6">
          {/* Close Button */}
          <button
            className="self-end text-yellow-500 hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-6 mt-8">
            {["Home", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-2xl font-semibold ${
                  i === 0 ? "text-yellow-500" : "text-white"
                } hover:text-yellow-400 transition`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900"
        >
          Welcome to <span className="text-yellow-500">GURUKRIPA</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-700"
        >
          Crafting a future where innovation meets excellence.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="mt-8 px-8 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Learn More
        </motion.a>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about"
        className="py-20 bg-black text-white text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-yellow-500">About Us</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          At GURUKRIPA, we believe in blending tradition with innovation. Our journey began with a vision to transform industries through ethical practices, cutting-edge technology, and a relentless pursuit of excellence.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        id="vision"
        className="py-20 bg-white text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          Over the next decade, we aim to become a leading name in our domain, driving progress with sustainability, innovation, and unwavering commitment to our stakeholders.
        </p>
      </motion.section>

      {/* 10-Year Goal Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-black to-gray-900 text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-yellow-500">Where We See Ourselves in 10 Years</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          By 2035, GURUKRIPA envisions a global footprint, impacting lives through groundbreaking initiatives, fostering growth, and building a legacy of trust and excellence.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-white text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-6 text-lg text-gray-700">
          Have questions or want to work with us? Get in touch.
        </p>
        <form className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={5}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GURUKRIPA. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
