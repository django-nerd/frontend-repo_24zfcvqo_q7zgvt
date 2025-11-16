import React from 'react'

const services = [
  {
    title: 'Solar EPC (Turnkey)',
    desc: 'Complete design, procurement and commissioning for rooftop and ground‑mounted systems.'
  },
  {
    title: 'Operations & Maintenance',
    desc: 'Cleaning schedules, preventive maintenance, inverter health checks and PR optimisation.'
  },
  {
    title: 'Energy Audit & Consulting',
    desc: 'Load analysis, tariff optimisation, net‑metering guidance and subsidy documentation support.'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">What We Do</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-white shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
