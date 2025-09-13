"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", url: "/" },
    {
      title: "About Us",
      url: "/about"
    },
    {
      title: "Meet Us",
      url: "/meet"
    },
  ];

  return (
    <nav 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between max-w-[90rem] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1">
            <Image src="/kwam2.svg" className="w-38 h-18 object-contain" alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={`font-rubik text-lg font-medium transition-colors hover:text-orange-500 ${
                pathname === item.url ? "text-orange-500" : "text-gray-600"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex items-center">
          <Button 
            className="bg-orange-400 hover:bg-orange-600 text-white font-normal px-6 py-2 rounded-full text-lg transition-all duration-300 font-rubik hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className={`border-0 hover:bg-transparent ${
                  isScrolled ? 'text-gray-600' : 'text-green-500'
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-1">
                    <Image src="/kwam2.svg" className="w-32 h-16 object-contain" alt="logo" width={100} height={100} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={`block py-3 text-lg font-rubik font-medium transition-colors ${
                        pathname === item.url ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    className="w-full bg-orange-400 hover:bg-orange-600 text-white font-normal py-3 rounded-full text-lg transition-colors font-rubik"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
