import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Light, faint green wash specifically for the first section to make the background image clearer */}
      <div className="absolute inset-0 bg-green-200/25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow">
            Bankable Solar EPC, Operations & Maintenance
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 drop-shadow">
            Royal Groups delivers end‑to‑end solar solutions for homes, SMEs and industries across India — from design and approvals to commissioning and long‑term O&M. Optimised yields, transparent reporting, and responsive after‑sales support.
          </p>
          {/* Removed CTAs as requested */}
          <div className="mt-6 text-white/90 text-sm">
            PAN‑India delivery • Residential | Commercial | Industrial • Rooftop, Ground‑Mounted & Floating
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
