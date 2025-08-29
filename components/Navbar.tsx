"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

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
          className={`font-medium transition-colors font-rubik ${
            pathname === "/" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`font-medium transition-colors font-rubik ${
            pathname === "/about" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          About Us
        </Link>
        <Link 
          href="/meet" 
          className={`font-medium transition-colors font-rubik ${
            pathname === "/meet" 
              ? "text-orange-500" 
              : "text-gray-600 hover:text-gray-800"
          }`}
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
