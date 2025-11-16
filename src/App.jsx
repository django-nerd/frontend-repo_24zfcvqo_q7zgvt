import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import './index.css'

function App() {
  const [contactOpen, setContactOpen] = useState(false)

  // Static background image (solar panels) visible across the whole page
  const staticBg = "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')"

  return (
    <div className="min-h-screen w-full">
      {/* Static background with solar installation photo */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: staticBg,
        }}
      >
        {/* Subtle overlay to maintain readability while keeping image clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-blue-900/30 to-blue-950/50" />
      </div>

      <Header onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Benefits />
        <Services />
        <Contact />
        <footer className="py-10 text-center text-white/90 bg-blue-950/60">
          <p>© {new Date().getFullYear()} Royal Groups • Solar Installation, Operations & Maintenance • India</p>
          <p className="mt-1 text-sm">GST & MSME compliant • PAN‑India Support • MNRE aligned</p>
        </footer>
      </main>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

export default App
