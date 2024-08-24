import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="block lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-400 transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="absolute top-16 right-4 bg-black-800 text-white shadow-lg rounded-lg">
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
