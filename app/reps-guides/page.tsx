import React from 'react'
import Link from 'next/link'

const RepsGuides = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#5CA90C] mb-6">
            Reps & Guides
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Come join us and help people have more fun attending the events they like!
          </p>
        </div>
      </section>

      {/* Reps & Guides Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* UK Churches Reps */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              UK Churches Reps (via Narrow Gate)
            </h3>
          </div>

          {/* US Youth Reps */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              US Youth Reps
            </h3>
          </div>

          {/* NBA Fan Reps */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              NBA Fan Reps
            </h3>
          </div>

          {/* NFL Fan Reps */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              NFL Fan Reps
            </h3>
          </div>

          {/* Premier League Fan Reps */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Premier League Fan Reps
            </h3>
          </div>

          {/* London Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              London Event Guides
            </h3>
          </div>

          {/* Birmingham Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Birmingham Event Guides
            </h3>
          </div>

          {/* Manchester Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Manchester Event Guides
            </h3>
          </div>

          {/* Newcastle Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Newcastle Event Guides
            </h3>
          </div>

          {/* New York Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              New York Event Guides
            </h3>
          </div>

          {/* Atlanta Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Atlanta Event Guides
            </h3>
          </div>

          {/* Miami Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Miami Event Guides
            </h3>
          </div>

          {/* LA Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              LA Event Guides
            </h3>
          </div>

          {/* Las Vegas Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Las Vegas Event Guides
            </h3>
          </div>

          {/* Paris Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Paris Event Guides
            </h3>
          </div>

          {/* Lagos (Nigeria) Event Guides */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-foreground">
              Lagos (Nigeria) Event Guides
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-8 xl:px-24 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our community of passionate reps and guides
        </p>
        <Link 
          href="https://tally.so/r/3Xdprd" 
          target="_blank"
          className="inline-flex items-center px-8 py-4 bg-[#5CA90C] text-white font-semibold rounded-lg hover:bg-[#4A8A0A] transition-colors"
        >
          Apply Now
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  )
}

export default RepsGuides
