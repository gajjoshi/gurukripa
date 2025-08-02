"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
          <span className="ml-3 text-2xl font-bold text-gray-900">GURUKRIPA </span>
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

      {/* Overlay (Dark semi-transparent background) */}
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
            <a href="#" className="text-2xl font-semibold text-yellow-500 hover:text-yellow-400 transition">Home</a>
            <a href="#" className="text-2xl font-semibold text-white hover:text-yellow-400 transition">About</a>
            <a href="#" className="text-2xl font-semibold text-white hover:text-yellow-400 transition">Contact</a>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      {/* <div className="pt-24 text-center text-3xl text-gray-900">hello</div> */}
    </div>
  );
}
