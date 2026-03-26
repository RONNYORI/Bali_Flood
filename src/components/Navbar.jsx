import { useState } from 'react'
import { navLinks } from '../data'


export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false)



  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#hero" className="flex items-center gap-2">
            <svg className="nav-lotus" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 Q8 9 4 11 Q8 10 12 15 Q16 10 20 11 Q16 9 12 3Z" stroke="#c9a84c" strokeWidth="0.9" fill="none" opacity="0.85"/>
              <circle cx="12" cy="11" r="2.2" stroke="#c9a84c" strokeWidth="0.9" fill="none" opacity="0.85"/>
            </svg>
            <span className="font-display text-xl font-bold gradient-gold-text">BALI BANJIR</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

         <div>
          <a href = "https://github.com/RONNYORI/Bali_Flood" target="_blank">
          <img src="/github-logo.png" alt="GitHub" className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity"/>
          </a>
          </div>


        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col px-4 pb-4 gap-2 text-sm font-medium md:hidden">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
