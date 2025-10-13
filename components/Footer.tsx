import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-background text-foreground'>
      {/* Partner Section */}
      <section className='text-center max-w-[120rem] mx-auto px-8 xl:px-24 py-16 2xl:py-44'>
        <h2 className='text-4xl dark:text-white/70 md:text-5xl xl:text-[8rem] font-semibold text-neutral-800 mb-8 font-rubik'>
          Become <br /> a partner?
        </h2>
        <button className='px-8 py-3 text-2xl  border border-green-600 lg:text-4xl rounded-full text-neutral-700 font-light hover:bg-neutral-50 transition-colors font-rubik'>
          Email Us
        </button>
      </section>

      {/* Footer Section */}
      <footer className='bg-background border-t border-border'>
        <div className='max-w-[120rem] mx-auto px-8 xl:px-24 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-md:place-items-center'>
            {/* Company Branding */}
            <div className='lg:col-span-1'>
                <Image src="/kwam2.svg" alt="logo" width={200} height={200} />
                <Image src="/color.svg" alt="logo" width={120} height={120} />
            </div>

            {/* Contact Information - Phone */}
            <div className='lg:col-span-1'>
              <div className='px-4 py-2 text-2xl lg:text-3xl border-2 border-neutral-300 rounded-full text-neutral-700 font-medium mb-2 inline-block'>
                +23 65 789 04
              </div>
              <p className='text-muted-foreground lg:text-lg'>
                17 Fort Pitt Street, Medway, ME4 6SX
              </p>
            </div>

            {/* Contact Information - Email */}
            {/* <div className='lg:col-span-1'>
              <div className='px-4 py-2 text-2xl lg:text-3xl border-2 border-neutral-300 rounded-full text-neutral-700 font-medium mb-2 inline-block'>
                info@kwam2.com
              </div>
              <p className='text-muted-foreground lg:text-lg'>
                MAIN OFFICE 901 N Pit Street Alexandria VA, 22314
              </p>
            </div> */}

            {/* Company Links */}
            <div className='lg:col-span-1'>
              <h4 className='text-2xl lg:text-3xl font-semibold text-foreground mb-4'>Company</h4>
              <ul className='space-y-2 text-lg lg:text-xl'>
                <li><a href="/about" className='text-muted-foreground hover:text-foreground transition-colors'>About Us</a></li>
                <li><a href="/meet" className='text-muted-foreground hover:text-foreground transition-colors'>Meet the Team</a></li>
                <li><a href="/jobs" className='text-muted-foreground hover:text-foreground transition-colors'>Jobs</a></li>
                <li><a href="mailto:Partners@Kwam2.com" className='text-muted-foreground hover:text-foreground transition-colors'>Contact Us</a></li>
              </ul>
            </div>

            {/* Support Links */}
            {/* <div className='lg:col-span-1'>
              <h4 className='text-2xl lg:text-3xl font-semibold text-foreground mb-4'>Support</h4>
              <ul className='space-y-2 text-lg lg:text-xl'>
                <li><a href="#" className='text-muted-foreground hover:text-foreground transition-colors'>Help center</a></li>
                <li><a href="#" className='text-muted-foreground hover:text-foreground transition-colors'>Terms of service</a></li>
                <li><a href="#" className='text-muted-foreground hover:text-foreground transition-colors'>Privacy Policy</a></li>
              </ul>
            </div> */}

          </div>

          {/* Copyright */}
          <div className='border-t border-border mt-8 pt-8'>
            <p className='text-sm text-muted-foreground'>
              Copyright @ 2025 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
