'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with center card active
  const carouselRef = useRef<HTMLDivElement>(null)

  const portfolioItems = [
    {
      id: 1,
      logo: '/image/nig.svg',
      name: 'NIG'
    },
    {
      id: 2,
      logo: '/image/fruitea.svg',
      name: 'Fruitea'
    },
    {
      id: 3,
      logo: '/image/inc.svg',
      name: 'International Nigerian Community'
    },
    {
      id: 4,
      logo: '/image/narrow.svg',
      name: 'Narrow Gate'
    },
    {
      id: 5,
      logo: '/image/fco.svg',
      name: 'Frosted & Co'
      // size: 'w-30 h-36'
    },
    {
      id: 6,
      logo: '/image/tofg.svg',
      name: 'TOFG'
      // size: 'w-24 h-34'
    },
    {
      id: 7,
      logo: '/image/landing/Icon-black.svg',
      name: 'Attend'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className='bg-white dark:bg-[#0f0f0f] w-full h-full min-md:rounded-t-[9rem] mx-auto'>
      <section className='text-left max-w-[120rem] mx-auto px-8 xl:px-24 mb-16 mt-32'>
        
        <h1 className='text-4xl text-left md:text-6xl xl:text-8xl font-semibold text-foreground mb-6 font-rubik flex flex-col gap-6'>
          Portfolio
          <span className='text-muted-foreground font-semibold text-xl xl:text-3xl font-rubik '>
            Become a Partner Today- and Invest in the Future
          </span>
        </h1>

                                   {/* Custom Carousel */}
          <div className="relative w-full max-w-[1400px] mx-auto">
            {/* Carousel Container */}
                      <div 
              ref={carouselRef}
              className="relative h-[500px] flex items-center justify-center overflow-hidden"
            >
                         {portfolioItems.map((item, index) => {
               // Calculate position and scale based on distance from current index
               const distance = Math.abs(index - currentIndex)
               const isActive = index === currentIndex
               const isVisible = distance <= 2 // Show 5 cards total
               
               if (!isVisible) return null

               let transform = ''
               let scale = 1
               let zIndex = 1
               let opacity = 0.8

               if (isActive) {
                 transform = 'translateX(0) scale(1.1)'
                 scale = 1.1
                 zIndex = 10
                 opacity = 1
                               } else if (index < currentIndex) {
                  // Left side cards
                  const offset = (currentIndex - index) * 120
                  transform = `translateX(-${offset}px) scale(${1 - distance * 0.08})`
                  scale = 1 - distance * 0.08
                  zIndex = 5 - distance
                  opacity = 0.8 - distance * 0.1
                } else {
                  // Right side cards
                  const offset = (index - currentIndex) * 120
                  transform = `translateX(${offset}px) scale(${1 - distance * 0.08})`
                  scale = 1 - distance * 0.08
                  zIndex = 5 - distance
                  opacity = 0.8 - distance * 0.1
                }

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform,
                    scale,
                    zIndex,
                    opacity
                  }}
                >
                <div className={`w-[400px] h-[380px] rounded-3xl shadow-xl flex flex-col items-center justify-center transition-all duration-300 ${
                  isActive ? 'bg-orange-400 text-primary-foreground' : 'bg-card text-card-foreground border border-border'
                }`}>
                {/* Price Tag */}
                {/* <div className="absolute top-4 right-4 bg-white text-black px-3 py-2 rounded-full text-lg font-semibold">
                  {item.price}
                </div> */}
                    
                  {/* Logo/Image */}
                  <div className={` ${ 'w-32 h-32'}  mx-auto mb-6 flex items-center justify-center`}>
                    <Image 
                      src={item.logo} 
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                      
                  {/* Name */}
                  <span className={`text-2xl flex justify-center items-center font-semibold ${isActive ? 'max-md:text-sm' : ''}`}>
                    {item.name}
                  </span>
                  </div>
                </div>
              )
            })}
          </div>

            {/* Navigation Arrows */}
           <div className="flex items-center justify-center gap-6 mt-12">
             <button
               onClick={prevSlide}
               className="w-16 h-16 bg-gray-100 border border-orange-600 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
             >
               <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>
            
                         {/* Pagination Dots */}
            <div className="flex items-center gap-3">
               {portfolioItems.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full border border-green-200 transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                   }`}
                 />
               ))}
             </div>
            
              <button
               onClick={nextSlide}
               className="w-16 h-16  border border-orange-600 bg-gray-100 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
             >
               <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio