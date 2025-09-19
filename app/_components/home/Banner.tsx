"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const [isDesktopImageLoaded, setIsDesktopImageLoaded] = useState(false);
  const [isMobileImageLoaded, setIsMobileImageLoaded] = useState(false);

  return (
    <div className="mx-auto bg-background text-foreground">
      {/* <div className="flex justify-center mb-8">
        <div className="border-2 border-orange-300 px-4 py-2 rounded-full font-normal text-base font-rubik tracking-widest hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
          Coming Soon
        </div>
      </div> */}
      <section className="text-center max-w-4xl xl:max-w-5xl mx-auto px-6 mb-16 mt-16">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold text-foreground mb-6 font-rubik animate-fade-in-up">
        Why predict the future
        </h1>
        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-rubik animate-fade-in-up-delay">
          <p className="mb-4">
          when we can build it?
          </p>
        </div>
      </section>
      <div className="flex justify-center w-full animate-fade-in-up-delay-2">
        {/* Desktop Image with Skeleton */}
        <div className="relative w-full max-md:hidden">
          {!isDesktopImageLoaded && (
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg"></div>
            </div>
          )}
          <Image 
            src="/image/landing/banner_hero.svg" 
            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${isDesktopImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            alt="banner" 
            width={1000} 
            height={1000}
            onLoad={() => setIsDesktopImageLoaded(true)}
          />
        </div>

        {/* Mobile Image with Skeleton */}
        <div className="relative w-full max-md:block hidden">
          {!isMobileImageLoaded && (
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
            </div>
          )}
          <Image 
            src="/image/landing/banner_hero_mobile.svg" 
            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${isMobileImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            alt="banner" 
            width={1000} 
            height={1000}
            onLoad={() => setIsMobileImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
