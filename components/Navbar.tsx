"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`w-full px-6 py-4 flex items-center justify-between bg-transparent max-w-[90rem] mx-auto  top-0 z-50 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-md bg-white/95' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-1" onClick={closeMobileMenu}>
          <Image src="/image/landing/Logo.svg" className="w-44 h-20 object-contain" alt="logo" width={100} height={100} />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 bg-orange-100 px-8 py-2 rounded-full text-xl">
        <Link 
          href="/" 
          className={`font-medium transition-colors font-rubik hover:scale-105 ${
            pathname === "/" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`font-medium transition-colors font-rubik hover:scale-105 ${
            pathname === "/about" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          About Us
        </Link>
        <Link 
          href="/meet" 
          className={`font-medium transition-colors font-rubik hover:scale-105 ${
            pathname === "/meet" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Meet Us
        </Link>
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden md:flex items-center">
        <Button 
          className="bg-orange-400 hover:bg-orange-600 text-white font-normal px-6 py-2 rounded-full text-lg transition-all duration-300 font-rubik hover:scale-105"
        >
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-6 h-0.5 bg-gray-600 block transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-gray-600 block mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-gray-600 block mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-6">
            <Link 
              href="/" 
              className={`block text-2xl font-medium transition-colors font-rubik ${
                pathname === "/" 
                  ? "text-orange-500" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`block text-2xl font-medium transition-colors font-rubik ${
                pathname === "/about" 
                  ? "text-orange-500" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            
            <Link 
              href="/meet" 
              className={`block text-2xl font-medium transition-colors font-rubik ${
                pathname === "/meet" 
                  ? "text-orange-500" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              Meet Us
            </Link>
          </div>

          {/* Mobile Contact Button */}
          <div className="mt-8">
            <Button 
              className="w-full bg-orange-400 hover:bg-orange-600 text-white font-normal py-3 rounded-full text-lg transition-colors font-rubik"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
