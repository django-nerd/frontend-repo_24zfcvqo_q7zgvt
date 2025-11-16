import React from 'react'

const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-blue-900/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow">
            Reliable Solar Installation, Operations & Maintenance
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 drop-shadow">
            Royal Groups is an India-based solar solutions company helping homes, SMEs and industries switch to clean energy with high ROI, zero-hassle maintenance, and trusted after‑sales support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onOpenContact} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
              Get a Free Site Assessment
            </button>
            <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/90 hover:bg-white text-gray-900 font-semibold shadow">
              Why Solar with Royal Groups
            </a>
          </div>
          <div className="mt-6 text-white/90 text-sm">
            Serving PAN India • Residential | Commercial | Industrial • Rooftop & Ground‑Mounted
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
