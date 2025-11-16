import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* Background with solar installation photos */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop'), url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2069&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Contact />
        <footer className="py-10 text-center text-white/80 bg-black/50">
          <p>© {new Date().getFullYear()} Royal Groups • Solar Installation, Operations & Maintenance • India</p>
          <p className="mt-1 text-sm">GST & MSME compliant • PAN‑India Support • MNRE aligned</p>
        </footer>
      </main>
    </div>
  )
}

export default App
