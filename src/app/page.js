"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-md flex justify-between items-center px-6 py-3 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <span className="ml-3 text-2xl font-bold text-gray-900">GURUKRIPA</span>
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
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 shadow-2xl`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Close Button */}
          <button
            className="self-end text-yellow-500 hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-6 mt-8">
            <a href="#about" className="text-2xl font-semibold text-yellow-500 hover:text-yellow-400 transition">Home</a>
            <a href="#vision" className="text-2xl font-semibold text-white hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="text-2xl font-semibold text-white hover:text-yellow-400 transition">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Welcome to <span className="text-yellow-500">GURUKRIPA</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-700">
          Crafting a future where innovation meets excellence.
        </p>
        <a
          href="#about"
          className="mt-8 px-8 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Learn More
        </a>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-bold text-yellow-500">About Us</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          At GURUKRIPA, we believe in blending tradition with innovation. Our journey began with a vision to transform industries through ethical practices, cutting-edge technology, and a relentless pursuit of excellence.
        </p>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          Over the next decade, we aim to become a leading name in our domain, driving progress with sustainability, innovation, and unwavering commitment to our stakeholders.
        </p>
      </section>

      {/* 10-Year Goal Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-center text-white px-6">
        <h2 className="text-4xl font-bold text-yellow-500">Where We See Ourselves in 10 Years</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          By 2035, GURUKRIPA envisions a global footprint, impacting lives through groundbreaking initiatives, fostering growth, and building a legacy of trust and excellence.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center px-6">
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
          <button
            type="submit"
            className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GURUKRIPA. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
