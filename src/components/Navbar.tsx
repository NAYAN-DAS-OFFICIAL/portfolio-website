"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 fixed top-0 bg-white/80 backdrop-blur-xl z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-black">
          Portfolio
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-6 font-medium text-black">

          <li>
            <a
              href="#home"
              className="hover:text-gray-500 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-gray-500 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-gray-500 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-gray-500 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-gray-500 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-black">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}