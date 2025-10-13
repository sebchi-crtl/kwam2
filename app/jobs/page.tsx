import React from 'react'
import Link from 'next/link'

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#5CA90C] mb-6">
            Join Our Team
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Be part of something bold. Work with us to create meaningful change and grow your career.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Open Positions
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Job Card 1 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Frontend Developer
            </h3>
            <p className="text-muted-foreground mb-4">
              Build beautiful, responsive user interfaces using React and Next.js
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Backend Developer
            </h3>
            <p className="text-muted-foreground mb-4">
              Design and implement scalable server-side solutions
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              UI/UX Designer
            </h3>
            <p className="text-muted-foreground mb-4">
              Create intuitive and engaging user experiences
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Product Manager
            </h3>
            <p className="text-muted-foreground mb-4">
              Lead product strategy and drive innovation
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Job Card 5 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              DevOps Engineer
            </h3>
            <p className="text-muted-foreground mb-4">
              Build and maintain our cloud infrastructure
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Job Card 6 */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Marketing Specialist
            </h3>
            <p className="text-muted-foreground mb-4">
              Drive growth and brand awareness
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Full-time</span>
              <Link 
                href="https://tally.so/r/3Xdprd" 
                target="_blank"
                className="text-[#5CA90C] hover:text-[#4A8A0A] font-medium transition-colors"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Why Work With Us?
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5CA90C] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground">Work on cutting-edge projects that make a real impact</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#5CA90C] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Great Team</h3>
            <p className="text-muted-foreground">Collaborate with talented and passionate professionals</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#5CA90C] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Growth</h3>
            <p className="text-muted-foreground">Continuous learning and career development opportunities</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Don&apos;t See Your Role?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          We&apos;re always looking for talented individuals to join our team
        </p>
        <Link 
          href="https://tally.so/r/3Xdprd" 
          target="_blank"
          className="inline-flex items-center px-8 py-4 bg-[#5CA90C] text-white font-semibold rounded-lg hover:bg-[#4A8A0A] transition-colors"
        >
          Send Us Your Resume
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  )
}

export default Jobs
