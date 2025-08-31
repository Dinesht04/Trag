'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm border-b backdrop-blur-[4px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                <span className="text-blue-500">[</span>
                Trag
                <span className="text-blue-500">]</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              
              <a
                href="#work"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Work
              </a>
              <a
                href="#comparison"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Comparison
              </a>
              <a
                href="#faqs"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQs
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Plans and Pricing
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-black hover:cursor-pointer hover:bg-gray-800 text-white px-6 py-2 rounded-full">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href="#achievements"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
            <a
              href="#work"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </a>
            <a
              href="#comparison"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparison
            </a>
            <a
              href="#faqs"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full">
                Plans and Pricing
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
