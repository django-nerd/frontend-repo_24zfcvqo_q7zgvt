import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import './index.css'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const bgImages = useMemo(
    () => [
      // Rooftop
      "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2069&auto=format&fit=crop')",
      // Solar field (utility scale)
      "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')",
      // Desert array
      "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2069&auto=format&fit=crop')",
      // Over water / floating (ponds/rivers)
      "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
    ],
    []
  )
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length)
    }, 7000)
    return () => clearInterval(id)
  }, [bgImages.length])

  return (
    <div className="min-h-screen w-full">
      {/* Rotating background with solar installation photos */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center transition-[background-image] duration-700 ease-in-out"
        style={{
          backgroundImage: `${bgImages[bgIndex]}`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-blue-950/80" />
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
