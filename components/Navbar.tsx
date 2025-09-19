"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize theme from localStorage and apply to <html>
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const initial: "light" | "dark" = saved === 'dark' || saved === 'light'
        ? (saved as "light" | "dark")
        : 'dark';
      setTheme(initial);
      const root = document.documentElement;
      if (initial === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {}
      const root = document.documentElement;
      if (next === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      return next;
    });
  };

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
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
              className={`font-rubik text-lg font-medium transition-colors hover:text-primary ${
                pathname === item.url ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
          >
            {theme === 'dark' ? (
              <div className="flex items-center gap-2"><Sun className="h-4 w-4" /> Light</div>
            ) : (
              <div className="flex items-center gap-2"><Moon className="h-4 w-4" /> Dark</div>
            )}
          </Button>
          <Button 
            className="bg-primary hover:opacity-90 text-primary-foreground font-normal px-6 py-2 rounded-full text-lg transition-all duration-300 font-rubik hover:scale-105"
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
                  isScrolled ? 'text-muted-foreground' : 'text-foreground'
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
                        pathname === item.url ? "text-foreground" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <div className="mb-4">
                    <Button
                      onClick={toggleTheme}
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-secondary"
                    >
                      {theme === 'dark' ? (
                        <div className="flex items-center gap-2 justify-center"><Sun className="h-4 w-4" /> Light</div>
                      ) : (
                        <div className="flex items-center gap-2 justify-center"><Moon className="h-4 w-4" /> Dark</div>
                      )}
                    </Button>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:opacity-90 text-primary-foreground font-normal py-3 rounded-full text-lg transition-colors font-rubik"
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
