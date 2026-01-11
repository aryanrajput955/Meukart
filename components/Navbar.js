'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-green rounded-full flex items-center justify-center group-hover:bg-secondary-green transition-colors shadow-md">
              <span className="text-white font-bold text-xl md:text-2xl">M</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary-green-dark">Meukart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="/" className="text-dark-gray hover:text-primary-green transition-colors font-medium text-base lg:text-lg">
              Home
            </Link>
            <Link href="/about" className="text-dark-gray hover:text-primary-green transition-colors font-medium text-base lg:text-lg">
              About
            </Link>
            <Link href="/services" className="text-dark-gray hover:text-primary-green transition-colors font-medium text-base lg:text-lg">
              Services
            </Link>
            <Link href="/contact" className="text-dark-gray hover:text-primary-green transition-colors font-medium text-base lg:text-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-light-green transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary-green"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-green">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-3 text-dark-gray hover:bg-light-green hover:text-primary-green rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-dark-gray hover:bg-light-green hover:text-primary-green rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-dark-gray hover:bg-light-green hover:text-primary-green rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-dark-gray hover:bg-light-green hover:text-primary-green rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
