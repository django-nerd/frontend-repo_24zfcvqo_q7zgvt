import React from 'react'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
        <circle cx="32" cy="32" r="10" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="32" y1="4" x2="32" y2="14"/>
          <line x1="32" y1="50" x2="32" y2="60"/>
          <line x1="4" y1="32" x2="14" y2="32"/>
          <line x1="50" y1="32" x2="60" y2="32"/>
          <line x1="12" y1="12" x2="19" y2="19"/>
          <line x1="45" y1="45" x2="52" y2="52"/>
          <line x1="12" y1="52" x2="19" y2="45"/>
          <line x1="45" y1="19" x2="52" y2="12"/>
        </g>
      </svg>
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow">Royal Groups</span>
    </div>
  )
}

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default Header
