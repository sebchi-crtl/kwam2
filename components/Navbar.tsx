"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white max-w-[90rem] mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-1">
          <Image src="/image/landing/Logo.svg" className="w-44 h-20 object-contain" alt="logo" width={100} height={100} />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 bg-orange-100 px-8 py-2 rounded-full text-xl">
        <Link 
          href="/" 
          className="text-orange-500 font-medium hover:text-orange-600 transition-colors font-rubik"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-gray-600 font-medium hover:text-gray-800 transition-colors font-rubik"
        >
          About Us
        </Link>
        <Link 
          href="/meet" 
          className="text-gray-600 font-medium hover:text-gray-800 transition-colors font-rubik"
        >
          Meet Us
        </Link>
      </div>

      {/* Contact Button */}
      <div className="flex items-center">
        <Button 
          className="bg-orange-400 hover:bg-orange-600 text-white font-normal px-6 py-2 rounded-full text-lg transition-colors font-rubik"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
