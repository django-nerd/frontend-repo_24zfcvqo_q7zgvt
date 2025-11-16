import React, { useState } from 'react'

const ContactModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', message: '' })
  const [status, setStatus] = useState('')

  if (!open) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! Our team will reach out shortly.')
      setForm({ name: '', phone: '', email: '', city: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-2xl mx-4 rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Request a Free Consultation</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close">
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>

        <div className="px-6 pt-4 pb-6">
          <p className="text-gray-600">Share your details and our experts will schedule a site assessment, estimate your savings and plan the right system for your location.</p>
          <div className="mt-4 text-sm text-gray-700">
            <p>Email: <a href="mailto:info@royalgroups.ind.in" className="text-blue-700 font-medium">info@royalgroups.ind.in</a></p>
            <p>Phone: <a href="tel:+919124487155" className="text-blue-700 font-medium">+91-9124487155</a> (Mon–Sat, 9 AM – 7 PM)</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="px-4 py-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="px-4 py-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="px-4 py-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="city" value={form.city} onChange={handleChange} placeholder="City / Town" className="px-4 py-3 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirement" className="mt-4 px-4 py-3 rounded-lg border w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">Submit</button>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
