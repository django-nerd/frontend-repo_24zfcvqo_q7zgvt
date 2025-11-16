import React from 'react'

const points = [
  {
    title: 'Lower Electricity Bills',
    desc: 'Save up to 80% on your monthly power costs with a well‑sized rooftop system. Net‑metering further reduces bills.'
  },
  {
    title: 'High ROI & Quick Payback',
    desc: 'Typical payback in 3–5 years, followed by decades of free power. Ideal for Indian homes, shops and MSMEs.'
  },
  {
    title: 'Reliable Operations & Maintenance',
    desc: 'End‑to‑end O&M with regular cleaning, performance audits, remote monitoring and quick on‑site support.'
  },
  {
    title: 'Make in India Friendly',
    desc: 'We support BIS‑certified, ALMM‑listed modules and MNRE‑compliant components suited for Indian conditions.'
  },
  {
    title: 'Government Subsidies',
    desc: 'Assistance with PM‑Surya Ghar and State DISCOM processes where applicable to reduce upfront cost.'
  },
  {
    title: 'Increase Property Value',
    desc: 'Solar adds long‑term asset value and reduces dependency on grid power and diesel gensets.'
  }
]

const env = [
  {
    title: 'CO₂ Emissions Reduced',
    desc: 'Each kWh of solar offsets ~0.8 kg CO₂ in India, directly cutting your carbon footprint.'
  },
  {
    title: 'Fossil Fuel Independence',
    desc: 'Clean, renewable energy reduces reliance on coal and diesel, improving air quality.'
  },
  {
    title: 'Sustainable Future',
    desc: 'Solar power supports India’s climate goals and promotes responsible energy consumption.'
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-20 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Why Choose Solar with Royal Groups</h2>
        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">From design to commissioning and long‑term O&M, we deliver bankable systems optimised for Indian weather and tariffs.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="p-6 rounded-xl bg-white shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-2xl font-bold text-gray-900 text-center">Environmental Contribution</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {env.map((e) => (
            <div key={e.title} className="p-6 rounded-xl bg-emerald-50 border border-emerald-100">
              <h4 className="text-lg font-semibold text-emerald-900">{e.title}</h4>
              <p className="mt-2 text-emerald-800">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
