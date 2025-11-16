import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      // In a future iteration we can post this to the backend. For now, just simulate.
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! Our team will reach out shortly.')
      setForm({ name: '', phone: '', email: '', city: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Request a Free Consultation</h2>
            <p className="mt-4 text-gray-600">Share your details and our experts will schedule a site assessment, estimate your savings and plan the right system for your location.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Available across major Indian cities and towns</li>
              <li>• Support for residential, commercial and industrial projects</li>
              <li>• End‑to‑end execution with transparent pricing</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="px-4 py-3 rounded-lg border w-full" />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="px-4 py-3 rounded-lg border w-full" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="px-4 py-3 rounded-lg border w-full" />
              <input name="city" value={form.city} onChange={handleChange} placeholder="City / Town" className="px-4 py-3 rounded-lg border w-full" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirement" className="mt-4 px-4 py-3 rounded-lg border w-full h-28" />
            <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg">Submit</button>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
