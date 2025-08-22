import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-white'>
      {/* Partner Section */}
      <section className='text-center max-w-[120rem] mx-auto px-8 xl:px-24 py-16 2xl:py-44'>
        <h2 className='text-4xl md:text-5xl xl:text-[8rem] font-semibold text-orange-400 mb-8 font-rubik'>
          Become <br /> a partner?
        </h2>
        <button className='px-8 py-3 text-2xl lg:text-4xl border-2 border-orange-300 rounded-full text-orange-400 font-light hover:bg-orange-50 transition-colors font-rubik'>
          Email Us
        </button>
      </section>

      {/* Footer Section */}
      <footer className='bg-white border-t border-gray-100'>
        <div className='max-w-[120rem] mx-auto px-8 xl:px-24 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 place-items-center'>
            {/* Company Branding */}
            <div className='lg:col-span-1'>
                <Image src="/image/landing/Logo.svg" alt="logo" width={250} height={250} />
                <Image src="/image/kwam.png" alt="logo" width={150} height={150} />
            </div>

            {/* Contact Information - Phone */}
            <div className='lg:col-span-1'>
              <div className='px-4 py-2 text-2xl lg:text-3xl border-2 border-orange-300 rounded-full text-orange-400 font-medium mb-2 inline-block'>
                +23 65 789 04
              </div>
              <p className='text-gray-700 lg:text-lg'>
                MAIN OFFICE 901 N Pit Street Alexandria VA, 22314
              </p>
            </div>

            {/* Contact Information - Email */}
            <div className='lg:col-span-1'>
              <div className='px-4 py-2 text-2xl lg:text-3xl border-2 border-orange-300 rounded-full text-orange-400 font-medium mb-2 inline-block'>
                info@kwam2.com
              </div>
              <p className='text-gray-700 lg:text-lg'>
                MAIN OFFICE 901 N Pit Street Alexandria VA, 22314
              </p>
            </div>

            {/* Company Links */}
            <div className='lg:col-span-1'>
              <h4 className='text-2xl lg:text-3xl font-semibold text-orange-400 mb-4'>Company</h4>
              <ul className='space-y-2 text-lg lg:text-xl'>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>About Us</a></li>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>Contact Us</a></li>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>Testimonial</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className='lg:col-span-1'>
              <h4 className='text-2xl lg:text-3xl font-semibold text-orange-400 mb-4'>Support</h4>
              <ul className='space-y-2 text-lg lg:text-xl'>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>Help center</a></li>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>Terms of service</a></li>
                <li><a href="#" className='text-gray-700 hover:text-orange-400 transition-colors'>Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className='border-t border-gray-100 mt-8 pt-8'>
            <p className='text-sm text-gray-700'>
              Copyright @ 2025 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
